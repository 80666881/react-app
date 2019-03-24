import { 
    ADD_TODO, 
    TOGGLE_TODO,
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE
} from '../actions/actionTypes'


const initialState = {
    isFetching:false,
    error:null,
    data:[]
}

const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case FETCH_TODOS_REQUEST:
            return{
                ...state,
                isFetching:true
            }
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                isFetching:false,
                data:action.data
            }
        case FETCH_TODOS_FAILURE:
            return {
                ...state,
                isFetching:false,
                error:action.error
            }
        default:
            return {
                ...state,
                data:todos(state.data,action)
            }
    }
}

//todos相当于拆分的子reducer
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

export default reducer