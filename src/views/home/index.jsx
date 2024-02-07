import React, { memo, useEffect} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'


import HomeBanner from './c-cpns/home-banner'
import { axiosHomeData } from '@/store/modules/home'
import { HomeWrapper } from './styled'
import HomeSection from './c-cpns/home-section'
// import SectionHeader from '@/components/section-header'
// import RoomList from '@/components/section-rooms'
// import SectionTab from '@/components/section-tab'
import HomePopularSection from './c-cpns/home-popular-section'
import { isValidObj } from '@/utils'
import LongForSection from './c-cpns/home-longfor'
import { changeHeaderConfig } from '@/store/modules/main'


const home = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(axiosHomeData())
    dispatch(changeHeaderConfig({ isFixed: true, topTransparent: true}))
  }, [dispatch])

  const [goodPrice, highScore, popularDest, recommendDest, longfor] = useSelector((state) => [
    state.home.goodPrice, 
    state.home.highScore, 
    state.home.popularDest, 
    state.home.recommendDest, 
    state.home.longfor
  ], shallowEqual)
    
  return (
    <div>
      <HomeBanner></HomeBanner>
      <HomeWrapper>
        { isValidObj(longfor) && <LongForSection sectionData={longfor}/>}
        { isValidObj(popularDest) && <HomePopularSection sectionData={popularDest}/>}
        { isValidObj(recommendDest) && <HomePopularSection sectionData={recommendDest}/>}
        { isValidObj(goodPrice) && <HomeSection sectionData={goodPrice}/>}
        { isValidObj(highScore) && <HomeSection sectionData={highScore}/>}
        

      </HomeWrapper>
      </div>
  )
})

export default home