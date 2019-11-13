import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform } from 'react-native';
import * as Colors from '@pxblue/colors'
import { Header, wrapIcon } from '@pxblue/react-native-components';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { ListItem } from 'react-native-elements';
import { ThemeProvider } from '@pxblue/react-native-components';
import * as PXBThemes from '@pxblue/themes/react-native';
import * as Font from 'expo-font';

import sampleData from './data';

const MenuIcon = wrapIcon({ IconClass: MatIcon, name: 'menu' });

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: '', results: sampleData, data: sampleData, fontLoaded: false };
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
  onSearchChange = (query) => this.setState({ query }, this.onSearch)
  onSearch = () => {
    const query = this.state.query.toLowerCase().trim();
    const results = [];
    this.state.data.map((item) => {
      if (item.president.toLowerCase().trim().indexOf(query) >= 0 ||
        item.party.toLowerCase().trim().indexOf(query) >= 0 ||
        item.took_office.toLowerCase().trim().indexOf(query) >= 0
      ) {
        results.push(item);
      }
    });
    this.setState({ results });
  }

  render() {
    if (!this.state.fontLoaded) {
      return null;
    }
    return (
      <ThemeProvider theme={PXBThemes.blue}>
        <View style={styles.container}>
          <Header
            title={'President'}
            subtitle={'Leader of the Free world'}
            navigation={{ icon: MenuIcon, onPress: () => { } }}
            searchableConfig={{
              placeholder: 'Search',
              autoFocus: true,
              onChangeText: (q) => this.onSearchChange(q)
            }}
          />
          {
            this.state.results.length === 0
              ? (
                <ListItem
                  title="0 results"
                  subtitle="No matching presidents"
                  titleStyle={{ marginLeft: 16 }}
                  subtitleStyle={{ color: Colors.gray[500], marginLeft: 16 }}
                  leftIcon={{ name: 'info', color: Colors.gray[500], iconStyle: { marginLeft: 3 } }}
                />
              )
              : (
                <FlatList
                  data={this.state.results}
                  keyExtractor={(item, index) => `${index}`}
                  renderItem={({ item }) => (
                    <ListItem
                      title={item.president}
                      subtitle={(<View style={{ marginLeft: 16 }}>
                        <Text style={{ color: Colors.gray[500] }}>{item.party}</Text>
                        <Text style={{ color: Colors.gray[500] }}>{item.took_office}</Text>
                      </View>)}
                      titleStyle={{ marginLeft: 16 }}
                      leftIcon={{ name: 'person', color: Colors.gray[500], iconStyle: { marginLeft: 3 } }}
                    />
                  )}
                />
              )
          }


        </View>
      </ThemeProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white[50],
    marginTop: Platform.OS === 'android' ? 24 : 0
  },
});

export default App;