import React from 'react';
import { StatusBar, View } from 'react-native';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#312e38' }} />
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    </>
  );
};

export default App;
