/* eslint-disable react/prop-types */
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/Feather'
import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  NavPerfil,
  NavTextPerfil,
  SignOutButton,
  SignOutButtonText,
  CodeContainer,
  Infos,
  InfoBold
} from './styles'

interface Props {
  translateY: any
}

const Menu: React.FC<Props> = ({ translateY }) => {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1]
        })
      }}
    >
      <CodeContainer>
        <Code>
          <Icon2 name="qrcode" size={95} color="#8B10ae"/>
        </Code>
        <Infos>Agência: <InfoBold>001</InfoBold></Infos>
        <Infos>Conta: <InfoBold>488872-2</InfoBold></Infos>
      </CodeContainer>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#fff"/>
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon3 name="user" size={20} color="#fff"/>
          <NavPerfil>
            <NavText>Perfil</NavText>
            <NavTextPerfil>Nome de preferência, telefone e email</NavTextPerfil>
          </NavPerfil>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#fff"/>
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#fff"/>
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText></SignOutButtonText>
      </SignOutButton>
    </Container>
  )
}

export default Menu
