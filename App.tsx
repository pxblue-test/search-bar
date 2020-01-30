import React from 'react';
import { ThemeProvider } from '@pxblue/react-native-components';
import List from './List';
import { ReactNativeThemes } from '@pxblue/themes';

import * as Font from 'expo-font';

//@ts-ignore
import extraBoldFont from './assets/fonts/OpenSans-ExtraBold.ttf';
//@ts-ignore
import boldFont from './assets/fonts/OpenSans-Bold.ttf';
//@ts-ignore
import semiBoldFont from './assets/fonts/OpenSans-SemiBold.ttf';
//@ts-ignore
import regularFont from './assets/fonts/OpenSans-Regular.ttf';
//@ts-ignore
import lightFont from './assets/fonts/OpenSans-Light.ttf';
//@ts-ignore
import MaterialIcons from '@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialIcons.ttf';

type TProps = {};

type TState = {
    fontLoaded: boolean;
};

class App extends React.Component<TProps, TState> {
    constructor(props: TProps) {
        super(props);
        this.state = { fontLoaded: false };
    }
    async componentDidMount(): Promise<void> {
        await Font.loadAsync({
            'OpenSans-ExtraBold': extraBoldFont,
            'OpenSans-Bold': boldFont,
            'OpenSans-SemiBold': semiBoldFont,
            'OpenSans-Regular': regularFont,
            'OpenSans-Light': lightFont,
            'Material Icons': MaterialIcons,
        });

        this.setState({ fontLoaded: true });
    }

    render(): JSX.Element | null {
        if (!this.state.fontLoaded) {
            return null;
        }
        return (
            <ThemeProvider theme={ReactNativeThemes.blue}>
                <List />
            </ThemeProvider>
        );
    }
}

export default App;
