export const getText = (state)=>state.get('text')

export const getFilter = (state)=>state.get('filter')


export const getVisibleTodos = (state) => {
    //getIn可以逐层遍历对象的属性
    const todos  = state.getIn(['todos','data'])
    const filter = state.get('filter')
    switch (filter) {
        case 'all':
            return todos
        case 'completed':
            return todos.filter((item) => item.get('completed'))
        case 'active':
            return todos.filter((item) => !item.get('completed'))
        default:
            return new Error('Unknow filter '+filter)
    }
}