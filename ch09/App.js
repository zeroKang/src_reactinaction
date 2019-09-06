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
// import React, { Component } from 'react'

// // 'react-native'에서 Clipboard 가져오기
// import { TextInput, Clipboard, TouchableHighlight,
//   getString, View, Text, StyleSheet } from 'react-native'

// let styles = {}

// export default class App extends Component {
//   constructor() {
//     super()
//     // state에 clipboardData라는 빈 배열을 지정함
//     this.state = {
//       clipboardData: []
//     }
//     this.pushClipboardToArray = this.pushClipboardToArray.bind(this)
//   }
//   componentDidMount () {
//     // Clipboard의 값을 “Hello World”로 업데이트함
//     Clipboard.setString('Hello World! ');
//   }
  
//   // updateClipboard 메서드를 추가함.
//   // 이 메서드는 기존의 Clipboard의 값을 업데이트함
//   updateClipboard (string) {
//     Clipboard.setString(string);
//   }
  
//   // 예제 9.4에서 살펴 본 async await 구문을 이용해
//   // async pushClipboardToArray 메서드를 추가함.
//   async pushClipboardToArray() {
//     const { clipboardData } = this.state
//     // Clipboard의 값을 content라는 변수에 저장함
//     var content = await Clipboard.getString();
    
//     // clipboardData 배열에 content를 추가함
//     clipboardData.push(content)
    
//     // clipboardData 배열의 state를 재지정함
//     this.setState({clipboardData})
//   }
  
//   render () {
//     const { clipboardData } = this.state
//     return (
//       <View style={styles.container}>
//         <Text style={{textAlign: 'center'}}>Testing Clipboard</Text>
        
//         {/*- updateClipboard 메서드를 TextInput에 연결함 */}
//         {/* -  TouchableHighlight를 누르면 pushClipboardToArray 메서드가 실행되게 함 */}
  
//         <TextInput style={styles.input} onChangeText={(text) => this.updateClipboard(text)} />
//         <TouchableHighlight onPress={this.pushClipboardToArray} style={styles.button}>
//           <Text>Click to Add to Array</Text>
//         </TouchableHighlight>
        
//         {/*- clipboardData 배열의 값을 매핑해 화면에 표시함 */}
//         {
//           clipboardData.map((d, i) => {
//             return <Text key={i}>{d}</Text>
//           })
//         }
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
//   input: {
//     padding: 10,
//     marginTop: 15,
//     height: 60,
//     backgroundColor: '#dddddd'
//   },
//   button: {
//     backgroundColor: '#dddddd',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 60,
//     marginTop: 15,
//   }
// })

//9.6

// import React, { Component } from 'react'

// // 'react-native'에서 Dimensions API 가져오기
// import { View, Text, Dimensions, StyleSheet } from 'react-native'

// let styles = {}

// // width와 height 비구조화하기
// const { width, height } = Dimensions.get('window')

// // width 객체 속성(object property)을 직접 참조함
// const windowWidth = Dimensions.get('window').width

// // View 컴포넌트에서 Dimensions.get 메서드로 확인한 디바이스 정보를 포함한 변수에 저장된 디바이스 크기 정보를 뷰에 렌더링함
// const App = () => (
//   <View style={styles.container}>
//     <Text>{width}</Text>
//     <Text>{height}</Text>
//     <Text>{windowWidth}</Text>
//   </View>
// )

// styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })

// export default App

//9.7 
// import React, {Component} from 'react'
// import {TouchableHighlight, View, Text, StyleSheet} from 'react-native'
// import Geolocation from '@react-native-community/geolocation'

// let styles = {}

// export default class App extends Component {
//   constructor () {
//     super()

//     // originalCoords, updatedCoords, id로 구성된 초기 state를 만듦.
//     // originalCoords와 updatedCoords는 빈 객체, id에는 빈 문자열을 지정함
//     this.state = {
//       originalCoords: {},
//       updatedCoords: {},
//       id: ''
//     }

//     this.clearWatch = this.clearWatch.bind(this)
//   }
//   componentDidMount() {

//     // geolocation.getCurrentPosition을 호출함
//     Geolocation.getCurrentPosition(
//       (info) => {
//         //originalCoords state에 success.coords를 지정함
//         this.setState({originalCoords: info.coords})
//       },
//       (err) => console.log('err:', err)
//     )

