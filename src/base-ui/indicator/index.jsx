import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './styled'

const Indicator = memo((props) => {
  const { currentIndex = 0 } = props
  const contentRef = useRef()

  useEffect(() => {
    const item = contentRef.current.children[currentIndex];
    const itemWidth = item.clientWidth;
    const itemOffset = item.offsetLeft;
    const contentWidth = contentRef.current.clientWidth;
    const contentScrollWidth = contentRef.current.scrollWidth;

    let moveValue = - ( itemOffset + itemWidth * 0.5 - contentWidth * 0.5 )
    const maxValue  = contentScrollWidth - contentWidth;

    if ( moveValue > 0 ) moveValue = 0;
    if ( - moveValue > maxValue )  moveValue = - maxValue;

    contentRef.current.style.transform = `translate(${moveValue}px)`


  }, [currentIndex])
  
  return (
    <IndicatorWrapper>
      <div className="ind_content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  currentIndex: PropTypes.number
}

export default Indicator