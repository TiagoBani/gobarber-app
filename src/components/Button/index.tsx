import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ContainerRow, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <ContainerRow>
        <ButtonText>{children}</ButtonText>
      </ContainerRow>
    </Container>
  );
};

export default Button;
