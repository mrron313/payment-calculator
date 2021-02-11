import { TOGGLE_THEME_MODE } from './actionTypes'

export const toggleThemeMode = content => {
  return async dispatch => {
    return dispatch({
        type: TOGGLE_THEME_MODE,
        payload: content
    });
  };
}