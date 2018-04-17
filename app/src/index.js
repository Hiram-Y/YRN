/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import HomeScreen from './components/main/home';
import FundScreen from './components/main/fund';
import FinancialScreen from './components/main/financial';
import InsuranceScreen from './components/main/insurance';
import ConsumeScreen from './components/main/consume';

import SplashScreen from 'react-native-splash-screen'


export default class Main extends Component {


    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'home',
            isLoading: true,
        };
    }

    /**
     * 组件已经完全挂载到网页上才会调用被执行
     */
    componentDidMount() {
        global.setTimeout(() => {
            this.setState({isLoading: false});
        }, 1000);
    }

    /**
     * 组件更新后会执行此方法，
     * 注意：需要谨慎的在 componentDidUpdate 里面使用 setState，会导致组件更新再次执行componentDidUpdate，造成成死循环
     */
    componentDidUpdate() {
        if (!this.state.isLoading) {
            // Hide splash screen
            SplashScreen.hide();
        }
    }

    render() {
        if (this.state.isLoading) return null;

        return (
            <TabNavigator style={styles.container}>
                <TabNavigator.Item
                    title="首页"
                    selected={this.state.selectedTab === 'home'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require("../res/images/tab_home_normal.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../res/images/tab_home_select.png")} style={styles.iconStyle}/>}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <HomeScreen {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="基金"
                    selected={this.state.selectedTab === 'fund'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require("../res/images/tab_fund_normal.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../res/images/tab_fund_select.png")} style={styles.iconStyle}/>}
                    onPress={() => this.setState({ selectedTab: 'fund' })}>
                    <FundScreen {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="理财"f
                    selected={this.state.selectedTab === 'financial'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require("../res/images/tab_finance_normal.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../res/images/tab_finance_select.png")} style={styles.iconStyle}/>}
                    onPress={() => this.setState({ selectedTab: 'financial' })}>
                    <FinancialScreen {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="保险"
                    selected={this.state.selectedTab === 'insurance'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require("../res/images/tab_insurance_normal.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../res/images/tab_insurance_select.png")} style={styles.iconStyle}/>}
                    onPress={() => this.setState({ selectedTab: 'insurance' })}>
                    <InsuranceScreen {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="消费"
                    selected={this.state.selectedTab === 'consume'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require("../res/images/tab_consume_normal.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../res/images/tab_consume_select.png")} style={styles.iconStyle}/>}
                    onPress={() => this.setState({ selectedTab: 'consume' })}>
                    <ConsumeScreen {...this.props}/>
                </TabNavigator.Item>
            </TabNavigator>

        );
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    iconStyle:{
        width:22,
        height:22,
    },
    textStyle:{
        fontSize: 12,
        marginBottom: 2,
        color:'#979FA7',
    },
    selectedTextStyle:{
        fontSize: 12,
        marginBottom: 2,
        color:'#C2A357',
    }
});