//     // watchPosition을 호출하고 함수의 결과를 id라는 변수에 저장함.
//     // 위치 추적을 중단할 때 id를 이용하게 됨
//     let id = Geolocation.watchPosition(

//       //id state의 값을 재지정함
//       (success) => {
//         this.setState({
//           id,
//           updatedCoords: success.coords
//         })
//       },
//       (err) => console.log('err:', err)
//     )
//   }

//   // 위치 추적을 중단(clear)하는 clearWatch 메서드를 만듦
//   clearWatch () {
//     Geolocation.clearWatch(this.state.id)
//   }

//   //원 위치와 최신 위치의 위도와 경도를 화면에 표시함
//   render () {
//     const { originalCoords, updatedCoords } = this.state
//     return (
//       <View style={styles.container}>
//         <Text>Original Coordinates</Text>
//         <Text>Latitude: {originalCoords.latitude}</Text>
//         <Text>Longitude: {originalCoords.longitude}</Text>
//         <Text>Updated Coordinates</Text>
//         <Text>Latitude: {updatedCoords.latitude}</Text>
//         <Text>Longitude: {updatedCoords.longitude}</Text>
//         <TouchableHighlight
//           onPress={this.clearWatch}
//           style={styles.button}>
//           <Text>Clear Watch</Text>
//         </TouchableHighlight>
//       </View>
//     )
//   }
// }

// styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   button: {
//     height: 60,
//     marginTop: 15,
//     backgroundColor: '#ededed',
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })


//9.8
// import React, { Component }  from 'react'

// // 'react-native'에서 Keyboard API 가져오기
// import { TouchableHighlight, Keyboard, TextInput, View, Text, StyleSheet } from 'react-native'

// let styles = {}


// export  default  class App extends Component {

//   // 모든 키보드 이벤트에 이벤트 리스너를 설정하고 해당 이벤트가 발생한 경우에
//   // logEvent 메서드를 호출해서 콘솔에 이벤트 이름을 표시함
//   componentWillMount () {
//     this.keyboardWillShowListener =
//       Keyboard.addListener('keyboardWillShow', () => this.logEvent('keyboardWillShow'))
//     this.keyboardDidShowListener =
//       Keyboard.addListener('keyboardDidShow', () => this.logEvent('keyboardDidShow'))
//     this.keyboardWillHideListener =
//       Keyboard.addListener('keyboardWillHide', () => this.logEvent('keyboardWillHide'))
//     this.keyboardDidHideListener =
//       Keyboard.addListener('keyboardDidHide', () => this.logEvent('keyboardDidHide'))
//     this.keyboardWillChangeFrameListener =
//       Keyboard.addListener('keyboardWillChangeFrame', () => this.logEvent('keyboardWillChangeFrame'))
//     this.keyboardDidChangeFrameListener =
//       Keyboard.addListener('keyboardDidChangeFrame', () => this.logEvent('keyboardDidChangeFrame'))
//   }
  
//   // 이벤트 이름을 인수로 전달받아 콘솔에 이벤트 이름을 표시함
//   logEvent(event) {
//     console.log('event: ', event)
//   }
//   // 키보드를 화면에서 사라지게 함(
//   dismissKeyboard () {
//     Keyboard.dismiss()
//   }
//   //Keyboard.removeAllListeners를 호출하고 componentWillMount에서 선언한 각 이벤트를 인수로 전달함
//   removeListeners () {
//     Keyboard.removeAllListeners('keyboardWillShow')
//     Keyboard.removeAllListeners('keyboardDidShow')
//     Keyboard.removeAllListeners('keyboardWillHide')
//     Keyboard.removeAllListeners('keyboardDidHide')
//     Keyboard.removeAllListeners('keyboardWillChangeFrame')
//     Keyboard.removeAllListeners('keyboardDidChangeFrame')
//   }
  
  
//   render () {
//     return (
//       <View style={styles.container}>
//         <TextInput style={styles.input} />
//         {/* UI의 버튼에 dismissKeyboard 메서드를 연결 */}
//         <TouchableHighlight
//           onPress={this.dismissKeyboard}
//           style={styles.button}>
//           <Text>Dismiss Keyboard</Text>
//         </TouchableHighlight>
//         {/* UI의 버튼에 removeListener 메서드를 연결 */}
//         <TouchableHighlight
//           onPress={this.removeListeners}
//           style={styles.button}>
//           <Text>Remove Listeners</Text>
//         </TouchableHighlight>
//       </View>
//     )
//   }
// }

// styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 150,
//   },
//   input: {
//     margin: 10,
//     backgroundColor: '#ededed',
//     height: 50,
//     padding: 10
//   },
//   button: {
//     height: 50,
//     backgroundColor: '#dddddd',
//     margin: 10,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })


//9.9 

// import React, { Component }  from 'react'
// import { View, Text, StyleSheet } from 'react-native' 
// // 'react-native-community'에서 NetInfo 가져오기
// import NetInfo from "@react-native-community/netinfo";


// export default class App extends Component {
//   constructor () {
//     super()
    
//     // connectionInfo의 초기 state에 빈 객체 지정함
//     this.state = {
//       connectionInfo: {}
//     }
//   }
  
//   componentDidMount () {

//     //초기 연결 상태를 파악하고 state에 저장
//     NetInfo.fetch().then(connectionInfo => {
//       console.log("Connection type", connectionInfo.type)
//       console.log("Is connected?", connectionInfo.isConnected)
//       this.setState(connectionInfo)
//     })
  
//     //새로운 연결 상태를 파악하고 state에 저장
//     NetInfo.addEventListener(connectionInfo => {
//       console.log("Changed Connection type", connectionInfo.type);
//       console.log("Is connected?", connectionInfo.isConnected);
//       this.setState(connectionInfo)
//     });

//   }

//   // 연결 상태를 화면에 렌더링 
//   render () {
//     return (
//       <View style={styles.container}>
//         <Text>{this.state.type}</Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })


//9.10


import React, { Component }  from 'react'

// 'react-native'에서 Dimensions, PanResponder 등 가져오기
import {
  Dimensions,
  TouchableHighlight,
  PanResponder,
  TextInput, View, Text, StyleSheet } from 'react-native'

// window의 width와 height 정보를 변수에 저장함
const { width, height } = Dimensions.get('window')
let styles = {}

export default class App extends Component {
  
  
  constructor () {
    super()
    this.state = {
      // oPosition 객체를 생성해서 정사각형의 원래 위치의 x 축과 y축의 정보를 state에 저장함
      // 화면의 정 중앙에 위치시키도록 설정
      oPosition: {
        x: (width / 2) - 100,
        y: (height / 2) - 100,
      },
      // position 객체를 생성해서 정사각형의 실제(actual) 위치의 x 축과 y축의 정보를 state에 저장함
      // 화면의 정 중앙에 위치시키도록 설정
      position: {
        x: (width / 2) - 100,
        y: (height / 2) - 100,
      },
    }
    this._handlePanResponderMove = this._handlePanResponderMove.bind(this)
    this._handlePanResponderRelease = this._handlePanResponderRelease.bind(this)

    // PanResponder를 생성하고, onStartShouldSetPanResponder에 true 값을 반환하고,
    // onPanResponderMove와 onPanResponderRelease 메서드를 설정함
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderRelease
    })

  }
  
  // 움직임이 시작된 위치와 시작 위치에서 현재 위치까지의 거리를 계산해
  // 전체 이동 거리의 x와 y를 알아 냄. 알아낸 x와 y 값을 position state에 업데이트함
  _handlePanResponderMove (evt, gestureState) {
    let ydiff = gestureState.y0 - gestureState.moveY
    let xdiff = gestureState.x0 - gestureState.moveX
    this.setState({
      position: {
        y: this.state.oPosition.y - ydiff,
        x: this.state.oPosition.x - xdiff
      }
    })
  }
  
  // oPosition state에 뷰에 업데이트된 위치를 지정함
  _handlePanResponderRelease () {
    this.setState({
      oPosition: this.state.position
    })
  }
  
  render () {
    return (
      <View  style={styles.container}>
        <Text style={styles.positionDisplay}>
          x: {this.state.position.x} y:{this.state.position.y}
        </Text>
        
        {/* x와 y의 값을 뷰에 연결하고 마진을 업데이트해서 정사각형(item)을 드래그할 수 있게 만듦 */}
        
        <View
          {...this._panResponder.panHandlers} // I
          style={[styles.box, { marginLeft: this.state.position.x, marginTop: this.state.position.y } ]} />
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  positionDisplay: {
    textAlign: 'center',
    marginTop: 50,
    zIndex: 1,
    position: 'absolute',
    width
  },
  box: {
    position: 'absolute',
    width: 200,
    height: 200,
    backgroundColor: 'red'
  }
})
