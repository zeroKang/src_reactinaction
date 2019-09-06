import React from 'react'
import { StyleSheet, View } from 'react-native'

// 4장에서 배운 스타일시트로 재사용 가능한 스타일 세트를 만듦
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
})

// Container 컴포넌트는 children, 이 하나의 속성을 전달받음. 
// children 속성으로 Container가 감쌀 컴포넌트가 전달됨
const Container = ({ children }) => (

  // View로 children 컴포넌트를 감싸고 container 스타일을 적용함. 
  // 컴포넌트의 배경색을 검정색으로 지정하고 flex 속성에 1을 지정함
  <View style={styles.container}>
    {children}
  </View>
)

export default Container
