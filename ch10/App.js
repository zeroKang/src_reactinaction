/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Fragment} from 'react';
// import {
//   Platform,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';
//
//
// //10.4
// // const PlatformExample = () => (
// //     <Text
// //         style={{ marginTop: 100, color: Platform.OS === 'ios' ? 'blue' : 'green'
// //         }}
// //     >
// //       Hello { Platform.OS }
// //     </Text>
// // )
//
// const App = () => {
//   return (
//     <Fragment>
//       <PlatformExample/>
//     </Fragment>
//   );
// };
//
//
// export default App;


//10.5

// import React, {Fragment} from 'react';
// import {
//   Platform,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';


// const ComponentIOS = () => (
//     <Text>Hello from IOS</Text>
// )

// const ComponentAndroid = () => (
//     <Text>Hello from Android</Text>
// )

// const Component = Platform.select({
//   ios: () => ComponentIOS,
//   android: () => ComponentAndroid,
// })();

// const App = () => (
//     <View style={{ marginTop: 100 }}>
//       <Text>Hello from my App</Text>
//       <Component />
//     </View>
// )

// export default App;

10.7
// import React, {Component} from 'react';

// //'react-native'에서 DatePickerIOS 가져오기
// import {
//   Platform,
//   View,
//   Text,
//   DatePickerIOS
// } from 'react-native';

// class App extends Component {

//   // date 값을 생성하고 state에 저장하기
//   constructor(){
//     super()
//     this.state =  {date: new Date()}
//     this.onDateChange = this.onDateChange.bind(this)
//   }

//   // 새로운 date 값으로 state를 업데이트하는 onDateChange 메서드 만들기
//   onDateChange(date) {
//     this.setState({date: date})
//   }

//   render() {
//     return (
//         <View style={{ marginTop: 50 }}>
//           {/* DatePickerIOS 컴포넌트를 반환하고 date와 onDateChange를 props로 전달함 */}
//           <DatePickerIOS
//               date={this.state.date}
//               onDateChange={this.onDateChange}
//           />
//           {/*	date 값(date value)을 텍스트로 화면에 표시함 */}
//           <Text style={{ marginTop: 40, textAlign: 'center' }}>
//             { this.state.date.toLocaleDateString() } { this.state.date.
//           toLocaleTimeString() }
//           </Text>
//         </View>
//     )
//   }
// }

// export default App;


//10.9
// import React, { Component } from 'react'

// // 'react-native'에서 PickerIOS 가져오기
// import { Text, View, PickerIOS } from 'react-native'

// // PickerItem 값을 추가할 people 배열
// const people = [
//   {
//     name: 'Nader Dabit',
//     age: 36
//   },
//   {
//     name: 'Christina Jones',
//     age: 39
//   },
//   {
//     name: 'Amanda Nelson',
//     age: 22
//   }
// ];

// const PickerItem = PickerIOS.Item

// class App extends Component {

//   //선택된 picker 값을 state에 초기 값으로 지정
//   constructor() {
//     super()
//     this.state = {
//       value: 'Christina Jones'
//     }
//     this.onValueChange = this.onValueChange.bind(this)
//   }

//   // onValueChange 메서드를 만들고 PickerIOS의 새로 변경된 값으로 state의 값을 업데이트함
//   onValueChange(value) {
//     this.setState({ value });
//   };

//   render() {
//     return (
//         <View style={{ marginTop: 50 }}>
//           {/*	PickerIOS를 렌더링하고 onValueChange와 selectedValue를 props로 전달함 */}
//           <PickerIOS
//               onValueChange={this.onValueChange}
//               selectedValue={this.state.value}
//           >
//             {/* people 배열(people array)의 각 사람에 해당하는 PickerIOS.Item를 렌더링함 */}
//             {
//               people.map((p, i) => {
//                 return (
//                     <PickerItem
//                         key={i}
//                         value={p.name}
//                         label={p.name}
//                     />
//                 )
//               })
//             }
//           </PickerIOS
//           >
//           {/* this.state.value의 값을 UI에 렌더링함 */}
//           <Text style={{ marginTop: 40, textAlign: 'center' }}>
//             {this.state.value}
//           </Text>
//         </View>)
//   }
// }

// export default App


//10.10

// import React, { Component } from 'react'
// // 'react-native'에서 ProgressVIewIOS 가져오기
// import { Text, View, ProgressViewIOS } from 'react-native'

// class App extends Component {

//   constructor() {
//     super()

//     // progress 상태 초기 값을 0으로 지정
//     this.state = {
//       progress: 0,
//     }
//   }

//   // setInterval 메서드를 저장하고, 매 1/100초마다 progress 상태를 0.01만큼 증가시킴. 
//   // this.state.progress가 1보다 크거나 같으면, clearInterval를 호출해서 interval을 취소
//   componentDidMount() {
//     this.interval = setInterval(() => {
//       if (this.state.progress >= 1) {
//         return clearInterval(this.interval)
//       }
//       this.setState({
//         progress: this.state.progress + .01
//       })
//     }, 10)
//   }
//   render() {
//     return (
//         <View style={{ marginTop: 50 }}>
//           {/* ProgressViewIOS를 렌더링하고 progress 속성으로 this.state.progress를 전달함 */}
//           <ProgressViewIOS
//               progress={this.state.progress}
//           />
//           {/*	this.state.progress의 값을 반올림이나 반내림하고(round) UI에 렌더링함 */}
//           <Text style={{ marginTop: 10, textAlign: 'center' }}>
//             {Math.floor(this.state.progress * 100)}% complete
//           </Text>
//         </View>)
//   }
// }

