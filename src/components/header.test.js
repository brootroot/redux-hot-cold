import React from 'react';
import { shallow, mount } from 'enzyme';

import { Header } from './header';
import InfoModal from './info-modal';

describe('Header', () => {
  it('should render without breaking', () => {
    shallow(<Header />);
  });

  it('should not show the InfoModal component when showInfoModal is false', () => {
    const wrapper = shallow(<Header showInfoModal={false} />);
    expect(wrapper.find(InfoModal).exists()).toEqual(false);
  });

  it('should show the InfoModal component when showInfoModal is true', () => {
    const wrapper = shallow(<Header showInfoModal={true} />);
    expect(wrapper.find(InfoModal).exists()).toEqual(true);
  });
});
