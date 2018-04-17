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

export default class Financial extends Component {

    render() {
        return (
            <View >
                <NavigationBar
                    title ={{title: '理财',}}
                />
            </View>
        );
    }
}
