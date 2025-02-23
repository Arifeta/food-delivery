import React from 'react'
import Navbar from './components/Navbar/Navbar'
import SideBar from './components/sidebar/SideBar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <SideBar/>
      </div>

    </div>
  )
}

export default App
