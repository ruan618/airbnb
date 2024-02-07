import React, { memo, useState } from 'react'
import { SearchTabWrapper } from './styled'
import classNames from 'classnames'

const SearchTab = memo((props) => {
  const { titles, tabClick } = props
  const [ currentIndex, setCurrentIndex ] = useState(0)

  function tabClickHandle(index) {
    if (tabClick) tabClick(index)
    setCurrentIndex(index)
  }
  return (
    <SearchTabWrapper>
      {
        titles.map((item, index) => {
          return (
            <div
              className={classNames('item', { active: currentIndex === index})}
              key={item}
              onClick={() => tabClickHandle(index)}
            >
              <span className="text">
                {item}
              </span>
              <span className="bottom"></span>
            </div>
          )
        })
      }
    </SearchTabWrapper>
  )
})

export default SearchTab