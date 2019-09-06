
//8.2
//초기 상태 만들기 
const initialState = {
    books: [{ name: 'East of Eden', author: 'John Steinbeck'}]
  }
  
// state 인수의 기본 값을 initialState로 지정함
const bookReducer = (state = initialState) => {
    // state를 반환함
    return state
}
export default bookReducer
