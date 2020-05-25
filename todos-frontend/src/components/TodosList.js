import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchTodos} from '../actions';
import { Link } from 'react-router-dom';

const TodosList =(props) => {
    useEffect(
        () => {
            (async () =>{
                props.fetchTodos()
                }
            )()
        },[]
    )

    const renderTodoStatus = (completed) => {
        if(completed === true){
            return 'Complete'
        }else{
            return 'Incomplete'
        }
    }

    const renderTodos = () => {
        return props.todos.map(todo=>{
            return (             
                <li className="list-group-item" key={todo.id}>
                <span className="badge">{renderTodoStatus(todo.completed)}</span> 
                    <Link to={`/todo/${todo.id}`}>
                        {todo.title}
                    </Link>
                </li>
            )
        })
    }

    return(
        <React.Fragment>
            <ul className="list-group">
                {renderTodos()}
            </ul>
            <div className='text-center'>
                <Link to='/todo/add' className='rounded btn-danger btn'>Add New Todo</Link>
            </div>
        </React.Fragment>
    )
}


const mapStateToProps = state =>{
    return {
        todos:state.todos
    }
}

export default connect(mapStateToProps,{fetchTodos})(TodosList);