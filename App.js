import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import * as Colors from '@pxblue/colors'
import { Header, wrapIcon } from '@pxblue/react-native-components';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { ListItem } from 'react-native-elements';

import sampleData from './data';
import AnimatedSearchBar from './AnimatedSearchBar';

const MenuIcon = wrapIcon({ IconClass: MatIcon, name: 'menu' });

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSearch: false, query: '', results: sampleData, data: sampleData };
  }

  onSearchToggle = () => this.setState((prevState) => ({ showSearch: !prevState.showSearch }));
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
  onClear = () => {
    this.setState({ results: this.state.data, query: '', showSearch: false });
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          title={'President'}
          subtitle={'Leader of the Free world'}
          backgroundColor={Colors.blue[500]}
          navigation={{ icon: MenuIcon, onPress: () => { } }}
          searchableConfig={{
            placeholder: 'Search',
            onChangeText: (q) => this.onSearchChange(q)
          }}
        />
        <AnimatedSearchBar
          show={this.state.showSearch}
          value={this.state.query}
          onClear={this.onClear}
          onChangeText={this.onSearchChange}
        />
        {
          this.state.results.length === 0
            ? (
              <ListItem
                title="0 results"
                subtitle="No matching presidents"
                subtitleStyle={{ color: Colors.gray[500] }}
                leftIcon={{ name: 'info', color: Colors.gray[500] }}
              />
            )
            : (
              <FlatList
                data={this.state.results}
                keyExtractor={(item, index) => `${index}`}
                renderItem={({ item }) => (
                  <ListItem
                    title={item.president}
                    subtitle={(<View style={{ marginLeft: 15 }}>
                      <Text style={{ color: Colors.gray[500] }}>{item.party}</Text>
                      <Text style={{ color: Colors.gray[500] }}>{item.took_office}</Text>
                    </View>)}
                    titleStyle={{ marginLeft: 15 }}
                    leftIcon={{ name: 'person', color: Colors.gray[500], iconStyle: { marginLeft: 3 } }}
                  />
                )}
              />
            )
        }


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white[50]
  },
});

export default App;