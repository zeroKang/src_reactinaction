import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'


//3.3 - 3.4 
// class App extends Component {

//     constructor() {
// 		super()
// 		this.state = {
// 			inputValue: '',
// 			todos: [],
// 			type: 'All'
// 		}
// 	}

// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				<ScrollView keyboardShouldPersistTaps='always'
// 							style={styles.content}>
					
// 				</ScrollView>
// 			</View>
// 		)
// 	}
// }

//3.6 

import Heading from './Heading'

class App extends Component {

    constructor() {
		super()
		this.state = {
			inputValue: '',
			todos: [],
			type: 'All'
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView keyboardShouldPersistTaps='always'
							style={styles.content}>
					<Heading/>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5'
	},
	content: {
		flex: 1,
		paddingTop: 60
	}
})

export default App
