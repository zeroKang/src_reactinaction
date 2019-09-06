//11.5
// import React from 'react'
// import {
//   View,
//   Text
// } from 'react-native'

// class ToolBar extends React.Component {
//   render () {
//     return (
//       <View style={{ flex: 1 }}>
//         <Text>Hello from Toolbar</Text>
//       </View>
//     )
//   }
// }
// export default ToolBar

//11.6

import React from 'react'

// 'react-native'에서 ToolbarAndroid 컴포넌트 가져오기
import {
  ToolbarAndroid,
  View
} from 'react-native'

class Toolbar extends React.Component {

  render () {
    
    // onActionSelected 메서드 만듦.
    // 이 메서드는 index를 전달받아 이 값이 1이면, this.props.openDrawer를 호출함.
    // actions 배열(array of actions)이 있고 각 action은 자신이 눌리면
    // 이 메서드를 호출하고 자신의 인덱스를 전달함
    const onActionSelected = (index) => {
      if (index === 1) {
        this.props.openDrawer()
      }
    }
    
    // ToolbarAndroid를 반환함
    //actions 배열(array of actions)을 전달함.
    //action을 누르면 자신의 배열 인덱스(array index)를 인수로 각 액션을 호출함.
    //  onActionSelected 속성에 onActionSelected 함수를 전달
    return (
      <View style={{ flex: 1 }}>
        <ToolbarAndroid
          subtitleColor='white'
          titleColor='white'
          style={{ height: 56, backgroundColor: '#52998c' }}
          title='React Native in Action'
          subtitle='ToolbarAndroid'
          actions={[ { title: 'Options', show: 'always' },
            { title: 'Menu', show: 'always' } ]}
          onActionSelected={onActionSelected}
        />
      </View>
    )
  }
}

export default Toolbar
