import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import Rating from '@mui/material/Rating';
import { Carousel } from 'antd';


import { RoomWrapper } from './styled'
import IconArrowLeft from '@/assets/svg/icon_arrow_left';
import IconArrowRight from '@/assets/svg/icon_arrow_right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';

const RoomItem = memo((props) => {
  const { roomData, roomItemWidth = '25%', moveDetail } = props;
  const [ currentIndex, setCurrentIndex ] = useState(0)

  const sliderRef = useRef()

  function sliderMoveHandle(e, rightBtnFlag) {
    e.stopPropagation()
    rightBtnFlag ? sliderRef.current.next() : sliderRef.current.prev();

    let newIndex = rightBtnFlag ? currentIndex + 1 : currentIndex - 1;
    const length = roomData.picture_urls.length
    if ( newIndex < 0 ) newIndex = length - 1;
    if ( newIndex > length - 1) newIndex = 0;
    setCurrentIndex(newIndex)
  }

  function moveDetailHandle() {
    if (moveDetail) moveDetail(roomData)
  }

  const singlePic = (
    <div className="img_cover">
      <img src={ roomData.picture_url } alt="room_pic" />
    </div>
  )

  const slider = (
    <div className="slider">
      <div className="control">
        <div className="left_btn" onClick={e => sliderMoveHandle(e, false)}>
          <IconArrowLeft height_width={30}/>
        </div>
        <div className="right_btn" onClick={e => sliderMoveHandle(e, true)}>
          <IconArrowRight height_width={30}/>
        </div>
      </div>

      <div className="ind">
        <Indicator currentIndex={currentIndex}>
          {
            roomData.picture_urls?.map((item, index) => {
              return (
                <div className="dotBox" key={index}>
                  <span className={classNames("dot", {active: index === currentIndex})}/>
                </div>
              )
            })
          }
        </Indicator>
      </div>

      <Carousel ref={sliderRef} dots={false}> 
        {
          roomData.picture_urls?.map((item, index)=> {
            return (
              <div className="img_cover" key={index}>
                <img src={ item }  alt="room_pic" />
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )

  return (
    <RoomWrapper 
      $verifyInfo={ roomData.verify_info.text_color || "#39576a"} 
      $roomItemWidth={ roomItemWidth }
      onClick={moveDetailHandle}
    >
      <div className="inner">

      {roomData.picture_urls ? slider: singlePic}
        <div className='room_detail'>{ roomData.verify_info.messages.join(' · ') }</div>
        <div className='room_title'>{ roomData.name }</div>
        <div className='room_price'>￥{ roomData.price }/一晚</div>
        <div className="bottom">
          <Rating
            defaultValue={ roomData.star_rating ?? 4.5} 
            precision={0.1} 
            sx={{ fontSize:"12px", color:"#06768d"}}
            readOnly
          />
          <span className='reviews_count'>{ roomData.reviews_count }</span>

          <span className='addition'>
            { roomData.bottom_info?.content && ` ·${roomData.bottom_info.content}` }
          </span>
        </div>
      </div>
    </RoomWrapper>
    
  )
})

RoomItem.propTypes = {
  roomData: PropTypes.object
}

export default RoomItem