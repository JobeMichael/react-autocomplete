import { shallow } from 'enzyme'
import UserDetail from './userdetail.jsx'
import React, { Fragment } from 'react';

describe('User Details', () => {
    it('should be defined', () => {
        expect(UserDetail).toBeDefined();
    });
    it('renders login name', () => {
        const data = {
            avatar_url: '',
            login: '',
            score: 3,
        }
        const wrapper = shallow(<UserDetail {...data} />);
        expect(wrapper.find('span.as-login').length).toEqual(1);
    });
});
