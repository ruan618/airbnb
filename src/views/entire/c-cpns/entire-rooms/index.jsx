// import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'
import { EntireRoomsWrapper } from './styled'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo((props) => {
  const { roomList, totalAmount, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalAmount: state.entire.totalAmount,
    isLoading: state.entire.isLoading,
  }), shallowEqual)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const moveDetail = useCallback((roomData) => {
    dispatch(changeDetailInfoAction(roomData))
    navigate('/detail')
  }, [navigate, dispatch])


  return (
    <EntireRoomsWrapper>
      {
        !!totalAmount ? <div className='text'>{totalAmount}多处住所</div> : <div className='text'>Loading...</div>
      }
      <div className="rooms">
        {
          roomList.map(item => {
            return <RoomItem key={item.id} roomData={item} roomItemWidth = '20%' moveDetail={moveDetail}/>
          })
        }
      </div>
      {isLoading && <div className="cover"></div>}
    </EntireRoomsWrapper>
  )
})

EntireRooms.propTypes = {}

export default EntireRooms