import * as React from 'react';
import {AppRegistry} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {expo} from './app.json';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useFonts} from 'expo-font'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '@/screens/HomeScreen';
import DetailsScreen from '@/screens/DetailsScreen';
const Tab = createBottomTabNavigator(); // 新增创建底部导航栏

const Stack = createNativeStackNavigator();
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent'
    }
}

function App() {
    const [loaded] = useFonts({
        InterBold: require("./assets/fonts/Inter-Bold.ttf"),
        InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
        InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
        InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
        InterLight: require("./assets/fonts/Inter-Medium.ttf"),
    });

    if (!loaded) return null;
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'Home'}>
            <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home'}}/>
            <Stack.Screen name="Detailsa" component={DetailsScreen} options={{title: 'Detail'}}/>
        </Stack.Navigator>

    );
}

export default function Home() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{headerShown:false}}>
                    <Tab.Screen name="NestedHome" component={App}  options={{
                        tabBarLabel: '主页',
                        tabBarIcon: ({ color, size }) => {
                            return <Icon name="home" size={size} color={color} />;
                        },
                    }}/>
                    <Tab.Screen name="DetailsScreens" component={DetailsScreen} options={{
                        tabBarLabel: '个人资料',
                        tabBarIcon: ({ color, size }) => {
                            return <Icon name="account" size={size} color={color} />;
                        },
                    }}/>
                </Tab.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}


AppRegistry.registerComponent(expo.name, () => Home);