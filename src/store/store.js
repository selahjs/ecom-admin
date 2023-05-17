import { createStore } from "redux"

//create a shared state and manipulate it using action type
//the reducer always returns a state(new state) from what I know until now
const reducerFn = (state={username:"", password:"", message: "", shouldSlide: false,loggedIn: false}, action) =>{
    const user = {
        username: "one@one",
        password: "123",
    }
    if(action.type === 'LOGIN'){
        if(action.payload.loggedIn === true){
            state = {...state, username: action.payload.username, loggedIn:true}
        }else{
            state = {...state, loggedIn:false}
        }
        // fetch('http://localhost:4000/api/user/login', {
        //     method: 'POST',
        //     headers: {'Content-Type':'application/json'},
        //     body: JSON.stringify({email:action.payload.username, password:action.payload.password})
        // })
        //     .then(res => res.json())
        //     .then(data => console.log(data))
    }
    if(action.type === 'LOGOUT'){
        console.log('logged out')
    }
    return state
}

const store = createStore(reducerFn);

export default store;