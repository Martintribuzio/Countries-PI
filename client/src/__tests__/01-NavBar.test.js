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
  test('Navbar debe tener dos Links', () => {
    expect(wrapper.find(Link)).toHaveLength(2)
  })
  test('Navbar debe tener un link que cambie la ruta hacia /home', () => {
    expect(wrapper.find(Link).at(0).prop('to')).toEqual('/home')
  })
  test('Navbar debe tener un link que cambie la ruta hacia /home/newTour', () => {
    expect(wrapper.find(Link).at(1).prop('to')).toEqual('/home/new_tour')
  })
})
