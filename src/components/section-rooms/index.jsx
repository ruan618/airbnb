import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomsWrapper } from './styled'
import RoomItem from '../room-item'

const RoomList = memo((props) => {
  const { roomList, roomItemWidth } = props
  return (
    <RoomsWrapper>
      {
        roomList?.slice(0,8).map((item) => {
          return <RoomItem key={ item.id } roomData={item} roomItemWidth={roomItemWidth}/>
        })
      }
    </RoomsWrapper>
  )
})

RoomList.propTypes = {
  roomList: PropTypes.array
}

export default RoomList