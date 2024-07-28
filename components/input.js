import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styleInput } from './style';

const Input = ({ placeholder, value, onChangeText }) => {
  return (
    <View style={styleInput.container}>
      <Icon name="menu" size={26} color="#000" style={styleInput.iconLeft} />
      <TextInput
        style={styleInput.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      <View style={styleInput.iconRightContainer}>
        <Text style={styleInput.iconRight}>T</Text>
      </View>
    </View>
  );
};

export default Input;