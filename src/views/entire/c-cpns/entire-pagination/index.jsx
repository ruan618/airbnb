// import PropTypes from 'prop-types'
import React, { memo } from 'react'
import Pagination from '@mui/material/Pagination';

import { EntirePaginationWrapper } from './styled'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { axiosRoomDataAction } from '@/store/modules/entire/creatActions';

const EntirePagination = memo((props) => {
  const { currentPage, roomList,  totalAmount } = useSelector((state) => ({
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList,
    totalAmount: state.entire.totalAmount
  }), shallowEqual)
  
  const totalPages = Math.ceil( totalAmount / 20 )
  const startPoint = currentPage * 20 + 1;
  const endPoint = ( currentPage + 1 ) * 20;
  
  const dispatch = useDispatch();
  function pageClickHandle(e, page) {
    dispatch(axiosRoomDataAction(page - 1))
  }


  return (
    <EntirePaginationWrapper>
      { 
        !!roomList.length && (
          <div className='pagination'>
            <div className="page_btn">
              <Pagination count={totalPages} onChange={pageClickHandle}/>
            </div>

            <div className="page_desc">
              第{startPoint} - {endPoint}个房源, 共超过{totalAmount}个
            </div>
          </div>
        )
      }
    </EntirePaginationWrapper>
  )
})

EntirePagination.propTypes = {}

export default EntirePagination