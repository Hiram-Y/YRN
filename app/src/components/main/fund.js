/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
} from 'react-native';

import NavigationBar from '../../widget/navbar/index'

export default class Fund extends Component {

    render() {
        return (
            <View >
                <NavigationBar
                    title ={{title: '基金',}}
                />
            </View>
        );
    }
}
