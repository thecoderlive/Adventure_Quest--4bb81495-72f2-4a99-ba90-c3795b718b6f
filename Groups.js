import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'



function Groups({ item, navigation }){

const onPressViewGroup = () => {}

function groupsItem({ item }){
return (
<View style={styles.groups_item}>
<Image
    style={styles.group_image}
    source={{uri: item.group_image}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.group_name} numberOfLines={1}>{item.group_name}</Text>
<TouchableOpacity  onPress={onPressViewGroup}>
    <View style={styles.view_group}>{'View Group'}</View>
</TouchableOpacity>
</View>
</View>
)}

return (
<FlatList
    style={styles.groups}
    data={item}
    renderItem={groupsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default Groups;

const styles = StyleSheet.create({
    "group_image": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    },
    "group_name": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    },
    "view_group": {
        "flex": 1,
        "padding": 10,
        "margin": 5,
        "textAlign": "center",
        "backgroundColor": "#1ACDA5",
        "color": "white"
    }
});