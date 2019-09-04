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
// 					<Heading/>
// 				</ScrollView>
// 			</View>
// 		)
// 	}
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#f5f5f5'
// 	},
// 	content: {
// 		flex: 1,
// 		paddingTop: 60
// 	}
// })

// export default App


//3.8 

import Input from './Input'

// class App extends Component {

//     constructor() {
// 		super()
// 		this.state = {
// 			inputValue: '',
// 			todos: [],
// 			type: 'All'
// 		}
//     }
    
//     inputChange(inputValue) { 
//         console.log(' Input Value: ' , inputValue) 
//         this.setState({ inputValue }) 
//     }
    
//     render() {

//         const { inputValue } = this.state
    
//         return (
//           <View style={styles.container}>
//             <ScrollView keyboardShouldPersistTaps='always'
//                   style={styles.content}>   
//               <Heading /> 
//               <Input
//                 inputValue={inputValue} 
//                 inputChange={(text) => this.inputChange(text)} />     
//             </ScrollView>
//           </View>
//         )
//       }
    
// }



//3.10  - 3.11 

// let todoIndex = 0

// class App extends Component {

//     constructor() {
// 		super()
// 		this.state = {
// 			inputValue: '',
// 			todos: [],
// 			type: 'All'
// 		}
//     }
    
//     inputChange(inputValue) { 
//         console.log(' Input Value: ' , inputValue) 
//         this.setState({ inputValue }) 
//     }

//     submitTodo () {   
//         if (this.state.inputValue.match(/^\s*$/)) {
//           return
//         }
//         const todo = {
//           title: this.state.inputValue,
//           todoIndex,
//           complete: false
//         }
//         todoIndex++ 
//         const todos = [...this.state.todos, todo] 
//         this.setState({ todos, inputValue: '' }, () => { 
//             console.log('State: ', this.state) 
//         })
//   }
  
    
//     render() {

//         const { inputValue } = this.state
    
//         return (
//           <View style={styles.container}>
//             <ScrollView keyboardShouldPersistTaps='always'
//                   style={styles.content}>   
//               <Heading /> 
//               <Input
//                 inputValue={inputValue} 
//                 inputChange={(text) => this.inputChange(text)} />     
//             </ScrollView>
//           </View>
//         )
//       }
    
// }



//3.13
import Button from './Button' 

// let todoIndex = 0

// class App extends Component {

//     constructor() {
// 		super()
// 		this.state = {
// 			inputValue: '',
// 			todos: [],
// 			type: 'All'
//         }
//         this.submitTodo = this.submitTodo.bind(this) 
//     }
    
//     inputChange(inputValue) { 
//         console.log(' Input Value: ' , inputValue) 
//         this.setState({ inputValue }) 
//     }

//     submitTodo () {   
//         if (this.state.inputValue.match(/^\s*$/)) {
//           return
//         }
//         const todo = {
//           title: this.state.inputValue,
//           todoIndex,
//           complete: false
//         }
//         todoIndex++ 
//         const todos = [...this.state.todos, todo] 
//         this.setState({ todos, inputValue: '' }, () => { 
//             console.log('State: ', this.state) 
//         })
//   }
  
    
//     render() {

//         const { inputValue } = this.state
    
//         return (
//           <View style={styles.container}>
//             <ScrollView keyboardShouldPersistTaps='always'
//                   style={styles.content}>   
//               <Heading /> 
//               <Input
//                 inputValue={inputValue} 
//                 inputChange={(text) => this.inputChange(text)} />     
//               <Button submitTodo={this.submitTodo}/> 
//             </ScrollView>
//           </View>
//         )
//       }    
// }


//3.16
import TodoList from './TodoList'

let todoIndex = 0

class App extends Component {

    constructor() {
		super()
		this.state = {
			inputValue: '',
			todos: [],
			type: 'All'
        }
        this.submitTodo = this.submitTodo.bind(this) 
    }
    
    inputChange(inputValue) { 
        console.log(' Input Value: ' , inputValue) 
        this.setState({ inputValue }) 
    }

    submitTodo () {   
        if (this.state.inputValue.match(/^\s*$/)) {
          return
        }
        const todo = {
          title: this.state.inputValue,
          todoIndex,
          complete: false
        }
        todoIndex++ 
        const todos = [...this.state.todos, todo] 
        this.setState({ todos, inputValue: '' }, () => { 
            console.log('State: ', this.state) 
        })
    }
  
    
    render() {

        const { inputValue, todos } = this.state
        
        return (
            <View style={styles.container}>
                <ScrollView
                    keyboardShouldPersistTaps='always'
                    style={styles.content}>
                    <Heading />
                    <Input inputValue={inputValue} inputChange={(text) => this.
                inputChange(text)} />
                    <TodoList todos={todos} />
                    <Button submitTodo={this.submitTodo} />
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
