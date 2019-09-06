import React from 'react'

//'react-native'에서 ToastAndroid 가져오기
import { View, Text, ToastAndroid } from 'react-native'

let styles

const Toast = () => {
  
  let { container, button} = styles
  
  // ToastAndroid.show()를 호출하는 basicToast 메서드 만들기
  const basicToast = () => {
    ToastAndroid.show('Hello World!', ToastAndroid.LONG)
  }
  
  // ToastAndroid.showWithGravity()를 호출하는 gravityToast 메서드 만들기
  const gravityToast = () => {
    ToastAndroid.showWithGravity('Toast with Gravity!',
      ToastAndroid.LONG, ToastAndroid.CENTER)
  }
  
  // View에 두 개의 버튼(Open basic toast, Open gravity toast) 만들기
  // 버튼을 누르면, basicToast 팝업(basicToast popup) 표시하기
  // 버튼을 누르면, gravityToast 팝업(gravityToast popup) 표시하기
  return (
    
    <View style={container}>
      <Text style={button} onPress={basicToast}>
        Open basic toast
      </Text>
      <Text style={button} onPress={gravityToast}>
        Open gravity toast
      </Text>
    </View>
  )
}

styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    marginBottom: 10,
    color: 'blue'
  }
}
export default Toast
