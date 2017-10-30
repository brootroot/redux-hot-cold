import React from 'react';
import { shallow, mount } from 'enzyme';

import { GuessSection } from './guess-section';

describe('GuessSection', () => {
  it('should render without breaking', () => {
    shallow(<GuessSection />);
  });

  it('should render the correct feedback', () => {
    const feedback = "You're Ice Cold...";
    const wrapper = shallow(<GuessSection feedback={feedback} />);
    expect(wrapper.find('#feedback').text()).toEqual(feedback);
  });
});
