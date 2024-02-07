import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './styled'
import DetailPic from './c-cpns/detail-pic'
import DetailInfo from './c-cpns/detail-info'
import { useDispatch } from 'react-redux'
import { changeHeaderConfig } from '@/store/modules/main'

const detail = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfig({isFixed: false, topTransparent: false}))
  }, [dispatch])
  
  return (
    <DetailWrapper>
      <DetailPic/>
      <DetailInfo/>
    </DetailWrapper>
  )
})

export default detail