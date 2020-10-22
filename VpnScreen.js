import React, { Component } from "react";
import { View, Text ,Image,TouchableOpacity,Dimensions} from "react-native";
const online = require('../../assets/icons/online.png')
const offline = require('../../assets/icons/offline.png')

export default class VpnScreen extends Component {
    constructor() {
        super();
        this.state = { isConnected: false };
    }
    renderImage() {
    var imgSource = this.state.isConnected ? online : offline;
    return (
        <Image
            
            source={imgSource}
        />
    );
}
    render() {
        return (
            <View style={{borderColor:'blue',borderWidth:2,flex:1}}>
                <View style={{borderColor:'black',borderWidth:2,alignItems:'center',justifyContent:'center'}}>
                    
                    <TouchableOpacity onPress={() => this.setState({isConnected: !this.state.isConnected})}>
                        {this.renderImage()}
                    </TouchableOpacity>
                    
                </View>
            </View>
        )
    }
}