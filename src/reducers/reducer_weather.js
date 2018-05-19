import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action){
    switch(action.type){
        case FETCH_WEATHER: 
            //not mutating state here just adding to it, not like state.push(action.state.data)
            return [ action.payload.data, ...state ]
    }
    return state
}