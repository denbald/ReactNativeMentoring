import React from 'react';
import { StyleSheet, Text } from 'react-native';

const BASE_FONT_COLOR = '#4A4A4A';

const BaseText: React.FC<{ style?: any; numberOfLines?: number }> = ({
  children,
  style,
  numberOfLines,
}) => {
  return (
    <Text numberOfLines={numberOfLines} style={[styles.baseText, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Roboto', // TODO: probably need to install that font
    color: BASE_FONT_COLOR,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
});

export default BaseText;
