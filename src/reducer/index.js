import { SET_FILTER, TOGGLE_TODO } from "../actions/actionTypes";
import {ADD_TODO,TODO_TODO,SET_TODO_TEXT,SET_FILTER} from '../actions/actionTypes'

const initialState = {
    filter:'all',
    text:'',
    todos:[]
}

const todoApp = (state=initialState,action)=>{
    switch (action.type) {
        case ADD_TODO:
            return{
                ...state,
                todos:[
                    ...state.todos,
                    {
                        id:action.id,
                        text:action.text,
                        completed:false
                    }
                ]
            }
        case TOGGLE_TODO:
        return{
            ...state,
            todos:todos.filter((item)=>{
                return item.id===action.id?{...item,completed = !item.completed}:item
            })
        }
        case SET_TODO_TEXT:
        return{
            ...state,
            text:action.text
        }
        case SET_FILTER:
        return {
            ...state,
            filter:action.filter
        }
        default:
            return state;
    }
}

export default todoApp