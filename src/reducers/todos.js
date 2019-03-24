import { ADD_TODO, TOGGLE_TODO } from '../actions/actionTypes'

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
        //只需要关注todos的状态，不需要关注其他的状态，所以这里的state实际是todos列表，而不是全局的state
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return (
                state.map((item) => {
                    return item.id === action.id ? { ...item, completed : !item.completed } : item
                })
            )
        default:
            return state;
    }
}

export default todos