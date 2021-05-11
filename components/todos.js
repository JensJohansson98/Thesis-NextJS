import React, {Fragment} from "react";
import styles from '../styles.module.css'
import Todo from "./todo"
import {v4} from "uuid";
import axios from "axios"


export default class Todos extends React.Component{

    state = {
        todos: [],
        newTodo: {
            "id" : '',
            "taskName": '',
            completed: false
        }
    }

    fetchTodos = async =>{
        try{

            fetch(`${process.env.invokeURL}/todos`)
            .then(response => response.json())
            .then(fetchedtodos => {
                this.setState({todos: fetchedtodos})
            });
        }catch(err){
            console.log(`An error has occured: ${err}`)
        }
    }

    componentDidMount = () =>{
        this.fetchTodos();
    }

    handleAddTodo = async (id, event) => {
        event.preventDefault();

        if (!this.state.newTodo.taskName) {
            alert("Please enter a task");
            return false;
          }

        try{
            const params = {
                "id":id,
                "taskName":this.state.newTodo.taskName,
                "completed":false
            }

            await axios.post(`${process.env.invokeURL}/todos/${id}`, params)
            this.setState({todos: [...this.state.todos, this.state.newTodo]});
            this.setState({newTodo: {"taskName": "", "id": "", "completed": false}});

        }catch(err){
            console.log(`Error when adding Todo: ${err}`);
        }

    }

    handleDeleteTodo = async (id, event) => {
        event.preventDefault();
        try{
            await axios.delete(`${process.env.invokeURL}/todos/${id}`);
            const updatedTodos = [...this.state.todos].filter(todo => todo.id !== id);
            this.setState({todos: updatedTodos});

        }catch(err){
            console.log(`Error when deleting Todo: ${err}`);
        }
    }

    handleUpdateTodo = async(id, taskName, completed) => {
        try{
            const params = {
                "id": id,
                "taskName": taskName,
                "completed": completed
            };
            await axios.patch(`${process.env.invokeURL}/todos/${id}`, params);
            const todoUpdate = [...this.state.todos].find(todo => todo.id === id);
            todoUpdate.taskName = taskName;
            todoUpdate.completed = completed;
            const updatedTodos = [...this.state.todos];
            const todoUpdateIndex = this.state.todos.findIndex(todo => todo.id === id);
            updatedTodos.splice(todoUpdateIndex, 1, todoUpdate);
            this.setState({todos: updatedTodos});

        }catch(err){
            console.log(`Error when updating todo: ${err}`);
        }
    }



    onAddTodoNameChange = event => this.setState({newTodo: {...this.state.newtodo, "taskName": event.target.value, "id": v4()}});

    render(){
        const Todos = this.state.todos.map((todo) =>
        <Todo
        key={todo.id}
        id={todo.id}
        taskName={todo.taskName}
        completed={todo.completed}
        handleDeleteTodo={this.handleDeleteTodo}
        handleUpdateTodo={this.handleUpdateTodo}
        />);

        const Completed = this.state.todos.filter(todo => todo.completed === true);

        return(

            <Fragment>
                <div className={styles.todoTitle}>
                    <h1>Your tasks</h1>
                </div>

                <div className={styles.todoWrapper}>
                    <div className={styles.todoForm}>
                        <form onSubmit={event => this.handleAddTodo(this.state.newTodo.id, event)}>
                            <input type="text" placeholder="Enter task" 
                            value={this.state.newTodo.taskName}
                            onChange={this.onAddTodoNameChange}
                            />
                            <button type="submit">Add new task</button>
                        </form>
                        
                    </div>

                    <div className={styles.todos}>
                        <ul>
                            {Todos}
                        </ul>
                        <h3>Completed: {Completed.length}/{this.state.todos.length}</h3>
                    </div>
                </div>
            </Fragment>

        )
    }

}