import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ContainerRow, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  containerStyle?: {};
}

const Button: React.FC<ButtonProps> = ({
  children,
  containerStyle,
  ...rest
}) => {
  return (
    <Container style={containerStyle} {...rest}>
      <ContainerRow>
        <ButtonText>{children}</ButtonText>
      </ContainerRow>
    </Container>
  );
};

export default Button;
