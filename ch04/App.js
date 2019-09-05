// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */


//4.1
// import React, { Component } from 'react'
// import { Text, View } from 'react-native'

// export default class App extends Component {
//   render () {
//     return (
//       /* 리액트 네이티브 컴포넌트에 인라인 스타일 적용 */
//       <View style={{marginLeft: 20, marginTop: 20}}> 
//       {/* 여러 개의 인라인 스타일 적용   */}
//       <Text style={{fontSize: 18,color: 'red'}}>Some Text</Text>
//       </View>
//     )
//   }
// }


//4.2
// import React, {Component} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// export default class App extends Component {
//     render () {
//         return (
//             /* styles내에 정의된 container 스타일 참조 */
//             <View style={styles.container}>
//                 {/* styles에 정의된 message와 warning 참조를 배열로  */}
//                <Text style={[styles.message,styles.warning]}>Some Text</Text> 
//             </View>
//         )
//     }
// }

// /* StyleSheet.create를 이용해서 스타일 정의 */
// const styles = StyleSheet.create({
//     container: {
//         marginLeft: 20,
//         marginTop: 20
//     },
//     message: {
//         fontSize: 18
//     },
//     warning: {
//         color: 'red'
//     }
// });


//4.4
// import React, { Component } from 'react'
// import { Text, View, TouchableHighlight } from 'react-native'
// import {styles, buttons} from './component/styles'

// export default class App extends Component {
//     render () {
        
//         return (
//           // style.js 파일에 정의된 styles.container 스타일 참조
//             <View style={styles.container}>
//                 <TouchableHighlight style = {buttons.primary}>
//                    <Text>Sample Text</Text>
//                 </TouchableHighlight>
//             </View>
//         )
//     }
// }


//4.6
// import React, {Component} from 'react';
// import {Button, StyleSheet, View} from 'react-native';

// //외부로 분리해 둔 getStyleSheet 함수 가져오기
// import getStyleSheet from './styles';

// export default class App extends Component {

//     constructor(props) {
        
//         super(props);
        
//         //기본 테마 색을 밝은 색으로 컴포넌트의 state 초기화하기
//         this.state = {
//             darkTheme: false
//         }
        
//         //예외가 발생하지 않도록 toggleTheme함수를 컴포넌트에 bind
//         this.toggleTheme = this.toggleTheme.bind(this);
//     }

//     toggleTheme() {
//         //호출할 때 마다 스타일을 toogle
//         this.setState({darkTheme: !this.state.darkTheme})
//     };

//     render() {

//         //표시할 테마에 적합한 스타일시트를 가져오기 위해 getStyleSheet 함수 사용
//         const styles = getStyleSheet(this.state.darkTheme);
//          //backgroundColor를 쉽게 사용하기 위해서 StyleSheet의 flatten을 이용해서
//         //StyleSheet 객체를 JavaScript 객체로 변환
//         const backgroundColor =   
//         StyleSheet.flatten(styles.container).backgroundColor;

//         return (
//           //테마의 styles.container 참조
//           <View style={styles.container}>
//               {/* 테마의 styles.box 참조 */}
//               <View style={styles.box}>
//                   {/* 사용중인 테마의 색상을 텍스트로 표시  */}
//                   {/* 버튼이 클릭되면 toogleTheme 호출 */}
//                   <Button title={backgroundColor} onPress={this.toggleTheme}/>
//               </View>
//           </View>
//         );
//     }
// }


//4.7
// import React, {Component} from 'react';
// import {StyleSheet, View} from 'react-native';

// export default class App extends Component {
//     render() {
//         return (
          
//           //자식 컴포넌트를 중앙 정렬하는 가장 바깥쪽의 View컴포넌트 
//           <View style={styles.container}>              
//               <View style={styles.cardContainer}/>
//           </View>
//         );
//     }
// }

// //여러 곳에서 사용할 경우를 대비해서 프로필 카드의 색상을 변수에 정의함
// const profileCardColor = 'dodgerblue';

// const styles = StyleSheet.create({
//     //가장 바깥쪽 컴포넌트가 사용할 스타일
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     //프로필 카드 에서 사용할 스타일
//     cardContainer: {
//         //상수로 정의된 값을 이용해서 스타일 속성값을 쉽게 사용
//         backgroundColor: profileCardColor,
//         width: 300,
//         height: 400
//     }
// });


