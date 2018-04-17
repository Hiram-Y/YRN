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

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View >
                <NavigationBar
                    title ={{title: '首页',}}
                />
            </View>

        );
    }
}
