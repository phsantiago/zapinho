/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styled from 'styled-components';
import whatsBg from './assets/background.png';

const Wrapper = styled.View`
  flex: 1;
`
const BackgroundColor = styled.View`
  flex: 1;
  background-color: #e5ddd5;
  padding: 100px 20px; 
`// FIXME: remover esse paddin daqui

const ExpandToFitBounds = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const BackgroundImage = styled.Image`
  flex: 1;
  height: 100%;
  resizeMode: cover;
  opacity: 0.2;
`

const ZapBackground = ({ children }) => (
  <BackgroundColor>
    <ExpandToFitBounds>
      <BackgroundImage source={whatsBg} />
    </ExpandToFitBounds>
    { children }
  </BackgroundColor>
)

const ZipZopt = () => (
  <Wrapper>
    <ZapBackground>
      <Chat>
        <Message sent>
          <Text>o pato sem pata fica</Text>
        </Message>
        <Message received>
          <Text>manco?</Text>
        </Message>
        <Message sent>
          <Text>solteiro</Text>
        </Message>
      </Chat>
    </ZapBackground>
  </Wrapper>
);

const MessageCard = styled.View`
  padding: 7px 9px;
  margin: 10px;
  border-radius: 7px;
  elevation: 1;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.2;
  shadow-radius: 0px;
`

const Chat = styled.ScrollView`
`

const MessageReceived = styled(MessageCard)`
  background-color: #ffffff;
  align-self: flex-start;
  padding-right: 40px;
`

const MessageSent = styled(MessageCard)`
  background-color: #dcf8c6;
  align-self: flex-end;
`

const Message = ({ sent, received, children }) => (
  <View>
    {sent && <MessageSent>{ children }</MessageSent>}
    {received && <MessageReceived>{ children }</MessageReceived>}
  </View>
)

export default ZipZopt;
