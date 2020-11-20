import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Animated } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'

import Header from '../../components/Header/index'
import Menu from '../../components/Menu'
import Tabs from '../../components/Tabs'
import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles'

const Main: React.FC = () => {
  let offset = 0
  const translateY = new Animated.Value(0)

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY
        }
      }
    ],
    { useNativeDriver: true }
  )
  function onHandleStateChanged (event: any) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false
      const { translationY } = event.nativeEvent

      // eslint-disable-next-line no-unused-vars
      offset += translationY

      if (translationY >= 100) {
        // eslint-disable-next-line no-unused-vars
        opened = true
      } else {
        translateY.setValue(offset)
        translateY.setOffset(0)
        offset = 0
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true
      }).start(() => {
        offset = opened ? 380 : 0
        translateY.setOffset(offset)
        translateY.setValue(0)
      })
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY}/>

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandleStateChanged}
        >
        <Card
          style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-200, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp'
              })
            }]
          }}
        >
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666"/>
            <Icon name="visibility-off" size={28} color="#666"/>
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 17.000</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 20,00 recebida de Guilherme Humberto hoje às 06:00h
            </Annotation>
          </CardFooter>
        </Card>
        </PanGestureHandler>

      </Content>
      <Tabs translateY={translateY}/>
    </Container>
  )
}

export default Main
