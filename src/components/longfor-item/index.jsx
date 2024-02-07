import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongForItemWrapper } from './styled'

const LongForItem = memo((props) => {
  const { item } = props;
  return (
    <LongForItemWrapper>
      { item && 
        <div className="inner">

          <div className="pic">
            <img src={item.picture_url} alt="img" />
          </div>

          <div className="cover"></div>

          <div className="text">
            <div className="dest">{item.city}</div>
            <div className="price">均价 {item.price}</div>
          </div>

        </div>
      }
    </LongForItemWrapper>
  )
})

LongForItem.propTypes = {
  item: PropTypes.object
}

export default LongForItem