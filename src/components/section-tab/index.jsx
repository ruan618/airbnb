import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SectionTabWrapper } from './styled'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'

const SectionTab = memo((props) => {
  const { destList = [], itemClickHandle } = props
  const [ activeIndex, setActiveIndex] = useState(0)
  function tabClickHandle(index, item) {
    setActiveIndex(index);
    itemClickHandle(index, item);
  }
  return (
    <SectionTabWrapper>
      <ScrollView>
        {
          destList.map((item, index) => {
            return (
            <div 
              key={index} 
              className={classNames('item', { 'active': index === activeIndex})}
              onClick={() => tabClickHandle(index, item)}>
              {item}
            </div>)
          })
        }
      </ScrollView>
    </SectionTabWrapper>
  )
})

SectionTab.propTypes = {
  destList: PropTypes.array
}

export default SectionTab