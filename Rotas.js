import {createStackNavigator} from '@react-navigation/stack';

import Home from './home';
import Login from './Login';


const Stack = createStackNavigator();

export default function Rotas(){
  return(
    <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} option={{headerShown:false, title:"Login"}}/>
    <Stack.Screen name="Home" component={Home} option={{headerShown:false, title:"Home"}}/>
    </Stack.Navigator>
  );
}