export const getText = (state)=>state.text

export const getFilter = (state)=>state.filter


export const getVisibleTodos = (state) => {
    let {filter,todos} = state
    todos = todos.data
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