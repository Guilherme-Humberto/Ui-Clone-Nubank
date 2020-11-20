import styled from 'styled-components/native'

export const Container = styled.ImageBackground`
    flex: 1;
    justify-content: center;
    align-items: center;
`
export const Logo = styled.Image`
    height: 60px;
    width: 140px;
    padding: 0;
`
export const Header = styled.View`
    position: absolute;
    z-index: 1;
    top: 7%;
    width: 90%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
`
export const ButtonHeader = styled.TouchableOpacity`
    width: 100px;
    padding: 10px 15px;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 25px;
    background: #6600A2;
    align-items: center;
`
export const TextButtonHeader = styled.Text`
    font-size: 16px;
    color: #fff;
`
export const Content = styled.View`
    position: absolute;
    z-index: 1;
    bottom: 7%;
    width: 90%;
    align-items: center;
`

export const TitleHome = styled.Text`
    font-size: 40px;
    letter-spacing: -1px;
    line-height: 38px;
    color: #fff;
`

export const ButtonHome = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    margin-top: 20px;
    background: #eee;
    padding: 10px 20px;
    border-radius: 3px;
`

export const TextButtonHome = styled.Text`
    font-size: 20px;
    color: #6600A2;
    letter-spacing: -1px;
    font-weight: bold;
`
