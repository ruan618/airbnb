import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionRoomsMoreWrapper } from './styled'
import IconMoreArrow from '@/assets/svg/icon_more_arrow'
import { useNavigate } from 'react-router-dom'

const SectionRoomsMore = memo((props) => {
  const { activeName } = props;
  const navigate = useNavigate()

  let name;
  if (activeName) {
    name = '显示更多' + activeName + '房源'
  } else  { name = '显示全部' } 

  function goEntireHandle() {
    navigate('/entire')
  }

  return (
    <SectionRoomsMoreWrapper $color={ activeName ? '#00848A' : '#000'}>
      <div className='more' onClick={goEntireHandle}>
        <div className='text'>{name}</div>
        <IconMoreArrow/>
      </div>
    </SectionRoomsMoreWrapper>
  )
})

SectionRoomsMore.propTypes = {
  activeName: PropTypes.string
}

export default SectionRoomsMore