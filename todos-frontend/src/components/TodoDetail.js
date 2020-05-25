import React from 'react';
import { connect } from 'react-redux';
import {fetchTodo,emptyTodos,deleteTodo,updateTodo} from '../actions';

class TodoDetail extends React.Component {
    componentDidMount = () => {
        this.props.fetchTodo(this.props.match.params.id)
    }

    renderTodoStatus = (completed) => {
        if(completed === true){
            return 'Complete'
        }else{
            return 'Incomplete'
        }
    }

    renderTodoButtons = (completed) => {
        const buttonText= completed ? 'Undo':'Done'
        return(
            <div > 
                <button className='btn btn-primary' onClick={()=>this.onCompletedButtonClick(completed)}>{buttonText}</button>
                <button className='btn btn-danger' onClick={this.onDeleteButtonClick}>Delete</button>
            </div>
        )
    }

    onCompletedButtonClick = (completed) => {
        const oppositeToCompleted = completed ? false:true
        this.props.updateTodo(this.props.match.params.id,{"completed":oppositeToCompleted},this.props.history)
    }

    onDeleteButtonClick = () => {
        this.props.deleteTodo(this.props.match.params.id,this.props.history)
    }

    renderTodoDetail=()=>{
        if(this.props.selectedTodo.length === 1){
            const {title,completed}=this.props.selectedTodo[0]
            return(
                <div className='container'>
                    <h3>{title}</h3>
                    <p>Status:  {this.renderTodoStatus(completed)}</p>
                    {this.renderTodoButtons(completed)}
                </div>
            )
        }else{
            return 'LOADING...'
        }
    }

    componentWillUnmount(){
        this.props.emptyTodos()
    }

    render(){
        return(
            this.renderTodoDetail()
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedTodo:state.todos
    }
}

export default connect(mapStateToProps,{fetchTodo,emptyTodos,updateTodo,deleteTodo})(TodoDetail);