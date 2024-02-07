import React, { memo } from 'react'
import { LeftWrapper } from './styled'
import IconLogo from '@/assets/svg/icon_logo'
import { useNavigate } from 'react-router-dom'

const headerLeft = memo(() => {
  const navigate = useNavigate();

  function headerLogoHandle() {
    navigate('/home')
  }

  return (
    <LeftWrapper>
      <div className='logo' onClick={headerLogoHandle}>
        <IconLogo/>
      </div>
    </LeftWrapper>
  )
})

export default headerLeft