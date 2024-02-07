import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './styled'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { axiosRoomDataAction } from '@/store/modules/entire/creatActions'
import { changeHeaderConfig } from '@/store/modules/main'

const entire = memo(() => {
  const { currentPage } = useSelector((state) => ({
    currentPage: state.entire.currentPage
  }), shallowEqual)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(axiosRoomDataAction())
    dispatch(changeHeaderConfig({ isFixed: true, topTransparent: false }))
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination/>
    </EntireWrapper>
  )
})

export default entire