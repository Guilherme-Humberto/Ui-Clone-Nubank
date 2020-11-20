import styled from 'styled-components/native'
import { StyleSheet, Animated } from 'react-native'

export const Container = styled(Animated.ScrollView)`
    margin: 0 30px;
`
export const Code = styled.View`
    background: #fff;
    width: 95px;
`
export const CodeContainer = styled.View`
    justify-content: center;
    align-items: center;
`
export const Infos = styled.Text`
    font-size: 17px;
    margin-top: 10px;
    color: #fff;
`
export const InfoBold = styled.Text`
    font-size: 17px;
    margin-top: 10px;
    color: #fff;
    font-weight: bold;
`
export const Nav = styled.View`
   margin-top: 30px;
   border-top-width: ${StyleSheet.hairlineWidth}px;
   border-top-color: rgba(255, 255, 255, 0.8);
`
export const NavItem = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 12px 0;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
   border-bottom-color: rgba(255, 255, 255, 0.8);
`
export const NavPerfil = styled.View`
    flex-direction: column;
`
export const NavTextPerfil = styled.Text`
    font-size: 11px;
    color: #ccc;
    margin-left: 20px;
`
export const NavText = styled.Text`
    font-size: 15px;
    color: #fff;
    margin-left: 20px;
`
export const SignOutButton = styled.TouchableOpacity`
    font-size: 15px;
    color: #fff;
    margin-left: 20px;
`
export const SignOutButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
`
