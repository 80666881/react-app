import {createSelector} from 'reselect'
export const getText = (state) => state.text

export const getFilter = (state) => state.filter

const getTodos = state =>state.todos.data
export const getVisibleTodos = createSelector([getTodos,getFilter],(todos,filter)=>{
    console.log('getvisibletodos')
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
})
