import React,{Component} from 'react';
import {Image} from 'react-native';

interface props  {
    focused: any;
    selectedImage: ImageURISource;
    normalImage: ImageURISource;
}
export default class TabBarItem extends Component<props> {

    render() {
        return(
            <Image source={ this.props.focused ? this.props.selectedImage : this.props.normalImage }
                   style={ { tintColor:this.props.tintColor,width:25,height:25 } }
            />
        )
    }

}
