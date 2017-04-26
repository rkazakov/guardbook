import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import AboutPage from '../../../client/components/About/AboutPage';

describe('AboutPage', () => {

  it('renders h1', () => {
    const aboutPage = shallow(<AboutPage />);
    expect(aboutPage.find('h1').length).toBe(1);
  });

  it('renders blockquote', () => {
    const aboutPage = shallow(<AboutPage />);
    expect(aboutPage.find('blockquote').length).toBe(1);
  });

});
