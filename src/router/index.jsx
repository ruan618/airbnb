import { lazy } from 'react'


// import Home from 'views/home'
// import Entire from 'views/entire'
// import Detail from 'views/detail'
import { Navigate } from 'react-router-dom'

const Home = lazy(() => import('views/home'));
const Entire = lazy(() => import('views/entire'));
const Detail = lazy(() => import('views/detail'));
// const Demo = lazy(() => import('views/demo'));

const routes = [
  {
    path: '/',
    element: <Navigate to='/home'/>
  },
  {
    path: '/home',
    element: <Home></Home>
  },
  {
    path: '/entire',
    element: <Entire></Entire>
  },
  // {
  //   path: '/demo',
  //   element: <Demo></Demo>
  // },
  {
    path: '/detail',
    element: <Detail></Detail>
  },
]

export default routes