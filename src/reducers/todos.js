import {
    ADD_TODO,
    TOGGLE_TODO,
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE
} from '../actions/actionTypes'
import Immutable from 'immutable'

const initialState = {
    isFetching: false,
    error: null,
    data: []
}

const reducer = (state = Immutable.fromJS(initialState), action) => {
    switch (action.type) {
        case FETCH_TODOS_REQUEST:
            //set只能一次修改一个属性
            return state.set('isFetching', true)
        case FETCH_TODOS_SUCCESS:
            return state.merge({
                isFetching: false,
                //原本data是数组，不是不可变对象，需要转化
                data: Immutable.fromJS(action.data)
            })
        case FETCH_TODOS_FAILURE:
            // return {
            //     ...state,
            //     isFetching:false,
            //     error:action.error
            // }
            return state.merge({
                isFetching: false,
                error: action.error
            })
        default:
            // return {
            //     ...state,
            //     data:todos(state.data,action)
            // }
            const data = state.get('data')
            return state.set('data', todos(data, action))
    }
}

//todos相当于拆分的子reducer
const todos = (state = Immutable.fromJS([]), action) => {
    switch (action.type) {
        case ADD_TODO:
            //只需要关注todos的状态，不需要关注其他的状态，所以这里的state实际是todos列表，而不是全局的state
            const newTodo = Immutable.fromJS({
                id: action.id,
                text: action.text,
                completed: false
            })
            //list类型有push方法，与数组不同是会返回一个新的不可变对象
            return state.push(newTodo)
        case TOGGLE_TODO:
            return state.map(
                todo=>todo.get('id') === action.id?
                todo.set('completed',!todo.get('completed')):
                todo
            )
            
        default:
            return state;
    }
}

export default reducer