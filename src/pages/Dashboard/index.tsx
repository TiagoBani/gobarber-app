import React from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { singOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button onPress={singOut}>Sair</Button>
    </View>
  );
};

export default Dashboard;
