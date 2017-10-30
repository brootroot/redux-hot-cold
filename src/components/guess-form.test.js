import React from 'react';
import { shallow, mount } from 'enzyme';

import { GuessForm } from './guess-form';
import { makeGuess } from '../actions';

describe('GuessForm', () => {
  it('should render without breaking', () => {
    shallow(<GuessForm />);
  });

  it('should make a guess when the form is submitted', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<GuessForm dispatch={dispatch} />);
    const guess = '10';
    wrapper.find('.text').instance().value = guess;
    wrapper.simulate('submit');
    expect(dispatch).toHaveBeenCalledWith(makeGuess(guess));
  });

  it('should reset the input value when the form is submitted', () => {
    const wrapper = mount(<GuessForm dispatch={() => {}} />);
    const guess = '10';
    const input = wrapper.find('.text');
    wrapper.find('.text').instance().value = guess;
    wrapper.simulate('submit');
    expect(input.instance().value).toEqual('');
  });
});
