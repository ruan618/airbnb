// import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { EntireFilterWrapper } from './styled'
import classNames from 'classnames'

import filterData from '@/assets/data/filter_data.json'

const EntireFilter = memo((props) => {
  const [ activeItems, setActiveItems ]  = useState([])
  const filterItemHandle = (item) => {
    const newList = [...activeItems]
    if (!newList.includes(item)) {
      newList.push(item)
    } else {
      newList.splice(newList.indexOf(item), 1)
    }
    setActiveItems(newList)
  }

  return (
    <EntireFilterWrapper>
      <div className='filter'>
        {filterData.map((item, index) => {
          return (
            <div 
              key={index} 
              className={classNames('item', { active: activeItems.includes(item)})}
              onClick={e=> filterItemHandle(item)}
              >{item}
            </div>)
        })}
      </div>
    </EntireFilterWrapper>
  )
})

EntireFilter.propTypes = {}

export default EntireFilter