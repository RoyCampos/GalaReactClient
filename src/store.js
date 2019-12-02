import { createStore} from 'redux';

const initialState = {
    Places:[],
    Images:[]
}

const reducerPlaces =  (state = initialState, action) =>{
    return state
}

export default createStore(reducerPlaces);