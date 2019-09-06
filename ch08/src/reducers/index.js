//8.3
// redux에서 combineReducers 가져오기
import { combineReducers } from 'redux'

// bookReducer 가져오기 
import bookReducer from './bookReducer'

// 모든 리듀서를 포함하는 루트 리듀서(root reducer) 만들기
// 여기서는 하나의 리듀서(bookReducer)만 포함됨
const rootReducer = combineReducers({
  bookReducer
})

export default rootReducer

