
//동일 경로를 기준으로 3개의 컴포넌트 가져오기
import Cities from './Cities/Cities'
import City from './Cities/City'
import AddCity from './AddCity/AddCity'

//테마 색상 가져오기
import { colors } from './theme'

//'react-navigation'에서 내비게이터 가져오기
//'react-navigation v3부터는 createAppContainer 필요
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

const CitiesNav = createStackNavigator({
  Cities: { screen: Cities },
  City: { screen: City }
  }, 
  {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.primary
    },
    headerTintColor: '#fff'
  }
})

const AppTabs = createBottomTabNavigator({
  Cities: { screen: CitiesNav },
  AddCity: { screen: AddCity }
})

//네비게이션 가능한 컴포넌트
//네비게이션 가능한 컴포넌트
const Tabs = createAppContainer(AppTabs)

export default Tabs
