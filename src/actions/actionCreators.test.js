import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import * as types from './constants';
import * as actions from './actionCreators';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  });

  it('ceates fetchSuccess when fetching has been done', () => {
    fetchMock.getOnce('/users', {
      body: { users: [{id: 1, name: 'foo'}]},
      headers: {'content-type': 'application/json'}
    });

    const expectedActions = [
      {type: types.FETCH_LOADING},
      {type: types.FETCH_ERROR}     
    ];

    const store = mockStore({users:[], loading: false, error: false});
    store.dispatch(actions.fetchUsers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})