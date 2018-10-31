import React from 'react';
import Login from '../src/LoginPage';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
//const mockFn = jest.fn();

describe('Testing ReassignLocationMenu component', () => {
	it('renders as expected', () => {
		const wrapper = shallow(
			<Login/>
		);
		expect(wrapper).toMatchSnapshot();
	});
});


test('render password errors', () => {
	const wrapper = shallow(<Login/>);
	const fields = {
		name: 'soni',
		pass: 'sonirathore01'
	};
	expect(wrapper.instance().validateEmail(fields.name));
});

test('render password errors', () => {
	const wrapper = shallow(<Login/>);
	const passwordFields = {
		email: 'sonika.rathore55@gmail.com',
		password: 'son'
	};
	expect(wrapper.instance().validatePassword(passwordFields.password));
});
