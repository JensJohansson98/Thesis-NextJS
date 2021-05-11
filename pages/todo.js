import React from "react"
import styles from '../styles.module.css'

export default class Todo extends React.Component{

    state = {
        completed: this.props.completed
    }

    markAsDone = () => {
        this.setState({completed: !this.props.completed}, () => {
            this.props.handleUpdateTodo(this.props.id, this.props.taskName, this.state.completed);
        })
    }

    render(){
        return(
            <div className={styles.todo}>
                <li>
                    <label>
                        {this.props.taskName}
                    </label>
                    <button onClick={event => this.props.handleDeleteTodo(this.props.id, event)}>x</button>
                    <input type="checkbox" defaultChecked={this.props.completed} onClick={this.markAsDone} />
                </li>
            </div>

        )
    }
        

}