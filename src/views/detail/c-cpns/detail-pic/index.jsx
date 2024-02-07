import React, { memo, useState } from 'react'
import { DetailPicWrapper } from './styled'
import { shallowEqual, useSelector } from 'react-redux'
import PicBrowser from '@/base-ui/picture-browser'

const DetailPic = memo(() => {
  const [ showPicBrowser, setShowPicBrowser] = useState(false)
  const [ goBrowserIndex, setGoBrowserIndex ]= useState(0)
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)


  function movePicBrowser(index = 0) {
    setGoBrowserIndex(index)
    setShowPicBrowser(true)
  }

  return (
    <DetailPicWrapper>
      <div className="pic_content">
        { showPicBrowser && <PicBrowser activeIndex={goBrowserIndex} picture_urls={detailInfo.picture_urls} closeClick={() => setShowPicBrowser(false)}></PicBrowser>}

        <div className='browserBtn'  onClick={() => movePicBrowser() }>显示照片</div>

        <div className="left">
          <div className="item" onClick={() =>  movePicBrowser(0) }>
            <img src={detailInfo.picture_urls && detailInfo.picture_urls[0]} alt="pic" />
            <div className="cover"></div>
          </div>
          
        </div>

        <div className="right">
          {
            detailInfo.picture_urls.slice(1, 5).map((item, index) => {
              return (
                <div className="item" key={item} onClick={() =>  movePicBrowser(index + 1) }>
                  <img src={item} alt="pic" />
                  <div className="cover"></div>
                </div>
              )
            })
          }
          
        </div>
      </div>
    </DetailPicWrapper>
  )
})

export default DetailPic