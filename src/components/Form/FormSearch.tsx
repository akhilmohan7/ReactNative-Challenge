/**
 * File: FormSearch.tsx
 * -----
 * Created Date: Tuesday October 4th 2022
 * Author: Akhil Mohan
 * -----
 * Last Modified: Tue Oct 04 2022
 * Modified By: Akhil Mohan
 * @packageDocumentation
 */

import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { TextInput } from 'react-native-paper';


export default function FormSearch( props: any ) {
    
    const [fontsLoaded] = useFonts({
        Montserrat_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={ styles.container }>
            <View>
                <Text style={ styles.header }>Search</Text>
                <View style={ styles.divider }/>
                <TextInput 
                    mode='outlined'
                    left={ 
                        <TextInput.Icon 
                            name='file-search'
                            color='#30384d'
                        /> 
                    }
                    outlineColor='white'
                    placeholder='Search'
                    style={ styles.searchInput }
                    activeOutlineColor='#30384d'
                    placeholderTextColor='#7e8a9a'
                /> 
            </View>               

            <ScrollView style={ styles.containerContent }>
                <Text style={ styles.header }>Foods</Text>
                <View style={ styles.containerItems }>
                    {
                        props.data
                        &&
                        props.data.map(( item: any, key: any ) => (
                            <View key={ key } style={ styles.items }>
                                <Image
                                    source={{
                                        uri: item.imageUrl,
                                    }}
                                    style={{ height: 150, borderRadius: 3}}
                                    resizeMode='contain'
                                />
                                <Text style={ styles.name }>{ item.Ingredient }</Text>
                                <Text style={ styles.introduction }>{ item.Shorttext }</Text>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingBottom: 20,
    },
    header:{
        margin: 5,
        fontSize: 20,
        color : '#30384d',
        fontFamily: 'Montserrat_700Bold'
    },
    divider:{
        borderBottomWidth: 3,
        borderBottomColor: 'black',
    },
    searchInput: {
        margin: 10,
        fontFamily: 'Montserrat_700Bold'
    },
    containerContent:{
        padding: 5,
        borderRadius: 5,
        marginBottom: 20,
        backgroundColor: '#dee0e3',
    },
    containerItems:{
        marginTop: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    items:{
        width: '48%',
        marginBottom: 15,
    },
    name:{
        fontSize: 15,
        color: '#30384d',
        fontFamily: 'Montserrat_700Bold'
    },
    introduction:{
        fontSize: 10,
        color: '#7e8a9a',
        fontFamily: 'Montserrat_700Bold',
    }
});
