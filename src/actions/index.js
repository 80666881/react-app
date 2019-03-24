//因为在reducer中还要使用type，所以这里要在actionType中统一定义
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_FILTER,
    SET_TODO_TEXT,
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE
} from './actionTypes'

let nextTodoId = 0

const fetchTodosRequest = () => ({
    type: FETCH_TODOS_REQUEST,

})
const fetchTodoSuccess = (data) => ({
    type: FETCH_TODOS_SUCCESS,
    data

})
const fetchTodosFailure = (error) => ({
    type: FETCH_TODOS_FAILURE,
    error
})

/**
 * 异步action调用
 */
export const fetchTodos = ()=>{
    return (dispatch)=>{
        dispatch(fetchTodosRequest())
        return fetch('./mock/todos.json').then(
            response =>{
                response.json().then(data=>{
                    dispatch(fetchTodoSuccess(data))
                })
            },
            error=>{
                dispatch(fetchTodosFailure(error))
                console.log('error...',error)
            }
        )

    }
}
/**
 * 新增待办事项
 */
export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
})

/**
 * 切换完成状态
 * @param {*} id 
 */
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})


/**
 * 设置过滤状态
 * @param {*} filter 
 */
export const setFilter = filter => ({
    type: SET_FILTER,
    filter
})

/**
 * 设置新增待办事项的文本
 * @param {*} text 
 */
export const setTodoText = text => ({
    type: SET_TODO_TEXT,
    text
})