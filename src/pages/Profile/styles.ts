import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;

  padding: 0 30px ${Platform.OS === 'android' ? 0 : 40}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';

  margin: 24px 0px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: ${Platform.OS === 'android' ? 140 : 40}px;
  /* position: absolute;
  left: 24px;
  top: 64px; */
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;

  align-self: center;
  margin-top: ${Platform.OS === 'android' ? -80 : 0}px;
`;
