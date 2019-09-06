// import React, { Component } from 'react';

// //Animate API 가져오기
// import {
//   StyleSheet,
//   View,
//   Animated,
//   Button
// } from 'react-native';

// export default class RNAnimations extends Component {
//   // marginTop이라는 클래스 속성을 만들고 애니메이션효과를 만들고, 시작 값을 전달함(여기서는 20)
//   marginTop = new Animated.Value(20);
  
//   //애니매이션 효과를 실행하는 함수
//   animate = () => {
//     Animated.timing(
//       this.marginTop,
//       {
//         toValue: 200,
//         duration: 500,
//       }
//     ).start();
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         {/* onPress에 이벤트 핸들러로 animate 지정 */}
//         <Button
//           title='Animate Box'
//           onPress={this.animate}
//         />
//         {/*View 컴포넌트 대신에 Animateed.View 컴포넌트 사용  */}
//         <Animated.View
//           style={[styles.box, { marginTop: this.marginTop } ]} />
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     paddingTop: 50,
//   },
//   box: {
//     width: 150,
//     height: 150,
//     backgroundColor: 'red'
//   }
// });

//7.2
// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   View,
//   Animated,
//   Button,
//   TextInput,
//   Text,
// } from 'react-native';

// export default class RNAnimations extends Component {
  
//   //animatedWidth 변수와 애니메이션 초기 값(initial value) 만들기
//   animatedWidth = new Animated.Value(200);
  
//   //animatiedWidth 속성에 애니메이션 효과를 함수로 만들기
//   animate = (value) => {
//     Animated.timing(
//       this.animatedWidth,
//       {
//         toValue: value,
//         duration: 750,
//       }
//     ).start()
//   }
//   render() {
//     return (
//       <View style={styles.container}>
        
//         {/* TextInput 컴포넌트를 감싼 컨테이너 뷰의 스타일에 animatedWidth 값 연결하기*/}
        
//         <Animated.View style={{ width: this.animatedWidth }}>
          
//           {/* onBlur와 onFocus 이벤트 핸들러에 animate 메서드를 연결, 
//              각 이벤트가 발생할 때 해당하는 width 값 전달하기*/}
          
//           <TextInput // D
//             style={[styles.input]}
//             onBlur={() => this.animate(200)}
//             onFocus={() => this.animate(325)}
//             ref={input => this.input = input}
//           />
//         </Animated.View>
//         <Button
//           title='Submit'
//           onPress={() => this.input.blur()}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     paddingTop: 50,
//   },
//   input: {
//     height: 50,
//     marginHorizontal: 15,
//     backgroundColor: '#ededed',
//     marginTop: 10,
//     paddingHorizontal: 9,
//   },
// });


//7.3

// import React, { Component } from 'react';
// import {
//   Easing,
//   StyleSheet,
//   View,
//   Animated,
//   Button,
//   Text,
// } from 'react-native';

// export default class RNAnimations extends Component {
//   //초기 상태로 loading 아이콘이 필요한 상황인지(true)
//   state = {
//     loading: true,
//   }

//   //2000(2초)후에 loading state를 변경하도록 setTimeout으로
//   componentDidMount() {
//     this.animate();
//     setTimeout(() => this.setState({ loading: false }), 2000)
//   }

//   //animationRotation 변수의 상태를 0으로 지정
//   animatedRotation = new Animated.Value(0);

//   //animate 클래스 메서드를 만들고 Animated.loop 함수를 호출할 때 Animated.timing을 인수로 전달함
//   animate = () => {
//     Animated.loop(
//       Animated.timing(
//         this.animatedRotation,
//         {
//           toValue: 1,
//           duration: 1800,
//           easing: Easing.linear,
//         }
//       )
//     ).start()
//   }
//   render() {

//     // animationRotion에 애니메이션 효과를 연결해서 새로운 rotaion변수 생성
//     const rotation = this.animatedRotation.interpolate({
//       //애니매이션의 시작과 끝 (0 과 1)
//       inputRange: [0, 1],
//       //애니매이션의 진행 변화
//       outputRange: ['0deg', '360deg'],
//     });
//     const { loading } = this.state;
//     return (
//       <View style={styles.container}>
//         {
//           loading ? (
//             <Animated.Image
//               source={require('./assets/35633-200.png')}
//               style={{ width: 40, height: 40, transform: [{ rotate: rotation }] }}
//             />
//           ) : (
//             <Text>Welcome</Text>
//           )
//         }
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 10,
//     paddingTop: 50,
//   },
//   input: {
//     height: 50,
//     marginHorizontal: 15,
//     backgroundColor: '#ededed',
//     marginTop: 10,
//     paddingHorizontal: 9,
//   },
// });


