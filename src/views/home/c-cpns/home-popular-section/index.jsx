import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { HomePopularSectionWrapper } from './styled'
import SectionHeader from '@/components/section-header'
import SectionTab from '@/components/section-tab'
import RoomList from '@/components/section-rooms'
import SectionRoomsMore from '@/components/section-rooms-more'

const HomePopularSection = memo((props) => {
  const { sectionData } = props


  const destList = sectionData.dest_address?.map(item => item.name)
  const [ activeTabName, setActiveTabName] = useState( Object.keys(sectionData.dest_list)[0] )
  
  const itemClickHandle = useCallback((index, name) => {
    setActiveTabName(name)
  }, [])

  return (
    <HomePopularSectionWrapper>
      <SectionHeader title={sectionData.title} subtitle={sectionData.subtitle}/>
      <SectionTab destList={ destList } itemClickHandle={itemClickHandle}/>
      <RoomList roomList={ sectionData.dest_list?.[activeTabName] } roomItemWidth='33.33333%'/>
      <SectionRoomsMore activeName={activeTabName}/>
    </HomePopularSectionWrapper>
  )
})

HomePopularSection.propTypes = {
  sectionData: PropTypes.object
}

export default HomePopularSection