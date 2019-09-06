//9.1
// import React, { Component } from 'react'
// //'react-native'에서 alert API(alert) 가져오기
// import { TouchableHighlight, View, Text, StyleSheet, Alert }
// from 'react-native'

// let styles = {}

// export default class App extends Component {
//   constructor () {
//     super()
    
//     //state로 showMessage의 초기 값을 false로 지정
//     this.state = {
//       showMessage: false
//     }
    
//     this.showAlert = this.showAlert.bind(this)
//   }
  
//   // showAlert 메서드를 정의함.
//   // 두 개의 버튼과 함께 title 로 ‘Title’, message 로 ‘Message!’
//   showAlert () {
    
//     Alert.alert(
//       'Title',
//       'Message!',
//       [
//         {
//           text: 'Cancel',
//           onPress: () => console.log('Dismiss called...'),
//           style: 'destructive'
//         },
//         {
//           text: 'Show Message',
          
//           //Show Message 버튼을 누르면,
//           // state의 showMessage를 true로 업데이트함
//           onPress: () => this.setState({ showMessage: true })
//         }
//       ]
//     )
//   }
//   render () {
//     const { showMessage } = this.state
//     return (
//       <View style={styles.container}>
//         <TouchableHighlight onPress={this.showAlert} style={styles.button}>
//           <Text>SHOW ALERT</Text>
//         </TouchableHighlight>
        
//         {/* state의 showMessage의 값이 false면 메시지를 숨김*/}
//         {
//           showMessage && <Text>Showing message - success</Text>
//         }
//       </View>
//     )
//   }
// }

// styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     flex: 1
//   },
//   button: {
//     height: 70,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ededed'
//   }
// })

//9.2
// import React, { Component } from 'react'
// // 'react-native'에서 AppState API 가져오기
// import { AppState, View, Text, StyleSheet } from 'react-native'
// let styles = {}

// class App extends Component {  
  
//   componentDidMount () {
//     // AppState.addEventListener를 호출하고 change와 콜백 함수를 인수로 전달함
//     AppState.addEventListener('change', this.handleAppStateChange)
//   }
  
  
//   handleAppStateChange (currentAppState) {
    
//     // currentAppState를 콘솔에 표시함
//     console.log('currentAppState:', currentAppState)
    
//   }
  
//   render () {
//     return (
//       <View style={styles.container}>
//         <Text>Testing App State</Text>
//       </View>
//     )
//   }
// }

// styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     flex: 1
//   }
// })

// export default App

//9.3 , 9.4
// import React, { Component } from 'react'
// import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'

// // @react-native-community/async-storage에서 AsyncStorage 가져오기
// import AsyncStorage from '@react-native-community/async-storage'

// let styles = {}

// // person 객체를 생성하고 사용자 정보를 저장함
// const person = {
//   name: 'James Garfield',
//   age: 50,
//   occupation: 'President of the United States'
// }

// // AsyncStorage에 데이터를 저장하고 삭제할 때 사용할 키 만들기
// const key = 'president'

// class App extends Component {
//   constructor () {
//     super()
    
//     // state에 person 객체 생성함
//     this.state = {
//       person: {}
//     }
//     this.getPerson= this.getPerson.bind(this)
//   }
  
//   // componentDidMount () {
    
//   //   // AsyncStorage.setItem을 호촐하고 key와 person을 인수로 전달함.
//   //   // AsyncStorage에 저장할 값은 문자열이어야 하기 때문에
//   //   // JSON.stringify를 호출해 문자열로 변경
    
//   //   AsyncStorage.setItem(key, JSON.stringify(person))
//   //     .then(() => console.log('item stored...'))
//   //     .catch((err) => console.log('err: ', err))
//   // }
  
//   // getPerson () {
    
//   //   // AsyncStorage.getItem을 호출하고 이전에 만든 key를 전달함.
//   //   // AsyncStorage에서 가져온 데이터를 포함한 콜백 함수를 전달받음
    
