import React, { Component } from 'react'

//'react-native'에서 컴포넌트를 가져옴
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ActivityIndicator,
  FlatList,
  Modal,
  Picker
} from 'react-native'

// lodash 유틸리티 라이브러리 가져옴
import _ from 'lodash' 

// App.js에서 사용된 Container 컴포넌트 가져옴. 똑 같은 스타일을 적용하기 때문임
import Container from './Container'
// 아직 만들기 전인 HomeWorld 컴포넌트를 가져옴. 
//이 컴포넌트는 ‘View Homeworld’를 누르면, 캐릭터의 정보를 표시함
import HomeWorld from './Homeworld'


//12.6
// export default class People extends Component {

//     // static 한 navigationOptions 만들기
//    static navigationOptions = {
//     headerTitle: 'People',
  
//     // headerStyle은 헤더의 제목에 사용되는 style 객체임
//     headerStyle: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#ffe81f',
//     backgroundColor: 'black'
//     },
  
//     headerTintColor: '#ffe81f',
//     // 버튼을 눌렀을 때, “material ripple” 애니메이션이 적용되도록 color를 지정함. 
//     //안드로이드 5.0 이상만 지원함
//     pressColorAndroid: 'white'
//     }
//    }



export default class People extends Component {

    static navigationOptions = {
      headerTitle: 'People',
      headerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#ffe81f',
        backgroundColor: 'black'
      },
      pressColorAndroid: 'white',
      headerTintColor: '#ffe81f'
    }
  
  
    state = {
      data: [],
      loading: true,
      modalVisible: false,
      gender: 'all',
      pickerVisible: false
    }
  
    componentDidMount() {
      fetch('https://swapi.co/api/people/')
        .then(res => res.json())
        .then(json => this.setState({ data: json.results, loading: false }))
        .catch((err) => console.log('err:', err))
    }
  
  
    //12.8 
    // FlatList 컴포넌트에 전달되는 renderItem 메서드
    renderItem = ({ item }) => {
      return (
        <View style={styles.itemContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.info}>Height: {item.height}</Text>
          <Text style={styles.info}>Birth Year: {item.birth_year}</Text>
          <Text style={styles.info}>Gender: {item.gender}</Text>
          <TouchableHighlight style={styles.button} onPress={() => this.openHomeWorld(item.homeworld)}>
            <Text style={styles.info}>View Homeworld</Text>
          </TouchableHighlight>
        </View>
      )
    }
  
    // state의 url과 modalVisible를 업데이트해서 HomeWorld 모달을 실행함
    openHomeWorld = (url) => {
      this.setState({
        url,
        modalVisible: true
      })
    }
  
    // state의 modalVisible의 값을 false로 지정해서 모달을 종료함
    closeModal = () => {
      this.setState({ modalVisible: false })
    }
  
    // pickerVisible의 값을 토글함
    togglePicker = () => {
      this.setState({ pickerVisible: !this.state.pickerVisible })
    }
  
    // 전달된 gender의 값으로 gender state의 필터 값을 업데이트 함
    //전달된 값은 render 메서드에서 데이터 필터링을 위해 사용됨
    filter = (gender) => {
      this.setState({ gender })
    }
  
    //12.9
    render() {
      //state의 배열을 비구조화해서 쉽게 참조할 수 있게 함
      let { data } = this.state
  
      //filter의 값이 all인지 확인함. all이면 이 함수를 넘기고(skip), 
      //all이 아니면 캐릭터의 성별과 state의 gender 값을 비교해서 데이터를 필터링함
      if (this.state.gender !== 'all') {
        data = data.filter(f => f.gender === this.state.gender)
      }
  
      return (
        <Container>
  
          {/* this.state.pickerVisible의 값에 따라 필터를 열고 닫는 버튼을 만듦 */}
          <TouchableHighlight 
              style={styles.pickerToggleContainer}
              onPress={this.togglePicker}>
            <Text style={styles.pickerToggle}>
              {this.state.pickerVisible ? 'Close Filter' : 'Open Filter'}
            </Text>
          </TouchableHighlight>
  
          {/* this.state.loading를 체크해서 데이터 로딩 상태를 확인함. 
          loading의 값이 true면 ActivityIndicator를 표시해서 데이터를 로딩 중임을 알리고, 
          false면 FlatList를 렌더링하고 data, this.renderItem, keyExtractor를 전달함 */}
          {this.state.loading ? <ActivityIndicator color='#ffe81f' /> : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.name}
            renderItem={this.renderItem}
          />
          )}
  
          
          <Modal
            onRequestClose={() => console.log('onrequest close called')}
            animationType="slide"
            visible={this.state.modalVisible}>
            <HomeWorld closeModal={this.closeModal} url={this.state.url} />
          </Modal>
  
        {this.state.pickerVisible && (
            <View style={styles.pickerContainer}>
            <Picker
              style={{ backgroundColor: '#ffe81f' }}
              selectedValue={this.state.gender}
              onValueChange={(item) => this.filter(item)}>
              <Picker.Item itemStyle={{ color: 'yellow' }}
              label="All"
              value="all" />
            <Picker.Item label="Males" value="male" />
            <Picker.Item label="Females" value="female" />
            <Picker.Item label="Other" value="n/a" />
            </Picker>
            </View>
        )}
        </Container>
      );
    }
  
    // render() {
    //   let { data } = this.state
    //   if (this.state.gender !== 'all') {
    //     data = data.filter(f => f.gender === this.state.gender)
    //   }
  
    //   return (
    //     <Container>
    //       <TouchableHighlight style={styles.pickerToggleContainer} onPress={this.togglePicker}>
    //         <Text style={styles.pickerToggle}>{this.state.pickerVisible ? 'Close Filter' : 'Open Filter'}</Text>
    //       </TouchableHighlight>
    //       {
    //         this.state.loading ? <ActivityIndicator color='#ffe81f' /> : (
    //           <FlatList
    //             data={data}
    //             keyExtractor={(item) => item.name}
    //             renderItem={this.renderItem}
    //           />
    //         )
    //       }
    //       <Modal
    //         onRequestClose={() => console.log('onrequest close called')}
    //         animationType="slide"
    //         transparent={false}
    //         visible={this.state.modalVisible}>
    //         <HomeWorld closeModal={this.closeModal} url={this.state.url} />
    //       </Modal>
    //       {
    //         this.state.pickerVisible && (
    //           <View style={styles.pickerContainer}>
    //             <Picker
    //               style={{ backgroundColor: '#ffe81f' }}
    //               selectedValue={this.state.gender}
    //               onValueChange={(item) => this.filter(item)}>
  
    //               <Picker.Item itemStyle={{ color: 'yellow' }} label="All" value="all" />
    //               <Picker.Item label="Males" value="male" />
    //               <Picker.Item label="Females" value="female" />
    //               <Picker.Item label="Other" value="n/a" />
    //             </Picker>
    //           </View>
    //         )
    //       }
    //     </Container>
    //   );
    // }
  }
  
  
  const styles = StyleSheet.create({
    pickerToggleContainer: {
      padding: 25,
      justifyContent: 'center',
      alignItems: 'center'
    },
    pickerToggle: {
      color: '#ffe81f'
    },
    pickerContainer: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0
    },
    itemContainer: {
      padding: 15,
      borderBottomWidth: 1, borderBottomColor: '#ffe81f'
    },
    name: {
      color: '#ffe81f',
      fontSize: 18
    },
    info: {
      color: '#ffe81f',
      fontSize: 14,
      marginTop: 5
    }
  });
  