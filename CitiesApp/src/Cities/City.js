import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity
} from 'react-native'

import CenterMessage from '../components/CenterMessage'
import { colors } from '../theme'

class City extends React.Component {
  
  //Cities.js 파일과 같이 static navigationOptions 속성
  static navigationOptions = (props) => {
    const { city } = props.navigation.state.params
    return {
      title: city.city,
      headerTitleStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400'
      }
    }
  }
  state = {
    name: '',
    info: ''
  }
  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  
  
  addLocation = () => {
    if (this.state.name === '' || this.state.info === '') return
    //city 객체를 구조 분해 할당하고 location 객체를 만듦
    const { city } = this.props.navigation.state.params
    const location = {
      name: this.state.name,
      info: this.state.info
    }
    //도시에 새 장소를 추가하고 state를 재지정함
    this.props.screenProps.addLocation(location, city)
    this.setState({ name: '', info: '' })
  }
  
  render() {
    //도시 정보 비구조화
    const { city } = this.props.navigation.state.params
    console.log('props: ', this.props)
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={[!city.locations.length && { flex: 1 }]}>
          <View style={[styles.locationsContainer, !city.locations.length && { flex: 1, justifyContent: 'center' }]}>
            {
              !city.locations.length && <CenterMessage message='No locations for this city!' />
            }
            
            {/*cities 배열에 포함된 모든 도시를 매핑하고 도시 이름과 정보를 표시하는 컴포넌트를 반환함*/}
            
            {
              city.locations.map((location, index) => (
                <View key={index} style={styles.locationContainer}>
                  <Text style={styles.locationName}>{location.name}</Text>
                  <Text style={styles.locationInfo}>{location.info}</Text>
                </View>
              ))
            }
          </View>
        </ScrollView>
        {/* 입력 폼 생성 */}
        <TextInput
          onChangeText={val => this.onChangeText('name', val)}
          placeholder='Location name'
          value={this.state.name}
          style={styles.input}
          placeholderTextColor='white'
        />
        <TextInput
          onChangeText={val => this.onChangeText('info', val)}
          placeholder='Location info'
          value={this.state.info}
          style={[styles.input, styles.input2]}
          placeholderTextColor='white'
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.addLocation}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add Location</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  locationsContainer: {
    paddingBottom: 104
  },
  input: {
    height: 50,
    backgroundColor: colors.primary,
    color: 'white',
    paddingHorizontal: 8,
    position: 'absolute',
    width: '100%',
    bottom: 104,
    left: 0
  },
  input2: {
    bottom: 52
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%'
  },
  button: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white'
  },
  locationContainer: {
    padding: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2
  },
  locationName: {
    fontSize: 20
  },
  locationInfo: {
    color: 'rgba(0, 0, 0, .5)'
  }
})

export default City
