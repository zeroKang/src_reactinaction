import React, { Component } from 'react'

// 'react-native'에서 DatePickerAndroid 가져오기
import { DatePickerAndroid, View, Text } from 'react-native'

let styles

class DatePicker extends Component {
  constructor() {
    super()
    // state를 만들고 초기 값으로 new Date()를 지정함
    this.state = {
      date: new Date()
    }
    this.openDatePicker = this.openDatePicker.bind(this)
  }
  
  // 버튼을 누르면 실행될 openDatePicker 메서드
  // DatePickerAndroid.open은 promise를 반환함.
  // promise는 선택된 날짜(day)/월(month)/연도(year)와 선택된 액션(action)을 갖는 객체를 포함함
  openDatePicker () {
    DatePickerAndroid.open({
        date: this.state.date
      })
      .then((date) => {
        const { year, month, day, action } = date
        
        // 날짜를 선택하면, action이 dateSetAction이 됨.
        // 모달 대화 상자(modal)가 화면에서 사라지면(dismiss), action은 dismissedAction이 됨
        if (action === 'dateSetAction') {
          this.setState({ date: new Date(year, month, day) })
        }
      })
  }
  
  
  render() {
    
    const { container, text} = styles
    
    // openDatePicker 메서드를 호출하고 선택된 날짜를 뷰에 표시하는 버튼 만들기
    return (
      <View style={container}>
        <Text onPress={this.openDatePicker} style={text}>
          Open Datepicker
        </Text>
        <Text style={text}>{this.state.date.toString()}</Text>
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

export default DatePicker
