import { getEntireRoomList } from '@/services/modules/entire'
import * as actionTypes from './constants'

export function changeCurrentPageAction(currentPage) {
  return {
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
  }
}

export const changeRoomListAction = ( roomList ) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export function changeTotalAmountAction( totalAmount ) {
  return {
    type: actionTypes.CHANGE_TOTAL_AMOUNT,
    totalAmount
  }
}

export const changeIsLoadingAction = ( isLoading ) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})


export const axiosRoomDataAction = (page = 0) => {
  return async (dispatch, getState) => {
    // const currentPage = getState().entire.currentPage;
    dispatch(changeCurrentPageAction(page))
    
    dispatch(changeIsLoadingAction(true))
    const res = await getEntireRoomList(page * 20)
    dispatch(changeIsLoadingAction(false))

    dispatch(changeRoomListAction(res.list))
    dispatch(changeTotalAmountAction(res.totalCount))
  }
}