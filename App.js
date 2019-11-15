import React from 'react';
import { ThemeProvider } from '@pxblue/react-native-components';
import List from './List';
import { ReactNativeThemes } from '@pxblue/themes';

import * as Font from 'expo-font';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fontLoaded: false };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'OpenSans-Extrabold': require('./assets/fonts/OpenSans-ExtraBold.ttf'),
      'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
      'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return null;
    }
    return (
      <ThemeProvider theme={ReactNativeThemes.blue}>
        <List/>
      </ThemeProvider>
    )
  }
}

export default App;