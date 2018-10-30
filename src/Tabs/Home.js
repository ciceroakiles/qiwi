import React from 'react';
import { StyleSheet, ScrollView} from 'react-native';
import HomeBanner from '../components/HomeBanner';
import HomeScan from '../components/HomeScan';
import HomeMarket from '../components/HomeMarket';

export default class Home extends React.Component{
        render() {
            return(
                
            <ScrollView style={styles.container} >
               <HomeBanner />
               <HomeScan />
               <HomeMarket /> 
                
            </ScrollView>
           
            );
        }
    }
    
    const styles = StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: '#4045AD'
        }
    });