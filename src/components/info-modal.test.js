import React from 'react';
import { shallow, mount } from 'enzyme';

import { InfoModal } from './info-modal';

describe('InfoModal', () => {
  it('should render without breaking', () => {
    shallow(<InfoModal />);
  });

  it('should invoke toggleInfoModal when link is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<InfoModal dispatch={dispatch} />);
    wrapper.find('.close').simulate('click', { preventDefault() {} });
    expect(dispatch).toHaveBeenCalled();
  });
});
