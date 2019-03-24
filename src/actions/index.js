//因为在reducer中还要使用type，所以这里要在actionType中统一定义
import {ADD_TODO,TOGGLE_TODO,SET_FILTER,SET_TODO_TEXT} from './actionTypes'

let nextTodoId = 0


/**
 * 新增待办事项
 */
export const addTodo = (text)=>(
    {
        type:ADD_TODO,
        id:nextTodoId++,
        text
    }
)

/**
 * 切换完成状态
 * @param {*} id 
 */
export const toggleTodo = (id)=>(
    {
        type:TOGGLE_TODO,
        id
    }
)


/**
 * 设置过滤状态
 * @param {*} filter 
 */
export const setFilter = filter =>(
    {
        type:SET_FILTER,
        filter
    }
)

/**
 * 设置新增待办事项的文本
 * @param {*} text 
 */
export const setTodoText = text =>(
    {
        type:SET_TODO_TEXT,
        text
    }
)