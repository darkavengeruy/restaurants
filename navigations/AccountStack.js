import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/account/Login";
import Account from "../screens/account/Account";
import Register from "../screens/account/Register";

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={Account}
        options={{ title: "Cuentas" }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{ title: "Iniciar Sesion" }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{ title: "Registrar Usuario" }}
      />
    </Stack.Navigator>
  );
}
