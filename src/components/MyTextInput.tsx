import {MY_COLORS} from '@constants';
import { adjust, hp } from '@utils';
import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import MyText from './MyText';

interface AppProps extends TextInputProps {
  label: string;
  value?: string;
  placeholder: string;
  style?: TextInputProps;
  onChangeText: (text: string) => void;
}

const App: React.FC<AppProps> = ({
  label,
  value,
  placeholder,
  style,
  onChangeText,
}) => {
  const styles = myStyles();
  return (
    <>
      <MyText p color={MY_COLORS.TXT_GRAY} style={styles.txt}>
        {label}
      </MyText>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        placeholderTextColor={MY_COLORS.TXT_GRAY}
        value={value}
        onChangeText={onChangeText}
      />
    </>
  );
};

const myStyles = () =>
  StyleSheet.create({
    input: {
      width: '100%',
      height: hp('7%'),
      paddingHorizontal: 10,
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: MY_COLORS.TXT_GRAY,
      borderRadius: 12,
      color: 'black',
      marginTop: 2,
    },
    txt: {marginTop: 8},
  });

export default App;