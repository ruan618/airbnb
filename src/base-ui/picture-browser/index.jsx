import React, { memo, useEffect, useRef, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { PicBrowserWrapper } from './styled'
import IconClose from '@/assets/svg/icon_close'
import IconArrowLeft from '@/assets/svg/icon_arrow_left';
import IconArrowRight from '@/assets/svg/icon_arrow_right';

const PicBrowser = memo((props) => {
  
  const { closeClick, picture_urls, activeIndex = 0 } = props;

  const [ currentIndex, setCurrentIndex ] = useState(activeIndex)

  const [ isRight, setIsRight ] = useState(false)

  const animRef = useRef()
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [])

  function closeBrowserHandle() {
    closeClick()
  }

  function movePicHandle(isRight) {
    let newIndex = isRight ? currentIndex + 1 : currentIndex -1;
    const length = picture_urls.length
    if ( newIndex < 0 ) newIndex = length -1;
    if ( newIndex > length - 1) newIndex = 0;

    setIsRight(isRight)
    setCurrentIndex(newIndex)
  }
  return (
    <PicBrowserWrapper $isRight={isRight}>
      <div className="browser_cover">

        <div className="cover_header">
          <div className="icon_close" onClick={closeBrowserHandle}>
            <IconClose/>
          </div>
        </div>

        <div className="cover_content">

          <div className="arrow content_left" onClick={() => movePicHandle(false)}><IconArrowLeft height_width={77}/></div>
          <div className="arrow content_right" onClick={() => movePicHandle(true)}><IconArrowRight height_width={77}/></div>

          <div className="pic">
            <SwitchTransition mode='out-in'>
              <CSSTransition nodeRef={animRef} key={picture_urls[currentIndex]} classNames='anim' timeout={240}>
                <img ref={animRef} src={picture_urls[currentIndex]} alt="pic" />
              </CSSTransition>
            </SwitchTransition>
            
          </div>

        </div>

        <div className="cover_footer">
          <div className="index_info">
            {currentIndex + 1} / {picture_urls.length}
          </div>
        </div>
      </div>
    </PicBrowserWrapper>
  )
})

export default PicBrowser