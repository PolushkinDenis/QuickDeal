import { ITask } from "@/types/task";

const initialState: ITask[] = []

export default {
    state: initialState,
    
    mutations: {
        setTasks(state: ITask[]) {
            const localstorageTasks = localStorage.getItem('tasks')
            localstorageTasks && localstorageTasks !== JSON.stringify(state) && state.push(...JSON.parse(localstorageTasks))
        },
        addTasks(state: ITask[], actions: ITask) {
            state.push(actions)
            localStorage.setItem('tasks', JSON.stringify(state));
        },
        delete(state: ITask[], actions: number) {
            state.splice(state.findIndex(task => task.id === actions), 1)
            localStorage.setItem('tasks', JSON.stringify(state));
        },
        changeTask(state: ITask[], actions: ITask) {
            let index = state.findIndex(task => task.id === actions.id)       
            state.splice(index, 1, actions)
            localStorage.setItem('tasks', JSON.stringify(state));
        }
    },
    getters: {
        getTasks(state: ITask[]) {        
            return state
        }
    },
}