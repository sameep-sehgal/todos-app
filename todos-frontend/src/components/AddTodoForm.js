import React from 'react';
import {Field,reduxForm} from 'redux-form';
import {createTodo} from '../actions';
import { connect } from 'react-redux';

const AddTodoForm = (props) => {
    const renderInput = (formProps) => {
        return (
            <div>
                <input
                    type='text'
                    {...formProps.input}
                    autoComplete='off'
                />
                <p>{formProps.meta.error}</p>
            </div>
        )
    }
    
    const onSubmit = (formData) => {
        props.createTodo(formData,props.history)
    }

    return (
        <form onSubmit={props.handleSubmit(onSubmit)} className='container'>
            <Field name='title' component={renderInput}/>
            <button className='btn btn-warning' type='submit'>Submit</button>
        </form>
    )
}

const validate=(formData)=>{
    if(!formData.title){
        return {
            title:'You cannot leave it empty.'
        }
    }else{
        return {}
    }
}

const formWrapped = reduxForm({form:'TodoCreate',validate})(AddTodoForm)

export default connect(null,{createTodo})(formWrapped);