// import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollViewWrapper } from './styled'
import IconArrowLeft from '@/assets/svg/icon_arrow_left'
import IconArrowRight from '@/assets/svg/icon_arrow_right'

const ScrollView = memo((props) => {
  const [ showRightBtn, setShowRightBtn ] = useState(false)
  const [ showLeftBtn, setShowLeftBtn ] = useState(false)
  const [ currentIndex, setCurrentIndex ] = useState(0)

  const slotContentRef = useRef()
  const differentWidthRef = useRef()

  useEffect(() => {
    const slotScrollWidth = slotContentRef.current.scrollWidth;
    const slotClientWidth = slotContentRef.current.clientWidth;
    const differentWidth = slotScrollWidth -  slotClientWidth 
    setShowRightBtn(differentWidth > 0)
    differentWidthRef.current = differentWidth
  }, [props.children])

  function arrowHandle(rightFlag) {
    const newIndex = rightFlag ? currentIndex + 1 : currentIndex - 1;
    const newOffset = slotContentRef.current.children[newIndex].offsetLeft
    slotContentRef.current.style.transform = `translate(-${newOffset}px)` 
    setCurrentIndex(newIndex)
    setShowRightBtn( newOffset < differentWidthRef.current)
    setShowLeftBtn( newOffset > 0)
  }

  return (
    <ScrollViewWrapper>
      { showLeftBtn && 
        <div className="scrollBtn left" onClick={e => arrowHandle(false)}>
          <IconArrowLeft/>
        </div>
      }

      { showRightBtn &&
        <div className="scrollBtn right" onClick={e => arrowHandle(true)}>
          <IconArrowRight/>
        </div>
      }

      <div className="scroll">
        <div className="slotContent" ref={slotContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView