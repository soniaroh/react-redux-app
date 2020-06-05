import * as actions from './constants';

export const fetchSuccess = users => ({
  type: actions.FETCH_SUCCESS,
  payload: {
    users
  }
});

export const fetchError = () => ({
  type: actions.FETCH_ERROR
});

export const fetchLoading = () => ({
  type: actions.FETCH_LOADING
});

export const fetchUsers = () => async dispatch => {
  dispatch(fetchLoading());
  let url = 'https://jsonplaceholder.typicode.com/users';
  try {
    let response = await fetch(url);
    let json = await(response.json());
    console.log(json)
    dispatch(fetchSuccess(json));
  }catch(err) {
    dispatch(fetchError())
  }
}