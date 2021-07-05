import React from 'react';
import { configure, shallow } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() })

describe('The app component rendering with shallow', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  })
})



