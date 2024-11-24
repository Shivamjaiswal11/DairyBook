import { StyleSheet, Text, View } from 'react-native'
import React, { FC, useEffect } from "react";
import CustomText from '../../components/CustomText';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';

const LoginScreen: FC = () => {
  return (
    <CustomSafeAreaView>
      <CustomText>Login Screen</CustomText>
    </CustomSafeAreaView>

  )
}

export default LoginScreen

const styles = StyleSheet.create({})