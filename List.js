import React from 'react';
import { StyleSheet, View, FlatList, Platform } from 'react-native';
import * as Colors from '@pxblue/colors'
import { Header, wrapIcon, Body, Subtitle } from '@pxblue/react-native-components';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { ListItem } from 'react-native-elements';

import sampleData from './data';

const MenuIcon = wrapIcon({ IconClass: MatIcon, name: 'menu' });

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: '', results: sampleData, data: sampleData };
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
    return (
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
                title={<Body style={{ marginLeft: 16 }} font={'semiBold'}>0 results</Body>}
                subtitle={<Subtitle style={{ marginLeft: 16 }} font={'regular'}>No matching presidents</Subtitle>}
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
                    title={<Body style={{ marginLeft: 16 }} font={'semiBold'}>{item.president}</Body>}
                    subtitle={(<View style={{ marginLeft: 16 }}>
                      <Subtitle style={{ color: Colors.gray[500] }} font={'regular'}>{item.party}</Subtitle>
                      <Subtitle style={{ color: Colors.gray[500] }} font={'regular'}>{item.took_office}</Subtitle>
                    </View>)}
                    titleStyle={{ marginLeft: 16 }}
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
    backgroundColor: Colors.white[50],
    marginTop: Platform.OS === 'android' ? 24 : 0
  },
});

export default List;