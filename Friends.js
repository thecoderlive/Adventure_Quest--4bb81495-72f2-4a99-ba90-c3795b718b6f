import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'



function Friends({ item, navigation }){

const onPressSendMessage = () => {}

function friendsItem({ item }){
return (
<View style={styles.friends_item}>
<Image
    style={styles.friend_image}
    source={{uri: item.friend_image}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.friend_name} numberOfLines={1}>{item.friend_name}</Text>
<TouchableOpacity  onPress={onPressSendMessage}>
    <View style={styles.send_message}>{'Send Message'}</View>
</TouchableOpacity>
</View>
</View>
)}

return (
<FlatList
    style={styles.friends}
    data={item}
    renderItem={friendsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default Friends;

const styles = StyleSheet.create({
    "friend_image": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    },
    "friend_name": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    },
    "send_message": {
        "flex": 1,
        "padding": 10,
        "margin": 5,
        "textAlign": "center",
        "backgroundColor": "#1ACDA5",
        "color": "white"
    }
});