//  initialState= what the data layer looks like when the app is loaded 
// initialState is an object and initially it is null but we want it to contain the term which we want to search
export const initialState = {
    user : null,
};
// whenever we want to change the data layer, we need to dispatch an action so whenever user types something and hit enter key, this will dispatch an action which says go ahead and change the search term
export const actionTypes={
    SET_USER: "SET_USER",
};

// "state" is teh state of data layer and "action" is whatever we are dispatching into the data layer or context api
const reducer = (state, action) => {
    console.log(action);
    // inside the data layer, reducer's job is to liste for any dispatched actions
    switch(action.type){
        case actionTypes.SET_USER:
        return {
            // it will return what the new data layer will look like
            
            ...state,  
            user: action.user,
            // this says whatever the state currently looks like(...state). "..." is the spread operator. then also change the term inside the data layer with the action term you dispatched
        };
        // it we dont know what the dispatch action is, it just returns whatever the state was initially
        default:
            return state;
    }
};
export default reducer;
