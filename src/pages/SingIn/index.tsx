import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, KeyboardAvoidingView, Platform, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import logoImg from '../../assets/logo.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  Title,
  ForgotPassowrd,
  ForgotPassowrdText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SingIn: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />

            <View>
              <Title>Faça seu logon</Title>
            </View>

            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />
            <Button onPress={() => {}}>Entrar</Button>

            <ForgotPassowrd onPress={() => {}}>
              <ForgotPassowrdText>Esqueci minha senha.</ForgotPassowrdText>
            </ForgotPassowrd>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccountButton onPress={() => navigate('SingUp')}>
        <Icon name="log-in" size={20} color="#ff9900" />
        <CreateAccountButtonText>Criar uma conta.</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SingIn;
