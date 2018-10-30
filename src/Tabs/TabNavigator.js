import React, {Component} from 'react';
import Icon from '@expo/vector-icons/FontAwesome';
import { createBottomTabNavigator } from 'react-navigation';

import Scan from '../Tabs/Scan';
import Home from '../Tabs/Home';
import Cart from '../Tabs/Cart';

var myTabs = createBottomTabNavigator ({
    Home: {
        screen: Home,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="home"
                    color={tintColor}
                    size={35}
                />
            ), tabBarOptions: {
                activeTintColor: '#f62459',
                inactiveTintColor: '#EBBCD1',
               
                labelStyle: {
                  fontSize: 12,
                }
              }, 
        })
    },

    Scan: {
        screen: Scan,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="barcode"
                    color={tintColor}
                    size={35}
                />
            ),     tabBarOptions: {
                activeTintColor: '#f62459',
                inactiveTintColor: '#EBBCD1',
                labelStyle: {
                  fontSize: 12,
                }
              }
        }),
    },

    Cart: {
        screen: Cart,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="shopping-cart"
                    color={tintColor}
                    size={35}
                />
            ), tabBarOptions: {
                activeTintColor: '#f62459',
                inactiveTintColor: '#EBBCD1',
                labelStyle: {
                  fontSize: 12,
                }
              }
        })
    }
});

export default myTabs;
