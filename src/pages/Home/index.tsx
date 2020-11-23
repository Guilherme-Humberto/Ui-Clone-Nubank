import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import {
  Logo,
  ButtonHeader,
  Container,
  Header,
  TextButtonHeader,
  Content,
  TitleHome,
  ButtonHome,
  TextButtonHome
} from './styles'

const Home: React.FC = ({ navigation }) => {
  return (
      <Container source={require('../../assets/foto_home.webp')}>
          <Header>
              <View>
                <Logo source={require('../../assets/Logo.png')}/>
              </View>

              <View>
                  <ButtonHeader>
                      <TextButtonHeader>Brasil</TextButtonHeader>
                      <Icon name="down" color="#fff" size={20}/>
                  </ButtonHeader>
              </View>
          </Header>

          <Content>
            <TitleHome>Um mundo financeiro sem complexidades</TitleHome>
            <ButtonHome onPress={() => navigation.navigate("Main")}>
                <TextButtonHome>Começar</TextButtonHome>
            </ButtonHome>
          </Content>
      </Container>
  )
}

export default Home
