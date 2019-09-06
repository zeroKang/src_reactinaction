import React, {createContext, Component} from 'react'

import {StyleSheet, View, Text} from 'react-native'

const ThemeContext = createContext()

class Parent extends Component {
  
  // themeValue라는 state 변수를 만들고 ‘light’ 값을 지정함
  state = { themeValue: 'light' }
  
  // 현재의 themeValue의 값을 확인하고 ‘light’와 ‘dark’를 토글함
  toggleThemeValue = () => {
    const value = this.state.themeValue === 'dark' ? 'light' : 'dark'
    this.setState({ themeValue: value })
  }
  render() {
  
    //자식 컴포넌트에 context 전달(provides).
    // Provider로 감싼 모든 데이터나 함수는 Consumer로 감싼 자식 컴포넌트에서 참조할 수 있음
    
    return (
      <ThemeContext.Provider
        value={{
          themeValue: this.state.themeValue,
          toggleThemeValue: this.toggleThemeValue
        }}
      >
        <View style={styles.container}>
          <Text>Hello World</Text>
        </View>
        <Child1 />
      </ThemeContext.Provider>
    );
  }
}


// 컴포넌트를 반환하는 stateless 함수.
// 부모 컨테이너와 Child2 컴포넌트 사이에 props가 전달되지 않는 것을 보여줌
const Child1 = () => <Child2 />

// ThemeContext.Consumer가 감싸고 있는 컴포넌트를 반환하는 stateless 함수
const Child2 = () => (
  <ThemeContext.Consumer>
    {(val) => (
      <View style={[styles.container,
        val.themeValue === 'dark' &&
        { backgroundColor: 'black' }]}>
        <Text style={styles.text}>Hello from Component2</Text>
        <Text style={styles.text}
              onPress={val.toggleThemeValue}>
          Toggle Theme Value
        </Text>
      </View>
    )}
  </ThemeContext.Consumer>
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 22,
    color: '#666'
  }
})

export default Parent