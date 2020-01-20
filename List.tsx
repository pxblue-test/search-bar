import React from 'react';
import { StyleSheet, View, FlatList, Platform } from 'react-native';
import * as Colors from '@pxblue/colors';
import { Header, wrapIcon, Body, Subtitle } from '@pxblue/react-native-components';
import { Icon, ListItem } from 'react-native-elements';

import sampleData, { dataPoint } from './data';

const MenuIcon = wrapIcon({ IconClass: Icon, name: 'menu' });

type PropType = {};

type StateType = {
    query: string;
    results: dataPoint[];
    data: dataPoint[];
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white[50],
        marginTop: Platform.OS === 'android' ? 24 : 0,
    },
});

class List extends React.Component<PropType, StateType> {
    constructor(props: PropType) {
        super(props);
        this.state = {
            query: '',
            results: sampleData,
            data: sampleData,
        };
    }
    onSearchChange = (query: string): void => this.setState({ query }, this.onSearch);

    onSearch = (): void => {
        const query = this.state.query.toLowerCase().trim();
        const results: dataPoint[] = [];
        this.state.data.map((item) => {
            if (
                item.president
                    .toLowerCase()
                    .trim()
                    .includes(query) ||
                item.party
                    .toLowerCase()
                    .trim()
                    .includes(query) ||
                item.tookOffice
                    .toLowerCase()
                    .trim()
                    .includes(query)
            ) {
                results.push(item);
            }
        });
        this.setState({ results });
    };

    render(): JSX.Element {
        return (
            <View style={styles.container}>
                <Header
                    title={'President'}
                    subtitle={'Leader of the Free world'}
                    navigation={{ icon: MenuIcon, onPress: (): void => { /* your code here */} }}
                    searchableConfig={{
                        placeholder: 'Search',
                        autoFocus: true,
                        onChangeText: (q: string): void => this.onSearchChange(q),
                    }}
                />
                {this.state.results.length === 0 ? (
                    <ListItem
                        // title="0 results"
                        title={
                            <Body style={{ marginLeft: 16 }} font={'semiBold'}>
                                0 results
                            </Body>
                        }
                        subtitle={
                            <Subtitle style={{ marginLeft: 16 }} font={'regular'}>
                                No matching presidents
                            </Subtitle>
                        }
                        titleStyle={{ marginLeft: 16 }}
                        subtitleStyle={{ color: Colors.gray[500], marginLeft: 16 }}
                        leftIcon={{ name: 'info', color: Colors.gray[500], iconStyle: { marginLeft: 3 } }}
                    />
                ) : (
                    <FlatList
                        data={this.state.results}
                        keyExtractor={( _, index): string => `${index}`}
                        renderItem={({ item }): JSX.Element => (
                            <ListItem
                                title={
                                    <Body style={{ marginLeft: 16 }} font={'semiBold'}>
                                        {item.president}
                                    </Body>
                                }
                                subtitle={
                                    <View style={{ marginLeft: 16 }}>
                                        <Subtitle style={{ color: Colors.gray[500] }} font={'regular'}>
                                            {item.party}
                                        </Subtitle>
                                        <Subtitle style={{ color: Colors.gray[500] }} font={'regular'}>
                                            {item.tookOffice}
                                        </Subtitle>
                                    </View>
                                }
                                titleStyle={{ marginLeft: 16 }}
                                leftIcon={{ name: 'person', color: Colors.gray[500], iconStyle: { marginLeft: 3 } }}
                            />
                        )}
                    />
                )}
            </View>
        );
    }
}

export default List;
