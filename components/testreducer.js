import Redux, { createStore } from 'redux';

//Action 
export function signIn(value) {
    return { 
        type:'signIn',
        valueOfState: value}
}

/*
Pohja reducerille, ota edellinen tila ja Action ja palauta uusi tila.
Tämä reducer-funktio on siis "idealtaan samantapainen" kuin funktionaalisen ohjelmoinnin 
reduce-funktio eli Array.prototype.reduce(reducer, ?initialValue)
*/
 export function changeSignInValue(state, action) {
   if (state == undefined){
       state == false
   }
   if (action.type == 'signIn'){
    return state = action.valueOfState
}else{
    return state == false
}

}

export const store = createStore(changeSignInValue);


