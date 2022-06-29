import React from 'react';
import { StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
import {FontAwesome5 as Icon} from '@expo/vector-icons';

export const FontAwesomeIconsPack = {
  name: 'fontawesome',
  icons: createIconsMap(),
};

function createIconsMap() {
  return new Proxy({}, {
    get(target, name) {
      return IconProvider(name);
    },
  });
}

const IconProvider = (name) => ({
  toReactElement: (props) => FontAwesomeIcon({ name, ...props }),
});

function FontAwesomeIcon({ name, style }) {
  const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
  return (
    <Icon name={name} size={height} color={tintColor} style={iconStyle} />
  );
}