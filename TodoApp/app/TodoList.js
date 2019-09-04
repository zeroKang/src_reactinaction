import React from 'react'
import { View } from 'react-native'
import Todo from './Todo'

// const TodoList = ({ todos }) => {
// 	todos = todos.map((todo, i) => {
// 		return (
// 			<Todo
// 				key={todo.todoIndex}
// 				todo={todo} />
// 		)
// 	})
// 	return (
// 		<View>
// 			{todos}
// 		</View>
// 	)
// }

//3.20


const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
	todos = todos.map((todo, i) => {
		return (
			<Todo
				deleteTodo={deleteTodo}
				toggleComplete={toggleComplete}
				key={i}
				todo={todo} />
			)
    })

    return (
		<View>
			{todos}
		</View>
	)
}


export default TodoList
