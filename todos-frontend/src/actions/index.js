import axios from 'axios';

export const fetchTodos = () => async (dispatch) => {
    const response= await axios.get('http://localhost:8000/api/task-list/')
    dispatch({type:'FETCH_TODOS',payload:response.data})
}
export const fetchTodo = (id) => async (dispatch) => {
    const response= await axios.get(`http://localhost:8000/api/task-detail/${id}`)
    dispatch({type:'FETCH_TODO',payload:[response.data]}) // response.data is mapped in an array to avoid errors while going back to taskList component
}
export const createTodo = (formData,history) => async (dispatch) => {
    const response= await axios.post(`http://localhost:8000/api/task-create/`,formData)
    dispatch({type:'CREATE_TODO',payload:response.data})

    history.push('/')
}
export const updateTodo = (id,requestData,history) => async (dispatch) => {
    const response= await axios.patch(`http://localhost:8000/api/task-update/${id}`,requestData)
    dispatch({type:'UPDATE_TODO',payload:response.data})

    history.push('/')
}
export const deleteTodo = (id,history) => async (dispatch) => {
    const response= await axios.delete(`http://localhost:8000/api/task-delete/${id}`)
    dispatch({type:'DELETE_TODO',payload:response.data})

    history.push('/')
}
export const emptyTodos = () => {
    return {
        type:'EMPTY_TODOS',
        payload:[]
    }
}