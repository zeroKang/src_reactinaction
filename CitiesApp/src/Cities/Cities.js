import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native'

// 예제 6.4에서 만든 CenterMessage 가져오기
import CenterMessage from '../components/CenterMessage'

import { colors } from '../theme'

export default class Cities extends React.Component {
  
  // 클래스에 static navigationOptions 속성을 선언함. 이 라우트의 설정
  static navigationOptions = {
    title: 'Cities',
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      fontWeight: '400'
    }
  }
  
  navigate = (item) => {
    //navigation.navigate 에 두번째 인수로 도시를 전달
    this.props.navigation.navigate('City', { city: item })
  }
  render() {
    
    //-  screenProps props를 비구조 할당해서 cities 배열 참조
    const { screenProps: { cities } } = this.props
    return (
      <ScrollView  contentContainerStyle={[!cities.length && { flex: 1 }]}>
        
        {/* cities 배열이 비어 있는지 확인. 빈 상태면 앱에 도시 정보가 없다는 안내 메시지를 표시함. */}
        <View style={[!cities.length && { justifyContent: 'center', flex: 1 }]}>
          {
            !cities.length && <CenterMessage message='No saved cities!' />
          }
          
          {/* cities 배열내 모든 도시를 맵핑해 도시 이름과 나라 이름을 목록으로 표시함. 
             TouchableWithoutFeedback 컴포넌트에 navigate 메서드를 연결함 */}
          
          {
            cities.map((item, index) => (
              <TouchableWithoutFeedback onPress={() => this.navigate(item)} key={index} >
                <View style={styles.cityContainer}>
                  <Text style={styles.city}>{item.city}</Text>
                  <Text style={styles.country}>{item.country}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))
          }
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    cityContainer: {
      padding: 10,
      borderBottomWidth: 2,
      borderBottomColor: colors.primary
    },
    city: {
      fontSize: 20,
    },
    country: {
      color: 'rgba(0, 0, 0, .5)'
    },  
  })
  