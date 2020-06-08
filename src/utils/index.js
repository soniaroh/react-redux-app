import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/index';
import ReduxThunk from 'redux-thunk';
const middlewares = [ReduxThunk]

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};

export const filterUsers = (users, searchedTerm) => {
  return users.filter(user => user.name.toLowerCase().includes(searchedTerm.toLowerCase()))
}
