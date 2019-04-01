import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo,fetchTodos } from '../actions';
import {getVisibleTodos} from '../selectors'
//state是redux的全局state
const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state)
})

//dispatch就是state的dispatch
const mapDispatchToProps = (dispatch) => ({
    toggleTodo:id=>dispatch(toggleTodo(id)),
    fetchTodos:()=>dispatch(fetchTodos()),
})
/**
 * 利用connect高阶组件完成react和redux的连接
 */
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)