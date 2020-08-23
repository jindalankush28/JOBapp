import React,{ Component} from 'react';
import { StyleSheet, View } from 'react-native';
import {createSwitchNavigator,createAppContainer } from 'react-navigation'

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import  {Provider}  from 'react-redux';
import  {PersistGate}  from 'redux-persist/es/integration/react';
import configureStore from './src/store';
import AuthScreen from './src/screens/AuthScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import MapScreen from './src/screens/MapScreen';
import DeckScreen from './src/screens/DeckScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import SettingsScreen from './src/screens/SettingsScreen';
const reviewS = createStackNavigator({
  review: ReviewScreen,
  settings: SettingsScreen
})
export default class Container extends Component {
  
  render() {
    
    const MainNavigator = createSwitchNavigator({
      welcome: WelcomeScreen ,
      auth: AuthScreen ,
      main: 
        createBottomTabNavigator({
          map: MapScreen ,
          deck: DeckScreen ,
          review: reviewS
            
          
        },
          {
            tabBarPosition: 'bottom',
            lazy: true,
            tabBarOptions: {
              labelStyle: { fontSize: 12 }
            }
          })
      ,
    },
      {
        navigationOptions: {
          tabBarVisible: false
        },
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        lazy: true,
        animationEnabled: false
      }
    );
    const Container = createAppContainer(MainNavigator)
    const { persistor, store } = configureStore();
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View style={styles.container}>
            <Container />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
