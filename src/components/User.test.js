import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import  User   from './User';
import { shallow } from 'enzyme';
configure({ adapter: new Adapter() });

describe('User', () => {

  const props = {
    id: 1,
    name: "Leanne Graham",
    phone: "1-770-736-8031 x56442"    
  };

  let wrapper;
  let onClick = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<User user={props} onClick={onClick}/>);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render users name', () => {
    const name = wrapper.find('.name');  
    expect(name.text()).toBe('Leanne Graham');
  });

  it('should set state when name is clicked', () => {
    const name = wrapper.find('.name');
    name.props().onClick();
    const info = wrapper.find('.info');
    expect(info.text()).toEqual('Tel: 1-770-736-8031 x56442');
  });

})
