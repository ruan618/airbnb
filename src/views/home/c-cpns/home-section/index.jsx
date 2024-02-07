import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionWrapper } from './styled'
import SectionHeader from '@/components/section-header'
import RoomList from '@/components/section-rooms'
import SectionRoomsMore from '@/components/section-rooms-more'

const HomeSection = memo((props) => {
  const { sectionData } = props
  return (
    <HomeSectionWrapper>
      <SectionHeader title={ sectionData.title }/>
      <RoomList roomList={ sectionData.list } roomItemWidth='25%'/>
      <SectionRoomsMore/>
    </HomeSectionWrapper>
  )
})

HomeSection.propTypes = {
  sectionData: PropTypes.object
}

export default HomeSection