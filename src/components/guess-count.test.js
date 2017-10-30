import React from 'react';

import { GuessCount } from './guess-count';
import { shallow, mount } from 'enzyme';

describe('GuessCount', () => {
  it('should render with breaking', () => {
    shallow(<GuessCount />);
  });

  it('should render the correct amount of guesses', () => {
    const guessNumber = 3;
    const wrapper = shallow(<GuessCount count={guessNumber} />);
    expect(wrapper.text()).toEqual(`Guess #${guessNumber}!`);
  });
});
