import React, { memo, useEffect, useRef, useState } from 'react'
import { HeaderWrapper, SearchContentWrapper } from './styles'
import HeaderCenter from './c-cpns/headerCenter'
import HeaderLeft from './c-cpns/headerLeft'
import HeaderRight from './c-cpns/headerRight'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'

const appheader = memo(() => {
  const [ ifDetail, setIfDetail ] = useState(true)
  const { isFixed, topTransparent } = useSelector((state) => state.main.headerConfig, shallowEqual)

  const { scrollY } = useScrollPosition()
  const recordY = useRef(0)

  useEffect(() => {
    if ( !ifDetail ) recordY.current = scrollY;
    if ( ifDetail && Math.abs(scrollY - recordY.current) > 30 ) {
    setIfDetail(false)
  }
  }, [ifDetail, scrollY])

  const isTransparent = topTransparent && scrollY === 0;

  return (
    <ThemeProvider theme={{isTransparent}}>
      <HeaderWrapper $alpha={isTransparent} className={classNames({ fixed: isFixed})}>
        <div className="content">
          <div className="top_content">
            <HeaderLeft></HeaderLeft>
            <HeaderCenter ifDetail={ isTransparent || ifDetail} searchClick={() => setIfDetail(true)}></HeaderCenter>
            <HeaderRight></HeaderRight>
          </div>

          <SearchContentWrapper $ifDetail={ isTransparent || ifDetail}/>
        </div>

        { ifDetail && <div className="cover" onClick={() => setIfDetail(false)}></div> }
      </HeaderWrapper>

    </ThemeProvider>
  )
})

export default appheader