import * as actionTypes from './constants'

const initialState = {
  currentPage: 0,
  roomList: [],
  totalAmount: 0,
  isLoading: false
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case actionTypes.CHANGE_ROOM_LIST:
      return { ...state, roomList: action.roomList }
    case actionTypes.CHANGE_TOTAL_AMOUNT:
      return { ...state, totalAmount: action.totalAmount }
    case actionTypes.CHANGE_IS_LOADING:
      return { ...state, isLoading: action.isLoading }
    default:
      return state;
  }
}

export default reducer;