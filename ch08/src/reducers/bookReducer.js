
//8.2
//초기 상태 만들기 
// const initialState = {
//     books: [{ name: 'East of Eden', author: 'John Steinbeck'}]
//   }
  
// // state 인수의 기본 값을 initialState로 지정함
// const bookReducer = (state = initialState) => {
//     // state를 반환함
//     return state
// }
// export default bookReducer



//8.8 

// actions 파일에서 ADD_BOOK 상수를 가져옴
// import { ADD_BOOK, REMOVE_BOOK } from '../actions'
// import uuidv4 from 'uuidv4'

// const initialState = {
//   books: [{ name: 'East of Eden', author: 'John Steinbeck', id: uuidv4()  }]
// }

// // bookReducer의 두 번째 인수로 액션을 추가함
// const bookReducer = (state = initialState, action) => {
  
//   // 액션의 type에 따라 분기하는 switch 문 추가
//   switch(action.type) {
//     case ADD_BOOK:
//       // 액션의 type이 ADD_BOOK이면, 새 books 배열을 반환함
//       return {
//         books: [
//           ...state.books,
//           action.book
//         ]
//       }
//     // 해당되지 않으면 기존의 state를 그대로 반환
//     default:
//       return state
//   }
// }

// export default bookReducer


//8.14
import uuidV4 from 'uuid/v4'
import { ADD_BOOK, REMOVE_BOOK } from '../actions'

// initialState에 id 속성을 추가하고 id 속성에 새로운 고유 식별자를 지정함
const initialState = {
  books: [{ name: 'East of Eden', author: 'John Steinbeck', id: uuidV4() }]
}

// bookReducer의 두 번째 인수로 액션을 추가함
const bookReducer = (state = initialState, action) => {

  // 액션의 type에 따라 분기하는 switch 문 추가
  switch(action.type) {
    case ADD_BOOK:
      // 액션의 type이 ADD_BOOK이면, 새 books 배열을 반환함
      return {
        books: [
          ...state.books,
          action.book
        ]
      }
    // type이 REMOVE_BOOK인 액션을 처리하기위한  switch 구문 추가
    case REMOVE_BOOK:
      
      // 삭제할 도서의 index 찾기
      const index = state.books.findIndex(
        book => book.id === action.book.id)
      
      //기존 books 배열에서 삭제할 도서의 index를 제외하고
      // 나머지 항목을 포함한 새 배열을 반환함
      return {
        books: [
          ...state.books.slice(0, index),
          ...state.books.slice(index + 1)
        ]
      }
    // 해당되지 않으면 기존의 state를 그대로 반환
    default:
      return state
  }
}

export default bookReducer