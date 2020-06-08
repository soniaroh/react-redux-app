import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import  App   from './App';
import { shallow } from 'enzyme';
import {testStore, findByTestAtrr} from './utils/index.js';
configure({ adapter: new Adapter() });

const setUp = (initialState) => {
  const store = testStore(initialState.users);
  const wrapper = shallow(<App store={store}/>).childAt(0).dive()
  return wrapper;
};

describe('App', () => {

  let wrapper;
  beforeEach(() => {
    const initialState = {
      users: [
        {
          id: 1,
      name: "Leanne Graham",
      phone: "1-770-736-8031 x56442" 
        },
        {
          id: 12,
      name: "Leanne2 Graham",
      phone: "1-7706-736-8031 x56442" 
        }
      ],
      loading: false,
      error: false
    }
    wrapper = setUp(initialState)
  });

  it('should render', () => {
    const component = findByTestAtrr(wrapper, 'appComponent')
    expect(component.length).toBe(1)
  });

})