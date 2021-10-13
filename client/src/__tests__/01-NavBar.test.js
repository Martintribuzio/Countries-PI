import React from 'react'
import { Link } from 'react-router-dom'
import { configure, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import NavBar from '../components/NavBar/index.jsx'

configure({ adapter: new Adapter() })

describe('NavBar', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<NavBar />)
  })

  test('Navbar should render two Links', () => {
    expect(wrapper.find(Link)).toHaveLength(3)
  })
})
