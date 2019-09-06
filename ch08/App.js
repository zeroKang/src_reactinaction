//8.5
import React from 'react'

// 예제 8.5에서 만들 Books 컴포넌트 가져오기
import Books from './src/Books'

// rootReducer 가져오기
import rootReducer from './src/reducers'

// react-redux에서 Provider 래퍼(Provider wrapper) 가져오기
import { Provider } from 'react-redux'

//redux에서 createStore 가져오기
import { createStore } from 'redux'

//rootReducer를 이용해서 store 객체 생성
const store = createStore(rootReducer)

export default class App extends React.Component {
  render() {
    return (
      // Provider 컴포넌트로 감싼 Books 컴포넌트 반환. Provider의 prop으로 store를 전달함
      <Provider store={store} >
        <Books />
      </Provider>
    )
  }
}
