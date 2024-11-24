import { View, StyleSheet } from "react-native";
import React, { FC, useEffect } from "react";
import CustomSafeAreaView from "../components/CustomSafeAreaView";
import { token_storage } from "../redux/storage";
// import { jwtDecode } from "jwt-decode";
import { resetAndNavigate } from "../utils/NavigationUtil";
import Toast from "react-native-toast-message";
// import { refresh_tokens } from "../redux/apiConfig";
import { useAppDispatch } from "../redux/reduxhook";
// import { CheckProfile } from "../../redux/actions/userAction";
import CustomText from "../components/CustomText";

interface DecodedToken {
  exp: number;
}

const SplashScreen: FC = () => {
  const dispatch = useAppDispatch();
  const tokenCheck = async () => {
    const app_access_token = token_storage.getString(
      "app_access_token"
    ) as string;
    const app_refresh_token = token_storage.getString(
      "app_refresh_token"
    ) as string;
    if (app_access_token) {
      resetAndNavigate('BottomTab')
      // Toast.show({
      //   type: "warningToast",
      //   props: { msg: "Session Expired, please login again" },
      // });
      return
    }
    resetAndNavigate("LoginScreen");
  };

  useEffect(() => {
    async function deeplinks() {
      await tokenCheck();
    }
    let intervalId: NodeJS.Timeout;
      intervalId = setInterval(() => {
        deeplinks()
      }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <CustomText style={{color:'#fff'}}>SplashScreen</CustomText>
      </View>
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;