import {StyleSheet} from 'react-native';

//밝은 색과 어두운 색 테마에 사용될 색상을 정의하는 상수
export const Colors = {
    dark: 'black',
    light: 'white'
};

//기본 컨테이너(base container)의 스타일을 저장할 자바스크립트 객체
const baseContainerStyles = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
};

//기본 상자(base box) 스타일을 저장할 자바스크립트 개체
const baseBoxStyles = {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    height: 150,
    width: 150
};

//밝은 색 테마에 사용할 스타일시트 만들기
const lightStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.light
    },
    box: {
        ...baseBoxStyles,
        borderColor: Colors.dark
    }
});

//어두운 색 테마에 사용할 스타일시트 만들기
const darkStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.dark
    },
    box: {
        ...baseBoxStyles,
        borderColor: Colors.light
    }
});

//Boolean 값에 따라 해당하는 테마를 반환하는 함수
export default function getStyleSheet(useDarkTheme){
    return useDarkTheme ? darkStyleSheet : lightStyleSheet;
}