//4.8 
// import React, { Component } from 'react';
// import { StyleSheet, Text, View} from 'react-native';

// export default class App extends Component<{}> {
//     render() {
//         return (
//           <View style={styles.container}>
//               {/*  borderWidth를 1로 지정 */}
//               <Example style={{borderWidth: 1}}>
//                   <Text>borderWidth: 1</Text>
//               </Example>
//                   {/*  borderWidth를 3으로 늘리고 왼쪽의 테두리를 없애고 borderLeftWidth를 0으로 지정 */}
//               <Example style={{borderWidth: 3, borderLeftWidth: 0}}>
//                   <Text>borderWidth: 3, borderLeftWidth: 0</Text>
//               </Example>
//               {/* borderWidth를 3으로 지정하고 왼쪽 테두리를 다시 만들고 테두리의 색상을 빨강 색으로 지정*/}
//               <Example style={{borderWidth: 3, borderLeftColor: 'red'}}>
//                   <Text>borderWidth: 3, borderLeftColor: 'red'</Text>
//               </Example>
              
//               {/* 왼쪽 테두리만 지정하고 borderLeftWidth를 3으로 설정 */}
//               <Example style={{borderLeftWidth: 3}}>
//                   <Text>borderLeftWidth: 3</Text>
//               </Example>
              
//               {/* -  borderStyle을 기본 solid에서 dashed로 변경*/}
//               <Example style={{borderWidth: 1, borderStyle: 'dashed'}}>
//                   <Text>borderWidth: 1, borderStyle: 'dashed'</Text>
//               </Example>
//           </View>
//         );
//     }
// }

