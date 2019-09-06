// import React from 'react'
// import Home from './Home'
// import Toolbar from './Toolbar'

// function getScene (scene) {
//   switch (scene) {
//     case 'Home':
//       return Home
//     case 'Toolbar':
//       return Toolbar
//     default:
//       return Home
//   }
// }

// const App = (props) => {
//   const Scene = getScene(props.scene)
  
//   return (
//     <Scene openDrawer={props.openDrawer} jump={props.jump} />
//   )
// }
// export default App


//11.8 

import React from 'react'
import Home from './Home'
import Toolbar from './Toolbar'
import ViewPagerComponent from './ViewPagerComponent'

function getScene (scene) {
  switch (scene) {
    case 'Home':
      return Home
    case 'Toolbar':
      return Toolbar
    case 'ViewPager':
      return ViewPagerComponent
    default:
      return Home
  }
}

const App = (props) => {
  const Scene = getScene(props.scene)
  return (
    <Scene openDrawer={props.openDrawer} jump={props.jump} />
  )
}

export default App
