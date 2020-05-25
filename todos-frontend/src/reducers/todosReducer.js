export default (state=[],action) => {
    switch(action.type){
        case 'FETCH_TODOS':
            return action.payload
        case 'FETCH_TODO':
            return action.payload
        case 'EMPTY_TODOS':
            return action.payload
        default:
            return state
    }
}