//7.4
// import React, { Component } from 'react';
// import {
//   Easing,
//   StyleSheet,
//   View,
//   Animated,
//   Text,
//   TouchableHighlight,
// } from 'react-native';

// export default class RNAnimations extends Component {
//   animatedTitle = new Animated.Value(-200);
//   animatedSubtitle = new Animated.Value(600);
//   animatedButton = new Animated.Value(800);

//   componentDidMount() {
//     this.animate();
//   }
//   animate = () => {
//     Animated.parallel([
//       Animated.timing(
//         this.animatedTitle,
//         {
//           toValue: 200,
//           duration: 800,
//         } 
//       ),
//       Animated.timing(
//         this.animatedSubtitle,
//         {
//           toValue: 0,
//           duration: 1400,
//           delay: 800,
//         }
//       ),
//       Animated.timing(
//         this.animatedButton,
//         {
//           toValue: 0,
//           duration: 1000,
//           delay: 2200,
//         }
//       )
//     ]).start();
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Animated.Text style={[styles.title, { marginTop: this.animatedTitle }]}>Welcome</Animated.Text>
//         <Animated.Text style={[styles.subTitle, { marginLeft: this.animatedSubtitle }]}>Thanks for visiting our app!</Animated.Text>
//         <Animated.View style={{ marginTop: this.animatedButton }}>
//           <TouchableHighlight style={styles.button}>
//             <Text>Get Started</Text>
//           </TouchableHighlight>
//         </Animated.View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   title: {
//     textAlign: 'center',
//     fontSize: 20,
//     marginBottom: 12,
//   },
//   subTitle: {
//     width: '100%',
//     textAlign: 'center',
//     fontSize: 18,
//     opacity: .8,
//   },
//   button: {
//     marginTop: 25,
//     backgroundColor: '#ddd',
//     height: 55,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 10,
//   }
// });



//7.5

// import React, { Component } from 'react';

// //'react-native'에서 Animated 가져오기
// import {
//   StyleSheet,
//   View,
//   Animated
// } from 'react-native';

// export default class RNAnimations extends Component {

//   //컴포넌트가 마운트될 때, animiate 함수를 호출함
//   componentDidMount() {
//     this.animate();
//   }

//   //세 개의 애니매이션 효과를 만들고 시작 값으로 -30을 전달함
//   AnimatedValue1 = new Animated.Value(-30);
//   AnimatedValue2 = new Animated.Value(-30);
//   AnimatedValue3 = new Animated.Value(-30);

//   //새 timing 애니메이션을 만드는 함수를 반환하는 createAnimation지정
//   animate = () => {
//     const createAnimation = (value) => {
//       return Animated.timing(
//         value, {
//           toValue: 290,
//           duration: 500
//         })
//     }

//     //애니메이션 효과에 createAnimation의 결과를 적용해서 순차적으로 실행
//     Animated.sequence([
//       createAnimation(this.AnimatedValue1),
//       createAnimation(this.AnimatedValue2),
//       createAnimation(this.AnimatedValue3)
//     ]).start()
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Animated.Text style={[styles.text, { marginTop: this.AnimatedValue1}]}>
//           1
//         </Animated.Text>
//         <Animated.Text style={[styles.text, { marginTop: this.AnimatedValue2}]}>
//           2
//         </Animated.Text>
//         <Animated.Text style={[styles.text, { marginTop: this.AnimatedValue3}]}>
//           3
//         </Animated.Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     flexDirection: 'row',
//   },
//   text: {
//     marginHorizontal: 20,
//     fontSize: 26
//   }
// });


//7.6

import React, { Component } from 'react'

//- 'react-native'에서 Animated API 가져오기
import {
  StyleSheet,
  View,
  Animated
} from 'react-native'

export default class RNAnimations extends Component {
  constructor () {
    super()
    this.animatedValues = []
    
    //1,000개의 애니메이션효과를 포함한 배열 만들기. 초기 값은 0으로 지정함
    for (let i = 0; i < 1000; i++) {
      this.animatedValues[i] = new Animated.Value(0)
    }
    
    // animatedValues 배열에 Animated.timing 이 적용된 애니메이션 배열 만들기
    this.animations = this.animatedValues.map(value => {
      return Animated.timing(
        value,
        {
          toValue: 1,
          duration: 6000
        }
      )
    })
  }
  componentDidMount() {
    this.animate()
  }
  
  //15ms 간격으로 실행되는 애니메이션 시작
  animate = () => {
    Animated.stagger(15, this.animations).start()
  }
  render() {
    return (
      <View style={styles.container}>
        {
          this.animatedValues.map((value, index) => (
            <Animated.View key={index} style={[{opacity: value}, styles.box]} />
          ))
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  box: {
    width: 15,
    height: 15,
    margin: .5,
    backgroundColor: 'red'
  }
})
