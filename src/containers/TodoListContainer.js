import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'all':
            return todos
        case 'completed':
            return todos.filter((item) => item.completed)
        case 'active':
            return todos.filter((item) => !item.completed)
        default:
            return new Error('Unknow filter '+filter)
    }
}

//state是redux的全局state
const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos,state.filter)
})

//dispatch就是state的dispatch
const mapDispatchToProps = (dispatch) => ({
    toggleTodo:id=>dispatch(toggleTodo(id))
})
/**
 * 利用connect高阶组件完成react和redux的连接
 */
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)