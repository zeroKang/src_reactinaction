// // 리듀서에서 재사용할 수 있도록 ADD_BOOK 상수를 만들서 export
// export const ADD_BOOK = 'ADD_BOOK'

// // addBook이라는 함수를 만들고 
// // type정보와 하나의 인수로 전달된 도서 객체를 반환 
// export function addBook (book) {
//   return {
//     type: ADD_BOOK,
//     book
//   }
// }

//8.13
export const ADD_BOOK = 'ADD_BOOK'

// 재사용 가능한 상수인 REMOVE_BOOK을 만들어서 리듀서에서도 사용함
export const REMOVE_BOOK = 'REMOVE_BOOK'
// 'uuid/v4'에서 uuid 라이브러리 가져오기
import uuidV4 from 'uuid/v4'

export function addBook (book) {
  return {
    type: ADD_BOOK,
    book: {
      ...book,
      id: uuidV4() // book에 새 키를 추가함.
         // id에 uuidV4 함수를 이용해 새로 생성된 고유 식별자를 지정
    }
  }
}

// removeBook 함수를 추가함. 
// 이 함수는 type과 인수로 전달된 book을 포함한 객체를 반환함
export function removeBook (book) {
  return {
    type: REMOVE_BOOK,
    book
  }
}
