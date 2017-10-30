import React from 'react';
import { shallow, mount } from 'enzyme';

import { TopNav } from './top-nav';
import { toggleInfoModal, newGame } from '../actions';

describe('TopNav', () => {
  it('should render without breaking', () => {
    shallow(<TopNav />);
  });

  it('should dispatch toggleInfoModal when .what is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    wrapper.find('.what').simulate('click', { preventDefault() {} });
    expect(dispatch).toHaveBeenCalledWith(toggleInfoModal());
  });

  it('should dispatch newGame when .new is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    wrapper.find('.new').simulate('click', { preventDefault() {} });
    expect(dispatch.mock.calls[0][0].type).toEqual('NEW_GAME');
  });
});
