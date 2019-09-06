import React, { Component } from 'react'

// 'react-native'에서 TimePickerAndroid 가져오기
import { TimePickerAndroid, View, Text } from 'react-native'

// moment.js에서 moment 가져오기
import moment from 'moment'

let styles

class TimePicker extends Component {
  constructor () {
    super()
    
    // time state를 만들고 초기 값으로 'h:mm a' 시간 형식을 지정함.
    // 시간:분:오전 또는 시간:분:오후(hour:minutes a.m. or p.m)
    this.state = {
      time: moment().format('h:mm a')
    }
    this.openTimePicker = this.openTimePicker.bind(this)
  }

  // openTimePicker 메서드
  // TimePickerAndroid.open 메서드는 promise를 반환함.
  // promise는 시간(hour)/분(minute)과 액션(action)을 포함한 time 객체를 포함함
  openTimePicker () {
    TimePickerAndroid.open({
        time: this.state.time
      })
      .then((time) => {
        const { hour, minute, action } = time
        //action이 timeSetAction이면 새로운 시간을 반영할 수 있도록 state의 값을 업데이트함
        if (action === 'timeSetAction') {
          const time = moment().minute(minute).hour(hour).format('h:mm a')
          this.setState({ time })
        }
      })
  }
  
  render () {
    const { container,text} = styles
    
    // openTimePicker 메서드를 호출하고 뷰에 시간을 표시하는 버튼을 만듦
    return (
      <View style={container}>
        <Text onPress={this.openTimePicker} style={text}>Open Time Picker</
          Text>
        <Text style={text}>{this.state.time.toString()}</Text>
      </View>
    )
  }
}

styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginBottom: 15,
    fontSize: 20
  }
}
export default TimePicker
