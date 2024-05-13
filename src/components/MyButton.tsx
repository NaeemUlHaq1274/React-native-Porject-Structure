import React from 'react';
import {TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';
import {MY_COLORS} from '@constants';
import MyText from './MyText';
import { adjust, hp, wp } from '@utils';

interface MyButtonProps {
  onPress: () => void;
  title: string;
  btnType?: 'primary' | 'secondary';
  secondaryColor?: string;
  style?: ViewStyle;
}

const MyButton: React.FC<MyButtonProps> = ({
  onPress,
  title,
  btnType = 'primary',
  style
}) => {
  const styles = myStyles(btnType);
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <MyText p color={btnType === 'primary' ? 'white' : 'black'}>
        {title}
      </MyText>
    </TouchableOpacity>
  );
};

const myStyles = (btnType: string) =>
  StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
      marginVertical: 10,
      height: hp('7%'), // Adjust height as needed
      backgroundColor:
        btnType === 'primary' ? MY_COLORS.PRIMARY : MY_COLORS.SECONDARY,
    },
    buttonText: {
      fontSize: wp('4%'), // Adjust font size as needed
      color: btnType === 'primary' ? 'white' : 'black',
    },
  });

export default MyButton;