//   //   //JSON.parse로 문자열을 JS의 객체로 변환후에 state로 지정
//   //   AsyncStorage.getItem(key)
//   //     .then((res) => this.setState({ person: JSON.parse(res) }))
//   //     .catch((err) => console.log('err: ', err))
//   // }

//   async componentDidMount () {
//     try {
//       await AsyncStorage.setItem(key, JSON.stringify(person))
//       console.log('item stored')
//     } catch (err) {
//       console.log('err:', err)
//     }
//   }

//   async getPerson () {
//     try {
//       var data = await AsyncStorage.getItem(key)
//       var person = await data
//       this.setState({ person: JSON.parse(person) })
//     } catch (err) {
//       console.log('err: ', err)
//     }
//   }
  
//   render () {
//     const { person } = this.state
//     return (
//       <View style={styles.container}>
//         <Text style={{textAlign: 'center'}}>Testing AsyncStorage</Text>
//         <TouchableHighlight onPress={this.getPerson} style={styles.button}>
//           <Text>Get President</Text>
//         </TouchableHighlight>
//         <Text>{person.name}</Text>
//         <Text>{person.age}</Text>
//         <Text>{person.occupation}</Text>
//       </View>
//     )
//   }
// }

// styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     flex: 1,
//     margin: 20
//   },
//   button: {
//     justifyContent: 'center',
//     marginTop: 20,
//     marginBottom: 20,
//     alignItems: 'center',
//     height: 55,
//     backgroundColor: '#dddddd'
//   }
// })

// export default App


//9. 5
import React, { Component } from 'react'

// 'react-native'에서 Clipboard 가져오기
import { TextInput, Clipboard, TouchableHighlight,
  getString, View, Text, StyleSheet } from 'react-native'

let styles = {}

export default class App extends Component {
  constructor() {
    super()
    // state에 clipboardData라는 빈 배열을 지정함
    this.state = {
      clipboardData: []
    }
    this.pushClipboardToArray = this.pushClipboardToArray.bind(this)
  }
  componentDidMount () {
    // Clipboard의 값을 “Hello World”로 업데이트함
    Clipboard.setString('Hello World! ');
  }
  
  // updateClipboard 메서드를 추가함.
  // 이 메서드는 기존의 Clipboard의 값을 업데이트함
  updateClipboard (string) {
    Clipboard.setString(string);
  }
  
  // 예제 9.4에서 살펴 본 async await 구문을 이용해
  // async pushClipboardToArray 메서드를 추가함.
  async pushClipboardToArray() {
    const { clipboardData } = this.state
    // Clipboard의 값을 content라는 변수에 저장함
    var content = await Clipboard.getString();
    
    // clipboardData 배열에 content를 추가함
    clipboardData.push(content)
    
    // clipboardData 배열의 state를 재지정함
    this.setState({clipboardData})
  }
  
  render () {
    const { clipboardData } = this.state
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>Testing Clipboard</Text>
        
        {/*- updateClipboard 메서드를 TextInput에 연결함 */}
        {/* -  TouchableHighlight를 누르면 pushClipboardToArray 메서드가 실행되게 함 */}
  
        <TextInput style={styles.input} onChangeText={(text) => this.updateClipboard(text)} />
        <TouchableHighlight onPress={this.pushClipboardToArray} style={styles.button}>
          <Text>Click to Add to Array</Text>
        </TouchableHighlight>
        
        {/*- clipboardData 배열의 값을 매핑해 화면에 표시함 */}
        {
          clipboardData.map((d, i) => {
            return <Text key={i}>{d}</Text>
          })
        }
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    margin: 20
  },
  input: {
    padding: 10,
    marginTop: 15,
    height: 60,
    backgroundColor: '#dddddd'
  },
  button: {
    backgroundColor: '#dddddd',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 15,
  }
})

