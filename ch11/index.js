
import React from 'react'

// 'react-native' 에서 DrawerLayoutAndroid 가져오기
import {
  AppRegistry,
  DrawerLayoutAndroid,
  Button,
  View
} from 'react-native'

// App 컴포넌트 가져오기(아직 만들기 전)
import App from './app/App'
// Menu 컴포넌트 가져오기(아직 만들기 전)
import Menu from './app/Menu'

import {name as appName} from './app.json';


class mycomponent extends React.Component {
  constructor () {
    super()
    // scene state를 만들고 초기 값으로 ‘Home’을 지정함
    this.state = {
      scene: 'Home'
    }
    
    this.jump = this.jump.bind(this)
    // 드로어를 실행(open)하는 메서드를 만듦
    this.openDrawer = this.openDrawer.bind(this)
  }
  
  openDrawer () {
    this.drawer.openDrawer()
  }
  
  jump (scene) {
    // scene state를 업데이트하는 메서드를 만들고 closeDrawer()를 호출함
    this.setState({
      scene
    })
    this.drawer.closeDrawer()
  }
  
  // DrawerLayoutAndroid 컴포넌트를 구현함
  render () {
    return (
      // 드로어의 참조(reference)를 만들어 컴포넌트의 메서드를 호출하게 함
      // 드로어의 폭에 300을 지정함
      // 드로어의 위치를 왼쪽으로 지정함
      // Menu 컴포넌트인 내비게이션 뷰(navigation view)를 화면에 표시함
      // 메뉴(menu)에 jump 메서드를 연결하고 드로어를 실행(open)하는 데 사용하는 버튼을 만듦
      <DrawerLayoutAndroid
        ref={drawer => this.drawer = drawer}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <Menu onPress={this.jump} />}>
        <View style={{ margin: 15 }}>
          <Button onPress={() => this.openDrawer()} title='Open Drawer' />
        </View>
        
        {/* App 컴포넌트를 자식으로 감싸고(passes) openDrawer, jump, scene을 props로 전달함*/}
        <App
          openDrawer={this.openDrawer}
          jump={this.jump}
          scene={this.state.scene} />
      </DrawerLayoutAndroid>
    )
  }
}
AppRegistry.registerComponent(appName, () => mycomponent)
