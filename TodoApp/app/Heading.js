import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


//3.5

const Heading = () => (
	<View style={styles.header}>
		<Text style={styles.headerText}>
			todos
		</Text>
	</View>
)

const styles = StyleSheet.create({
	header: {
		marginTop: 80
	},
	headerText: {
		textAlign: 'center',
		fontSize: 72,
		color: 'rgba(175, 47, 47, 0.25)',
		fontWeight: '100'
	}
})

export default Heading
