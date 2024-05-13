import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: 'Test Todo', isComplete: false}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: { // Reducers mai bas methods hote hai jisse hum state change krte hai
        addTodo: (state, action)=>{ // Reducer ke Function mai 2 cheez milti hai state and action. state mai apna state or you can say current value of state and action se apan parameter bhejte hai inn functions mai
            state.todos.push({
                id: nanoid(), text: action.payload, isComplete: false
            }); // State kya hai ek object hai jismai hum todo store kr rahe hai structure is like "initial State"
        },
        deleteTodo: (state, action)=>{
            console.log("removing...")
            state.todos = state.todos.filter((todo)=>{
                return todo.id !== action.payload;
            })
        }
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions; // Reducer function jo upar banaye hai unhe export krdo. Dono function stored hote hai actions mai

export const todoReducer = todoSlice.reducer // Store ko aware krne ke liye ke humare pass ye registered reducer function hai or inn se he value update krni hai
