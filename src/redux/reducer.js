import actions from './actions';

const initialState = {
    isDarkMode: false
}

function reducer (state = initialState, action) {
    switch(action.type){
        case "TOGGLE_THEME_MODE":
            return{
                ...state,
                isDarkMode: action.payload
            }
        default: return state
    }
}

export default reducer;