import { createStore } from "redux"

//create a shared state and manipulate it using action type
//the reducer always returns a state(new state) from what I know until now
const reducerFn = (state={username:"username", password:"", message: "msg"}, action) =>{
    const user = {
        username: "one",
        password: "123",
    }
    if(action.type === 'LOGIN'){
        if(user.username == action.payload.username && user.password==action.payload.password){
            state = {...state, message:"correct username & password"}
        }else{
            state = {...state, message:"incorrect"}
        }
    }
    if(action.type === 'LOGOUT'){
        console.log('logged out')
    }
    return state
}

const store = createStore(reducerFn);

export default store;