import React from 'react';
import { StyleSheet, Animated, Dimensions } from 'react-native';
import * as Colors from '@pxblue/colors'
import { SearchBar, Icon } from 'react-native-elements';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

class AnimatedSearchBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { bounceValue: new Animated.Value(this.props.show ? 0 : SCREEN_WIDTH) }
    }
    componentDidUpdate(prevProps) {
        if (this.props.show !== prevProps.show) {
            const bounceValue = this.props.show ? 0 : SCREEN_WIDTH;
            Animated.spring(
                this.state.bounceValue,
                {
                    toValue: bounceValue,
                }
            ).start();
        }
    }
    render() {
        const { show, onClear, ...props } = this.props;
        return (

            <Animated.View
                style={[styles.searchBar,
                { transform: [{ translateX: this.state.bounceValue }] }]}
            >
                <SearchBar
                    {...props}
                    containerStyle={styles.searchBarContainerStyle}
                    inputStyle={{ color: Colors.black[500] }}
                    inputContainerStyle={{ backgroundColor: Colors.white[50] }}
                    placeholder='Search'
                    clearIcon={false}
                />
                <Icon
                    name='clear'
                    size={20}
                    color={Colors.gray[500]}
                    iconStyle={styles.clearIcon}
                    onPress={onClear}
                />
            </Animated.View>

        )
    }
}

const styles = StyleSheet.create({
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        top: 0,
        left: 0,
        width: '100%',
        position: 'absolute',
        backgroundColor: Colors.white[50],
        paddingTop: getStatusBarHeight(true) + 5,
        zIndex: 1,
        shadowColor: Colors.gray[500],
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        elevation: 1,
    },
    searchBarContainerStyle: {
        padding: 0,
        backgroundColor: Colors.blue[500],
        borderTopWidth: 0,
        borderBottomWidth: 0,
        width: '90%',
    },
    clearIcon: {
        marginTop: 10,
    }
});

export default AnimatedSearchBar;