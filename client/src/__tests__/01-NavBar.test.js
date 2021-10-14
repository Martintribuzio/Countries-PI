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
  test('Debe tener tres Links', () => {
    expect(wrapper.find(Link)).toHaveLength(3)
  })
  test('Debe tener un link que cambie la ruta hacia /', () => {
    expect(wrapper.find(Link).at(0).prop('to')).toEqual('/')
  })
  test('Debe tener un link que cambie la ruta hacia /home', () => {
    expect(wrapper.find(Link).at(1).prop('to')).toEqual('/home')
  })
  test('Debe tener un link que cambie la ruta hacia /home/newTour', () => {
    expect(wrapper.find(Link).at(2).prop('to')).toEqual('/home/new_tour')
  })
})
