
//8.6 

import React from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native'

//'react-redux'에서 connect 가져오기
import {connect} from 'react-redux'

class Books extends React.Component {
  
  render() {
    
    // connect 함수가 books 배열을 반환하므로(이 예제의 하단 부분 참조)
    // 이 배열을 props로 참조할 수 있음.
    const {books} = this.props
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Books</Text>
        <ScrollView
          keyboardShouldPersistTaps='always'
          style={styles.booksContainer}
        >
          {/* 배열을 매핑해서 각 도서의 이름과 저자를 표시함 */}
          {
            books.map((book, index) => (
              <View style={styles.book} key={index}>
                <Text style={styles.name}>{book.name}</Text>
                <Text style={styles.author}>{book.author}</Text>
              </View>
            ))
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  booksContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flex: 1
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center'
  },
  book: {
    padding: 20
  },
  name: {
    fontSize: 18
  },
  author: {
    fontSize: 14,
    color: '#999'
  }
})


// 리덕스의 상태 객체를 인수로 전달받고 하나의 키를 포함한 객체를 반환함.
// 이 키는 books 배열을 포함하고 있음
const mapStateToProps = (state) => ({
  books: state.bookReducer.books
})

//connect 함수의 결과를 외부에 export
export default connect(mapStateToProps)(Books)
