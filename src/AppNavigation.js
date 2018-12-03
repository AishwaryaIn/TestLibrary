import React from "react";
import { createStackNavigator } from "react-navigation";
import Menu  from './menu';
import DeviceLock from './device_lock';
import MobileAuthentication from './mobile_login';
import EmailAuthentication from './email_login';
import OTPScreen from './otp_view';

const routesConfig = {
    Menu: { screen: Menu },
    DeviceLock: { screen: DeviceLock },
    MobileAuthentication: { screen: MobileAuthentication },
    OTPScreen: { screen: OTPScreen },
    EmailAuthentication: {screen: EmailAuthentication}
};
export const InitialLogin = createStackNavigator(routesConfig,
    {
        initialRouteName: 'Menu',
        headerMode: 'none'
    }
);
