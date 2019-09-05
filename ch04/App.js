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
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class App extends Component {
    render () {
        return (
            /* styles내에 정의된 container 스타일 참조 */
            <View style={styles.container}>
                {/* styles에 정의된 message와 warning 참조를 배열로  */}
               <Text style={[styles.message,styles.warning]}>Some Text</Text> 
            </View>
        )
    }
}

/* StyleSheet.create를 이용해서 스타일 정의 */
const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginTop: 20
    },
    message: {
        fontSize: 18
    },
    warning: {
        color: 'red'
    }
});
