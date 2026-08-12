import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './layout.jsx'
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contacts from './components/contacts/Contacts.jsx'
import Github from './components/github/Github.jsx'
import User from './components/user/User.jsx'

const  router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='about/' element={<About />} />
    <Route path='contacts/' element={<Contacts />} />
    <Route path='github/' element={<Github />} />
    <Route path='user/' element={<User />}>
    <Route path=':userid' element={<User />} />  //userid is the parameter here which is sandwiched under user
    </Route>
    </Route>
  )
) 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
