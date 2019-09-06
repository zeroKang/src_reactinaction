
//12.1
import React, { Component } from 'react';
import {
 StyleSheet,
 Text,
 FlatList,
 TouchableHighlight
} from 'react-native';

import { createAppContainer } from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'

import Container from './Container'

import People from './People'

const links = [
  { title: 'People' },
  { title: 'Films' },
  { title: 'StarShips' },
  { title: 'Vehicles' },
  { title: 'Species' },
  { title: 'Planets' }
]



class StarWars extends Component {
  static navigationOptions = {
    headerTitle: <Text
      style={{
        fontSize: 34, color: 'rgb(255,232,31)'
      }}
    >Star Wars</Text>,
    headerStyle: { backgroundColor: "black", height: 110 }
  }
  navigate = (link) => {
    const { navigate } = this.props.navigation
    navigate(link)
  }
  renderItem = ({ item, index }) => {
    return (
      <TouchableHighlight
        onPress={() => this.navigate(item.title)}
        style={[styles.item, { borderTopWidth: index === 0 ? 1 : null }]}>
        <Text style={styles.text}>{item.title}</Text>
      </TouchableHighlight>
    )
  }
  render() {
    return (
      <Container>
        <FlatList
          data={links}
          keyExtractor={(item) => item.title}
          renderItem={this.renderItem}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    justifyContent: 'center',
    borderColor: 'rgba(255,232,31, .2)',
    borderBottomWidth: 1
  },
  text: {
    color: '#ffe81f',
    fontSize: 18
  }
});

// createStackNavigator의 첫 번째 인수는 라우트를 포함한 객체인 route 설정
// 키를 라우트 이름(route name)으로 사용하며 키에 전달된 값은 해당 라우트(named route)에 사용되는 컴포넌트를 지정함 
const App = createStackNavigator({
  //자동으로 첫 번째 키를 첫 번째 라우트로 렌더링함. 
  //여기서는 예제 12.4에서 만들 StarWars 컴포넌트를 첫 번째 라우트로 전달함
  Home: {
    screen: StarWars,
  },

  //앱에서 사용하는 또 다른 라우트는 People임. 
  //예제 12.5에서 만들 People 컴포넌트를 전달함
  People: {
    screen: People
  }
});




export default createAppContainer(App)

