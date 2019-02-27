import React from "react";
import { SwipeableFlatList } from "react-native";
import UserItem from "./UserItem";
import UserActions from './UserActions'

const UserList = ({ users }) => {
  return (
    <SwipeableFlatList
      data={users}
      bounceFirstRowOnMOunt={true}
      maxSwipeDistance={160}
      renderItem={UserItem}
      renderQuickActions={UserActions}
    />
  );
};

export default UserList;
