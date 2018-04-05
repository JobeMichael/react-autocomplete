import { shallow } from 'enzyme'
import Searchfield from './searchfield.jsx'
import React, { Fragment } from 'react';

describe('SearchField ', () => {
    it('should be defined', () => {
        expect(Searchfield).toBeDefined();
    });
    it('render all fields', () => {
        const wrapper = shallow(<Searchfield />);
        expect(wrapper.find('input').length).toEqual(1);
    });
});
