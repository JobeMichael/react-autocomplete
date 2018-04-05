import React from 'react';
import { shallow } from 'enzyme';
import Search from './search.jsx';

describe('Search', function () {
    it('should render without throwing an error', function () {
        const wrapper = shallow(<Search />);
        expect(wrapper.find('Searchfield').length).toEqual(1);
    });
});