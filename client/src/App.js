import Landing from './pages/landing'
import Home from './pages/home'
import Details from './pages/details'
import Activity from './pages/activity'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Route } from 'react-router-dom'
import './app.css'

const App = () => {
  return (
    <div className='app'>
      <Route exact path='/' component={Landing} />
      <Route path='/home' component={NavBar} />
      <Route exact path='/home' component={Home} />

      <Route exact path='/home/country/:id' component={Details} />
      <Route exact path='/home/new_tour' component={Activity} />
      <Route path='/home' component={Footer} />
    </div>
  )
}

export default App
