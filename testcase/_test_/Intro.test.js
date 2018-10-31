import React from 'react';
import Intro from '../Intro';
import Login from '../src/LoginPage';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<Intro />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders login correctly', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
});
