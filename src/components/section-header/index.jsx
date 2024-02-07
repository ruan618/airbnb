import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionHeaderWrapper } from './styled'

const SectionHeader = memo((props) => {
  const { title, subtitle } = props

  return (
    <SectionHeaderWrapper>
      <div className="title">{title}</div>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </SectionHeaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default SectionHeader