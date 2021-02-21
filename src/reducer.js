export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item : null,
    //Remove after development
    token:'',
}

//the primary function of the reducer is to listen or watch for actions

const reducer = (state, action) => {
    //state is what dataLayer looks like meaning value contained in state.
    //action is like setState or updateState..

    console.log("This is action in reducer", action);

    switch (action.type){
        case 'SET_USER':
            return {
                ...state, //meaning keep whatever is there in state and append following line..
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state, //meaning keep whatever is there in state and append following line..
                token: action.token
            }
        default:
            return state; //meaning if nothing matches, it shouldn't break our app. instead return the state
    }
}
export default  reducer;
