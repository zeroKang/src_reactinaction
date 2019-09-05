import { StyleSheet } from 'react-native'

/*styles 상수에 스타일 생성 */
const styles = StyleSheet.create({
    /* container 스타일을 생성하고 컴포넌트에서는 styles.container로 참조 */
    container: {
        marginTop: 150,
        backgroundColor: '#ededed',
        flexWrap: 'wrap'
    }
})

/* 두 번째 스타일을 생성하고 button 상수로 저장 */
const buttons = StyleSheet.create({
    
    /* primary button을 위한 스타일 생성 컴포넌트에서는 buttons.primary 로 참조 */
    primary: {
        flex: 1,
        height: 70,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20
    }
})

/* styles와 buttons 모두 export 해서 외부에서 사용하도록 */
export { styles, buttons }
