import { FETCH_WEATHER } from "../actions";

export default function(state = [], action){

    switch(action.type){
        case FETCH_WEATHER:                              
            return [ action.payload.data, ...state ]; // [ city, city, city ]
            //same as
            // return state.concat([action.payload.data]);
    }
    return state;
}