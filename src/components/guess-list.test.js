import React from 'react';
import { shallow, mount } from 'enzyme';

import { GuessList } from './guess-list';

describe('GuessList', () => {
  it('should render without breaking', () => {
    shallow(<GuessList guesses={[]} />);
  });

  it('should render the correct guesses', () => {
    const wrapper = mount(<GuessList guesses={[45, 56, 4]} />);
    const guessPropLength = wrapper.props().guesses.length;
    const guessPropJoined = wrapper.props().guesses.join('');
    const guessBoxText = wrapper.find('.guessBox').text();
    expect(guessPropJoined).toEqual(guessBoxText);
  });
});
