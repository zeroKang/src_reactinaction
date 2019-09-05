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
import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';

//외부로 분리해 둔 getStyleSheet 함수 가져오기
import getStyleSheet from './styles';

export default class App extends Component {

    constructor(props) {
        
        super(props);
        
        //기본 테마 색을 밝은 색으로 컴포넌트의 state 초기화하기
        this.state = {
            darkTheme: false
        }
        
        //예외가 발생하지 않도록 toggleTheme함수를 컴포넌트에 bind
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme() {
        //호출할 때 마다 스타일을 toogle
        this.setState({darkTheme: !this.state.darkTheme})
    };

    render() {

        //표시할 테마에 적합한 스타일시트를 가져오기 위해 getStyleSheet 함수 사용
        const styles = getStyleSheet(this.state.darkTheme);
         //backgroundColor를 쉽게 사용하기 위해서 StyleSheet의 flatten을 이용해서
        //StyleSheet 객체를 JavaScript 객체로 변환
        const backgroundColor =   
        StyleSheet.flatten(styles.container).backgroundColor;

        return (
          //테마의 styles.container 참조
          <View style={styles.container}>
              {/* 테마의 styles.box 참조 */}
              <View style={styles.box}>
                  {/* 사용중인 테마의 색상을 텍스트로 표시  */}
                  {/* 버튼이 클릭되면 toogleTheme 호출 */}
                  <Button title={backgroundColor} onPress={this.toggleTheme}/>
              </View>
          </View>
        );
    }
}
