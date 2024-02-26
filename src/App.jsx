import React, { Suspense, memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from 'router'
import AppHeader from 'components/appheader'
import AppFooter from 'components/appfooter'
import { useScrollTop } from './hooks'

const App = memo(() => {
  useScrollTop()
  return (
    <div className='app'>
      <AppHeader/>
        <Suspense fallback={'loading'}>
          <div className="main">
            {useRoutes(routes)}
          </div>
        </Suspense>
      <AppFooter/>
    </div>
  )
})

export default App