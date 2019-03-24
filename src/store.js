import {createStore} from 'redux'
import rootReducer from './reducers'
import {addTodo,toggleTodo,setFilter,setTodoText}from './actions'

const store = createStore(rootReducer)

//初始state
console.log(store.getState())

//订阅state变化
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})

//触发action
store.dispatch(addTodo('learing react'))
store.dispatch(toggleTodo(0))
store.dispatch(setFilter('active'))
store.dispatch(setTodoText('hello world'))



//取消订阅
unsubscribe()