// export default App


//10.11
import React, { Component } from 'react'
// 'react-native'에서 SegmentedControlIOS 가져오기
import { Text, View} from 'react-native'



import SegmentedControlIOS from "@react-native-community/segmented-control";

// SegmentedControlIOS에서 사용할 값의 배열(array of values) 만들기
const values = ['One', 'Two', 'Three']

class App extends Component {

  constructor() {
    super()
    // selectedIndex state의 값을 0으로 지정함
    this.state = {
      selectedIndex: 0,
    }
  }

  render() {
    const { selectedIndex } = this.state
    
    // selectedItem 변수를 만들고 values 배열의 selectedIndex의 값을 지정함
    let selectedItem = values[selectedIndex]
    
    // SegmentedControlIOS 컴포넌트를 렌더링함. values 배열을 values 속성값으로 전달함. 
    // this.state.selectedIndex를 selectedIndex 속성값으로 전달함. 
    //selectedIndex state의 값을 선택된 항목의 인덱스로 갱신하는 onChange 메서드를 전달함.
    return (
        <View style={{ marginTop: 40, padding: 20 }}>
          <SegmentedControlIOS
              values={values}
              selectedIndex={this.state.selectedIndex}
              onChange={(event) => {
                this.setState({selectedIndex:
                  event.nativeEvent.selectedSegmentIndex});
              }}
          />
          {/* selectedItem의 값을 UI에 렌더링함 */}
          <Text>{selectedItem}</Text>
        </View>)
  }
}

export default App


//10.12
// import React, { Component } from 'react'
// // 'react-native'에서 TabBarIOS 가져오기
// import { Text, View, TabBarIOS } from 'react-native'

// // TabBarIOS.Item 컴포넌트를 저장하는 Item 변수를 만듦
// const Item = TabBarIOS.Item 

    
// class App extends Component {

//   constructor() {
//     super()
//     this.state = {
//       // selectedTab sate의 초기 값을 history로 지정함
//       selectedTab: 'history',
//     }
//     this.renderView = this.renderView.bind(this)
//   }

//   // 재사용 가능한 renderView 메서드를 만듦. 이 메서드는 tab을 인수로 전달받음
//   renderView(tab) {
//     return (
//         <View style={{
//           flex: 1, justifyContent: 'center',
//           alignItems: 'center'
//         }}>
//           <Text>Hello from {tab}</Text>
//         </View>
//     )
//   }

//   render() {
//     return (
//         // TabBarIOS를 UI에 렌더링하고 두 개의 Item 컴포넌트를 자식으로 전달함
//         <TabBarIOS>
//           {/* systemIcon prop을 history로 지정함 */}
//           {/* onPress 메서드를 Item에 연결하고 state의 selectedTab 값을 this.setState 값으로 업데이트함 */}
//           <Item              
//               systemIcon="history"
//               onPress={() => this.setState({selectedTab: 'history'})}
//               selected={this.state.selectedTab === 'history'}
//           >
//             {/* this.renderView를 호출해서 뷰를 렌더링함 */}
//             {this.renderView('History')}
//           </Item>
//           <Item
//               systemIcon='favorites'
//               onPress={() => this.setState({selectedTab: 'favorites'})}
//               selected={this.state.selectedTab === 'favorites'}
//           >
//             {this.renderView('Favorites')}
//           </Item>
//         </TabBarIOS>
//     )
//   }
// }

// export default App
//

//10.13
// import React, { Component } from 'react'

// // 'react-native'에서 ActionSheetIOS 가져오기
// import { Text, View, ActionSheetIOS,
//   TouchableHighlight } from 'react-native'

// // 액션 시트에서 사용할 버튼의 배열 만들기
// const BUTTONS = ['Cancel', 'Button One', 'Button Two', 'Button Three']

// class App extends Component {
//   constructor() {
//     super()
//     // clicked state를 만들고 그 값으로 null을 지정함
//     this.state = {
//       clicked: null
//     }
    
//     this.showActionSheet = this.showActionSheet.bind(this)
//     this.showShareActionSheetWithOptions =
//         this.showShareActionSheetWithOptions.bind(this)
//   }
//   showActionSheet() {
//     ActionSheetIOS.showActionSheetWithOptions({
//           options: BUTTONS,
//           cancelButtonIndex: 0,
//         },
//         (buttonIndex) => {
//           if (buttonIndex > 0) {
//             this.setState({ clicked: BUTTONS[buttonIndex] });
//           }
//         });
//   }
//   showShareActionSheetWithOptions() {
//     ActionSheetIOS.showShareActionSheetWithOptions({
//           url: 'http://www.reactnative.training',
//           message: 'React Native Training',
//         },
//         (error) => console.log('error:', error),
//         (success, method) => {
//           if (success) {
//             console.log('successfully shared!', success)
//           }
//         });
//   };
//   render() {
//     return (
//         <View style={styles.container}>
//           <TouchableHighlight onPress={this.showActionSheet}
//                               style={styles.button}>
//             <Text style={styles.buttonText}>
//               Show ActionSheet
//             </Text>
//           </TouchableHighlight>
//           <TouchableHighlight onPress={this.showShareActionSheetWithOptions}
//                               style={styles.button}>
//             <Text style={styles.buttonText}>
//               Show ActionSheet With Options
//             </Text>
//           </TouchableHighlight>
//           <Text>
//             {this.state.clicked}
//           </Text>
//         </View>
//     )
//   }
// }

// styles = {
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   button: {
//     height: 50,
//     marginBottom: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'blue'
//   },
//   buttonText: {
//     color: 'white'
//   }
// }

// export default App