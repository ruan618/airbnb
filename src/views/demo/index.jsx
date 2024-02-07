// import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { DemoWrapper } from './styled'
import Indicator from '@/base-ui/indicator'

const Demo = memo((props) => {
  const demoList = ['ac', 'vc', 'sd', 'qw', 'ew', 'ds']

  const [ currentIndex, setCurrentIndex ] = useState(0);


  function moveHandle(isRight) {
    let newIndex = isRight ? currentIndex + 1 : currentIndex - 1;
    if ( newIndex > demoList.length - 1 ) newIndex = 0;
    if ( newIndex < 0 ) newIndex = demoList.length - 1;
    setCurrentIndex(newIndex)
  } 
  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={e => moveHandle(false)}>&lt;</button>
        <button onClick={e => moveHandle(true)}>&gt;</button>
      </div>
      <div className='indi_list'>
        <Indicator currentIndex={currentIndex}>
          {demoList.map(item => (<button key={item}>{item}</button> ))}
        </Indicator>
      </div>
    </DemoWrapper>
  )
})

Demo.propTypes = {}

export default Demo