import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

import uuidV4 from 'uuid/v4'

import { colors } from '../theme'

export default class AddCity extends React.Component {
  
  //도시 이름과 나라 이름을 저장하는 state. 초기 값은 빈 문자열
  state = {
    city: '',
    country: ''
  }
  
  //도시 또는 나라의 이름 값으로 state를 업데이트함
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  
  //이 컴포넌트의 대부분 기능을 처리함
  submit = () => {
    if (this.state.city === '' || this.state.country === '') alert('please complete form')
    const city = {
      city: this.state.city,
      country: this.state.country,
      id: uuidV4(),
      locations: []
    }
    this.props.screenProps.addCity(city)
    this.setState({
      city: '',
      country: ''
    }, () => {
      this.props.navigation.navigate('Cities')
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Cities</Text>
        <TextInput
          placeholder='City name'
          onChangeText={val => this.onChangeText('city', val)}
          style={styles.input}
          value={this.state.city}
        />
        <TextInput
          placeholder='Country name'
          onChangeText={val => this.onChangeText('country', val)}
          style={styles.input}
          value={this.state.country}
        />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add City</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    button: {
      height: 50,
      backgroundColor: '#666',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10
    },
    buttonText: {
      color: 'white',
      fontSize: 18
    },
    heading: {
      color: 'white',
      fontSize: 40,
      marginBottom: 10,
      alignSelf: 'center'
    },
    container: {
      backgroundColor: colors.primary,
      flex: 1,
      justifyContent: 'center'
    },
    input: {
      margin: 10,
      backgroundColor: 'white',
      paddingHorizontal: 8,
      height: 50
    }
  })
  