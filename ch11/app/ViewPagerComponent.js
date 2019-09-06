import React, { Component } from 'react'

// 'react-native'에서 ViewPagerAndroid 가져오기
import {
  View,
  Text
} from 'react-native'

import ViewPager from "@react-native-community/viewpager"

let styles

class ViewPagerComponent extends Component {
  render () {
    const {
      pageStyle,
      page1Style,
      page2Style,
      textStyle
    } = styles
    
    // 두 개의 자식 뷰를 갖는 ViewPagerAndroid를 반환함. 하나는 오렌지색 배경이고 다른 하나는 빨강
    return (
      <ViewPager
        style={{ flex: 1 }}
        initialPage={0}>
        <View style={[ pageStyle, page1Style ]}>
          <Text style={textStyle}>First page</Text>
        </View>
        <View style={[ pageStyle, page2Style ]}>
          <Text style={textStyle}>Second page</Text>
        </View>
      </ViewPager>
    )
  }
}
styles = {
  pageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  page1Style: {
    backgroundColor: 'orange'
  },
  page2Style: {
    backgroundColor: 'red'
  },
  textStyle: {
    fontSize: 18,
    color: 'white'
  }
}
export default ViewPagerComponent
