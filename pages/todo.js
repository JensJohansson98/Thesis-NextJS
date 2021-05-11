import React from "react"
import styles from '../styles.module.css'

export default class Todo extends React.Component{

    state = {
        completed: this.props.todo.completed
    }

    markAsDone = () => {
        this.setState({completed: !this.props.todo.completed}, () => {
            this.props.handleUpdateTodo(this.props.todo.id, this.props.todo.taskName, this.state.completed);
        })
    }

    render(){
        return(
            <div className={styles.todo}>
                <li>
                    <label>
                        {this.props.todo.taskName}
                    </label>
                    <button onClick={event => this.props.handleDeleteTodo(this.props.todo.id, event)}>x</button>
                    <input type="checkbox" defaultChecked={this.props.todo.completed} onClick={this.markAsDone} />
                </li>
            </div>

        )
    }
        

}