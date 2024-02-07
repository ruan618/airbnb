import React, { memo } from 'react'
import { SearchSectionWrapper } from './styled'

const SearchSection = memo((props) => {
  const { info } = props;
  return (
    <SearchSectionWrapper>
        {
          info.map((item, index) => {
            return (
              <div className="item" key={index}>
                <div className="info">
                  <div className='title'>{item.title}</div>
                  <div className='desc'>{item.desc}</div>
                </div>
                { index !== (info.length - 1) && <div className='divider'></div> }
              </div>
            )
          })
        }
    </SearchSectionWrapper>
  )
})

export default SearchSection