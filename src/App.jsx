import React from 'react'
import Header from './Component/Header'
import Body from './Component/Body'
import About from './Component/About'
import ContactUs from './Component/ContactUs'
import { Outlet } from 'react-router-dom'
import {Provider} from 'react-redux'
import appStore from './utils/appStore'
const App = () => {
  return (
    <>
    <Provider store={appStore}>
    <Header></Header>
      <Outlet />
    </Provider>
    </>
  )
}



export default App