// /* 재사용할 수 있는 Example 컴포넌트. 기본 스타일 속성을 전달된 스타일 속성으로 쉽게 오버라이드할 수 있음  */
// const Example = (props) => (
//   <View style={[styles.example,props.style]}>
//       {props.children}
//   </View>
// );

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     example: {
//         marginBottom: 15
//     }
// });


//4.9
// import React, {Component} from 'react';
// import {StyleSheet, Text, View} from 'react-native';

// export default class App extends Component {
//     render() {
//         return (
//           <View style={styles.container}>
//               {/* 예1: 네 곳의 모서리가 둥근 사각형*/}
//               <Example style={{borderRadius: 20}}>
//                   <CenteredText>
//                       Example 1:{"\n"}4 Rounded Corners
//                   </CenteredText>
//               </Example>
              
//               {/* 예2: 오른 쪽 두 모서리가 둥근 사각형*/}
//               <Example style={{borderTopRightRadius: 60,
//                   borderBottomRightRadius: 60}}>
//                   <CenteredText>
//                       Example 2:{"\n"}D Shape
//                   </CenteredText>
//               </Example>
              
//               {/* 예3: 양 반대 편의 모서리가 둥근 사각형 */}
//               <Example style={{borderTopLeftRadius: 30,
//                   borderBottomRightRadius: 30}}>
//                   <CenteredText>
//                       Example 3:{"\n"}Leaf Shape
//                   </CenteredText>
//               </Example>
              
//               { /* 예4: : border radius가 각 측면의 길이의 반으로 지정된 사각형*/ }
//               <Example style={{borderRadius: 60}}>
//                   <CenteredText>
//                       Example 4:{"\n"}Circle
//                   </CenteredText>
//               </Example>
//           </View>
//         );
//     }
// }

// //-  중앙 정렬된 텍스트 엘리먼트(text element)를 렌더링하는 재사용 가능한 컴포넌트
// const Example = (props) => (
//   <View style={[styles.example,props.style]}>
//       {props.children}
//   </View>
// );

// //-  텍스트 엘리먼트(text element) 내의 텍스트를 중앙 정렬하는 스타일
// const CenteredText = (props) => (
//   <Text style={[styles.centeredText, props.style]}>
//       {props.children}
//   </Text>
// );

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         marginTop: 75
//     },
//     example: {
//         width: 120,
//         height: 120,
//         marginLeft: 20,
//         marginBottom: 20,
//         backgroundColor: 'grey',
//         borderWidth: 2,
//         justifyContent: 'center'
//     },
//     centeredText: {
//         textAlign: 'center',
//         margin: 10
//     }
// });


//4.10
// import React, {Component} from 'react';

// //react-native에서 Image 컴포넌트 가져오기
// import {Image, StyleSheet, View} from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.cardContainer}>
//           <View style={styles.cardImageContainer}>
//             {/*  user.png 파일은 앱의 코드와 같은 디렉토리에 위치함 */}
//             <Image style={styles.cardImage} source={require('./user.png')}/>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// const profileCardColor = 'dodgerblue';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   // 프로필 카드에 border 속성 추가하기
//   cardContainer: {
//     borderColor: 'black',
//     borderWidth: 3,
//     borderStyle: 'solid',
//     borderRadius: 20,
//     backgroundColor: profileCardColor,
//     width: 300,
//     height: 400
//   },
//   // 이미지 컨테이너(image container)는 120 X 120 크기의 정사각형.
//   // borderRadius 속성을 60(120의 반)으로 지정해서 원으로 나타남
//   cardImageContainer: {
//     backgroundColor: 'white',
//     borderWidth: 3,
//     borderColor: 'black',
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//   },
//   //이미지에 적용한 스타일
//   cardImage: {
//     width: 80,
//     height: 80
//   }
// });


//4.11
// import React, {Component} from 'react';
// import {StyleSheet, Text, View} from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.exampleContainer}>          
//           {/* margin이 적용되지 않은 경우 */}
//           <Example>
//             <CenteredText>A</CenteredText>
//           </Example>
//         </View>
        
//         <View style={styles.exampleContainer}>
//           {/* 위쪽만 margin 50 */}
//           <Example style={{marginTop: 50}}>
//             <CenteredText>B</CenteredText>
//           </Example>
//         </View>
        
//         <View style={styles.exampleContainer}>
//           {/*위쪽 margin 50 왼쪽 margin 10 */}
//           <Example style={{marginTop: 50, marginLeft: 10}}>
//             <CenteredText>C</CenteredText>
//           </Example>
//         </View>
//         <View style={styles.exampleContainer}>
//           {/*위쪽과 왼쪽에 음수 margin을 이용하는 경우  */}
//           <Example style={{marginLeft: -10, marginTop: -10}}>
//             <CenteredText>D</CenteredText>
//           </Example>
//         </View>
//       </View>
//     );
//   }
// }

// const Example = (props) => (
//   <View style={[styles.example,props.style]}>
//     {props.children}
//   </View>
// );

// const CenteredText = (props) => (
//   <Text style={[styles.centeredText, props.style]}>
//     {props.children}
//   </Text>
// );

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     marginTop: 75
//   },
//   exampleContainer: {
//     borderWidth: 1,
//     width: 120,
//     height: 120,
//     marginLeft: 20,
//     marginBottom: 20,
//   },
//   example: {
//     width: 50,
//     height: 50,
//     backgroundColor: 'grey',
//     borderWidth: 1,
//     justifyContent: 'center'
//   },
//   centeredText: {
//     textAlign: 'center',
//     margin: 10
//   }
// });


//4.12
// import React, {Component} from 'react';
// import {StyleSheet, Text, View} from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.exampleContainer}>
//           {/* A 예: 변경된 부분 없음. 마진과 패딩 없음 */}
//           <Example style={{}}>
//             <CenteredText>A</CenteredText>
//           </Example>
//         </View>
//         <View style={styles.exampleContainer}>
//           {/* B 예: marginTop을 paddingTop으로 변경*/}
//           <Example style={{paddingTop: 50}}>
//             <CenteredText>B</CenteredText>
//           </Example>
//         </View>
//         <View style={styles.exampleContainer}>
//           {/*  C 예: marginTop과 marginLeft을 각각 paddingTop과 paddingLeft으로 변경*/}
//           <Example style={{paddingTop: 50, paddingLeft: 10}}>
//             <CenteredText>C</CenteredText>
//           </Example>
//         </View>
//         <View style={styles.exampleContainer}>
//           {/* D 예: marginLeft와 marginTop을 각각 paddingLeft와 marginTop으로 변경. 음수 값은 그대로 적용 */}
//           <Example style={{paddingLeft: -10, paddingTop: -10}}>
//             <CenteredText>D</CenteredText>
//           </Example>
//         </View>
//       </View>
//     );
//   }
// }

// const Example = (props) => (
//   <View style={[styles.example,props.style]}>
//     {props.children}
//   </View>
// );

// const CenteredText = (props) => (
//   <Text style={[styles.centeredText, props.style]}>
//     {props.children}
//   </Text>
// );

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     marginTop: 75
//   },
//   exampleContainer: {
//     borderWidth: 1,
//     width: 120,
//     height: 120,
//     marginLeft: 20,
//     marginBottom: 20,
//   },
//   example: {
//     width: 50,
//     height: 50,
//     backgroundColor: 'grey',
//     borderWidth: 1,
//     justifyContent: 'center'
//   },
//   //Text component에 boarder와 background 색상지정 
//   centeredText: {
//     textAlign: 'center',
//     margin: 10,
//     borderWidth: 1,
//     backgroundColor: 'lightgrey'
//   }
// });


//4.13
// import React, {Component} from 'react';
// import {StyleSheet, Text, View} from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         {/* A,B,C 블록을 포함하는 라인 */}
//         <View style={styles.row}>
//           <Example>
//             <CenteredText>A</CenteredText>
//           </Example>
//           <Example>
//             <CenteredText>B</CenteredText>
//             {/* 부모인 B블록 내에서 절대 위치를 사용해서 오른쪽 아래에 배치 */}
//             <View style={[styles.tinyExample,
//               {position: 'absolute',
//                 right: 0,
//                 bottom: 0}]}>
//               <CenteredText>E</CenteredText>
//             </View>
//           </Example>
//           <Example>
//             <CenteredText>C</CenteredText>
//           </Example>
//         </View>
//         {/* D블록은 부모 요소의 오른쪽 하단에 배치 */}
//         <Example style={{position: 'absolute',right: 0, bottom: 0}}>
//           <CenteredText>D</CenteredText>
//         </Example>
//       </View>
//     );
//   }
// }

// const Example = (props) => (
//   <View style={[styles.example,props.style]}>
//     {props.children}
//   </View>
// );

// const CenteredText = (props) => (
//   <Text style={[styles.centeredText, props.style]}>
//     {props.children}
//   </Text>
// );

// const styles = StyleSheet.create({
//   container: {
//     width: 300,
//     height: 300,
//     margin: 40,
//     marginTop: 100,
//     borderWidth: 1
//   },
//   row: {
//     flex: 1,
//     flexDirection: 'row'
//   },
//   example: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'grey',
//     borderWidth: 1,
//     justifyContent: 'center'
//   },
//   tinyExample: {
//     width: 30,
//     height: 30,
//     borderWidth: 1,
//     justifyContent: 'center',
//     backgroundColor: 'lightgrey'
//   },
//   centeredText: {
//     textAlign: 'center',
//     margin: 10
//   }
// });


//4.14 

// import React, { Component } from 'react';
// import { Image, StyleSheet, View} from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.cardContainer}>
//           <View style={styles.cardImageContainer}>
//             <Image style={styles.cardImage} source={require('./user.png')}/>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// const profileCardColor = 'dodgerblue';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   cardContainer: {
//     //프로필 카드를 수평축에서 중앙으로 정렬
//     alignItems: 'center',
//     borderColor: 'black',
//     borderWidth: 3,
//     borderStyle: 'solid',
//     borderRadius: 20,
//     backgroundColor: profileCardColor,
//     width: 300,
//     height: 400
//   },
//   cardImageContainer: {
//     //사용자의 이미지를 수평축에서 중앙으로 정렬
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderWidth: 3,
//     borderColor: 'black',
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     marginTop: 30, //프로필 카드와 원의 상단의 간격
//     paddingTop: 15 //원과 안쪽 이미지 사이의 간격
//   },
//   cardImage: {
//     width: 80,
//     height: 80
//   }
// });


//4.15
// import React, {Component} from 'react';
// //react-native에서 Text컴포넌트 import
// import {Image, StyleSheet, Text, View} from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.cardContainer}>
//           <View style={styles.cardImageContainer}>
//             <Image style={styles.cardImage} source={require('./user.png')}/>
//           </View>
//           <View>
//             {/* 인물 이름을 보여주는 Text컴포넌트 */}
//             <Text style={styles.cardName}>
//               John Doe
//             </Text>
//           </View>

//           {/* 직업을 표시하는 Text 컴포넌트의 컨테이너.
//             직업과 프로필 소개를 구분하는 하단 테두리(bottom border)을 지정 */}
//           <View style={styles.cardOccupationContainer}>
//             {/*직업을 표시하는 Text */}
//             <Text style={styles.cardOccupation}>
//               React Native Developer
//             </Text>
//           </View>
//           <View>
//             {/* 인물의 프로필 설명 */}
//             <Text style={styles.cardDescription}>
//               John is a really great JavaScript developer. He
//               loves using JS to build React Native applications
//               for iOS and Android.
//             </Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// const profileCardColor = 'dodgerblue';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   cardContainer: {
//     alignItems: 'center',
//     borderColor: 'black',
//     borderWidth: 3,
//     borderStyle: 'solid',
//     borderRadius: 20,
//     backgroundColor: profileCardColor,
//     width: 300,
//     height: 400
//   },
//   cardImageContainer: {
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderWidth: 3,
//     borderColor: 'black',
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     marginTop: 30,
//     paddingTop: 15
//   },
//   cardImage: {
//     width: 80,
//     height: 80
//   },

//   // 이름 표시 Text 컴포넌트의 색상은 white
//   cardName: {
//     color: 'white',
//     marginTop: 30,
//   },

//   //직업을 영역의 스타일
//   cardOccupationContainer: {
//     borderColor: 'black',
//     borderWidth: 3,
//     borderTopWidth: 0,
//     borderRightWidth: 0,
//     borderLeftWidth: 0,
//   },

//   //직업을 표시하는 Text 컴포넌트에 적용된 스타일(위치를 지정하는 스타일만 포함)
//   cardOccupation: {
//     marginTop: 10,
//     marginBottom: 10,
//   },

//   //프로필 Text의 스타일
//   cardDescription: {
//     marginTop: 10,
//     marginRight: 40,
//     marginLeft: 40,
//     marginBottom: 10
//   }
// });


//4.16
// import React, {Component} from 'react';

// //react-native에서 Platform import
// import {Platform, StyleSheet, Text, View} from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.row}>
//           <CenteredText>
//             I am a monospaced font on both platforms
//           </CenteredText>
//           <BottomText> {/* Platform.OS를 통해서 현재 운영체제를 알아낼 수 있음  */}
//             {Platform.OS}
//           </BottomText>
//         </View>
//       </View>
//     );
//   }
// }

// const CenteredText = (props) => (
//   <Text style={[styles.centeredText, props.style]}>
//     {props.children}
//   </Text>
// );

// const BottomText = (props) => (

//   //절대 위치 지정
//   <CenteredText style={[{position: 'absolute', bottom: 0},
//     props.style]}>
//     {props.children}
//   </CenteredText>
// );

// const styles = StyleSheet.create({
//   container: {
//     width: 300,
//     height: 300,
//     margin: 40,
//     marginTop: 100,
//     borderWidth: 1
//   },
//   row: {
//     alignItems: 'center',
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center'
//   },
//   centeredText: {
//     textAlign: 'center',
//     margin: 10,
//     fontSize: 24,
//     //Platform.sleect를 통해 운영체제 맞는 폰트 선택
//     ...Platform.select({
//       ios: {
//         fontFamily: 'American Typewriter'
//       },
//       android: {
//         fontFamily: 'monospace'
//       }
//     })
//   }
// });


//4.17
// import React, { Component } from 'react';
// import { Image, StyleSheet, Text, View} from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.cardContainer}>
//           <View style={styles.cardImageContainer}>
//             <Image style={styles.cardImage} source={require('./user.png')}/>
//           </View>
//           <View>
//             <Text style={styles.cardName}>
//               John Doe
//             </Text>
//           </View>
//           <View style={styles.cardOccupationContainer}>
//             <Text style={styles.cardOccupation}>
//               React Native Developer
//             </Text>
//           </View>
//           <View>
//             <Text style={styles.cardDescription}>
//               John is a really great JavaScript developer. He
//               loves using JS to build React Native applications
//               for iOS and Android.
//             </Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// const profileCardColor = 'dodgerblue';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   cardContainer: {
//     alignItems: 'center',
//     borderColor: 'black',
//     borderWidth: 3,
//     borderStyle: 'solid',
//     borderRadius: 20,
//     backgroundColor: profileCardColor,
//     width: 300,
//     height: 400
//   },
//   cardImageContainer: {
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderWidth: 3,
//     borderColor: 'black',
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     marginTop: 30,
//     paddingTop: 15
//   },
//   cardImage: {
//     width: 80,
//     height: 80
//   },
//   cardName: {
//     color: 'white',
//     fontWeight: 'bold', //이름부분 bold 처리
//     fontSize: 24, //이름 부분 폰트크기 24
//     marginTop: 30,
//   },
//   cardOccupationContainer: {
//     borderColor: 'black',
//     borderBottomWidth: 3
//   },
//   cardOccupation: {
//     fontWeight: 'bold', //직업부분 bold 처리
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   cardDescription: {
//     fontStyle: 'italic', //설명부분 기울임꼴 적용
//     marginTop: 10,
//     marginRight: 40,
//     marginLeft: 40,
//     marginBottom: 10
//   }
// });

//4.18
// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <TextContainer>
//           <LeftText>Text A</LeftText>
//         </TextContainer>
//         <TextContainer>
//           {/* 높이를 100으로 지정 */}
//           <LeftText style={{lineHeight: 100}}>Text B</LeftText>
//         </TextContainer>
//         <TextContainer>
//           <LeftText>Text C</LeftText>
//         </TextContainer>
//         <TextContainer>
//           <LeftText>{Platform.OS}</LeftText>
//         </TextContainer>
//       </View>
//     );
//   }
// }

// const LeftText = (props) => (
//   <Text style={[styles.leftText, props.style]}>
//     {props.children}
//   </Text>
// );

// const TextContainer = (props) => (
//   <View style={[styles.textContainer, props.style]}>
//     {props.children}
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     width: 300,
//     height: 300,
//     margin: 40,
//     marginTop: 100
//   },
//   //높이를 확인하기 위해서 border 지정
//   textContainer: {
//     borderWidth: 1
//   },
//   leftText: {
//     fontSize: 20,
//   }
// });

//4.19
// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <LeftText style={{fontStyle: 'italic'}}>
//           A) Italic
//         </LeftText>
//         <LeftText style={{textDecorationLine: 'underline line-through'}}>
//           B) Underline and Line Through
//         </LeftText>
//         <LeftText style={{textDecorationLine: 'underline line-through',
//           textDecorationColor: 'red',
//           textDecorationStyle: 'dotted'}}>
//           C) Underline and Line Through
//         </LeftText>
//         <LeftText style={{textShadowColor: 'red',
//           textShadowOffset: {width: -2, height: -2},
//           textShadowRadius: 4}}>
//           D) Text Shadow
//         </LeftText>
//         <LeftText style={{letterSpacing: 5}}>
//           E) Letter Spacing
//         </LeftText>
//         <LeftText style={{textAlign: 'center', fontWeight: 'bold'}}>
//           {Platform.OS}
//         </LeftText>
//       </View>
//     );
//   }
// }

// const LeftText = (props) => (
//   <Text style={[styles.leftText, props.style]}>
//     {props.children}
//   </Text>
// );

// const styles = StyleSheet.create({
//   container: {
//     width: 300,
//     height: 300,
//     margin: 40,
//     marginTop: 100
//   },
//   leftText: {
//     fontSize: 20,
//     paddingBottom: 10
//   }
// });



//4.20
import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage} source={require('./user.png')}/>
          </View>
          <View>
            <Text style={styles.cardTitle}>
              John Doe
            </Text>
          </View>
          <View style={styles.cardSubtitleContainer}>
            <Text style={styles.cardSubtitle}>
              React Native Developer
            </Text>
          </View>
          <View>
            <Text style={styles.cardDescription}>
              John is a really great JavaScript developer. He
              loves using JS to build React Native applications
              for iOS and Android.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15
  },
  cardImage: {
    width: 80,
    height: 80
  },
  cardTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 30,
    textShadowColor: 'black', // 음영 색상 지정
    textShadowOffset: {  //음영의 offset 지정 오른쪽 하단으로 음영
      height: 2,
      width: 2
    },
    textShadowRadius: 3 //음영의 반경 
  },
  cardSubtitleContainer: {
    borderColor: 'black',
    borderWidth: 3,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  cardSubtitle: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  cardDescription: {
    fontStyle: 'italic',
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10
  }
});
