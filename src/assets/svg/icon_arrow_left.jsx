import React, { memo } from 'react'

const IconArrowLeft = memo((props) => {
  const {height_width = 12} = props
  return (
    <svg viewBox="0 0 18 18" role="img" aria-hidden="false" aria-label="previous" focusable="false" style={{height: `${height_width}px`, width: `${height_width}px`, display: 'block', fill: 'currentcolor',}}><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd"></path></svg>
  )
})

export default IconArrowLeft