import React from 'react';
import { SwipeableFlatList } from 'react-native'
import UserItem from './user-item'


const UserList = ({ userts }) =>{
  return (
    <SwipeableFlatList
      data={users}
      bounceFirstRowOnMOunt={true}
      maxSwipeDistance={160}
      renderItem={UserItem}
    />
  )
}


export default UserList;