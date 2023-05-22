import { createStore } from "redux"

//create a shared state and manipulate it using action type
//the reducer always returns a state(new state) from what I know until now
const reducerFn = (
        state= {
            username:"", 
            password:"", 
            message: "", 
            shouldSlide: false,
            loggedIn: false,
            cartQuantity: 0    
        }, 
        action) =>{
    const user = JSON.parse(localStorage.getItem('user'))
    if(user){
        state = {...state, username: user.username, loggedIn:true}
    }
    else if(action.type === 'LOGIN'){
        if(action.payload.loggedIn === true){
            state = {...state, username: action.payload.username, loggedIn:true}
            localStorage.setItem('user', JSON.stringify(action.payload.user))
        }else{
            state = {...state, loggedIn:false}
        }
    }
    if(action.type === 'LOGOUT'){
        console.log('logged out')
        localStorage.removeItem('user')
        state = {...state, loggedIn:false}
    }
    if(action.type === 'UPDATE_CART'){
        state = {...state, cartQuantity: action.payload.cartQuantity}
    }
    return state
}

const store = createStore(reducerFn);

export default store;