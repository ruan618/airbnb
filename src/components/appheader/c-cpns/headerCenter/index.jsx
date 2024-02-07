import React, { memo, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group';


import { CenterWrapper } from './styled'
import SearchTab from './c-cpns/search-tab'
import SearchSection from './c-cpns/search-section'
import searchDetailInfo from '@/assets/data/search_titles.json'
import IconSearch from '@/assets/svg/icon_search'

const headerCenter = memo((props) => {
  const { ifDetail, searchClick } = props;
  const [ tabIndex, setTabIndex ] = useState(0)

  const barRef = useRef();
  const detailRef = useRef();


  function searchBarHandle() {
    if (searchClick) searchClick()
  }
  

  return (
    
    <CenterWrapper>

      <CSSTransition in={!ifDetail} nodeRef={barRef} classNames='bar' timeout={250} unmountOnExit={true}>
        <div ref={barRef} className='search-bar'  onClick={searchBarHandle}>
          <div className='text-input'>
            搜索房源和体验
          </div>
          <div className='search-icon'>
            <IconSearch></IconSearch>
          </div>
          
        </div>
      </CSSTransition>

      <CSSTransition in={ifDetail} nodeRef={detailRef} classNames='detail' timeout={250} unmountOnExit={true}>
        <div ref={detailRef} className="search_detail">
          <SearchTab titles={searchDetailInfo.map(item => item.title)} tabClick={setTabIndex}/>
          <div className="infos">
            <SearchSection info={searchDetailInfo[tabIndex].searchInfos}/>
          </div>
        </div>
      </CSSTransition>

      

      
    </CenterWrapper>
  )
})

export default headerCenter