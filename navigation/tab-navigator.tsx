import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButton } from '../components/HeaderButton';
import { TabBarIcon } from '../components/TabBarIcon';
import One from '../screens/one';
import Two from '../screens/two';
import Home from 'screens/Home/Index';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator({
  screenOptions: function ScreenOptions() {
    return {
      tabBarActiveTintColor: 'white',
      headerShown: false,
      tabBarStyle:{
        backgroundColor:"black"
      },
    };
  },
  screens: {
    One: {
      screen: Home,
      options: ({ navigation }) => ({
        title: 'Home',
        tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        headerRight: () => <HeaderButton onPress={() => navigation.navigate('Modal')} />,
      }),
    },
    Two: {
      screen: Two,
      options: {
        title: 'Search',
        tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
      },
    },
    Three: {
      screen: Two,
      options: {
        title: 'Your Library',
        tabBarIcon: ({ color }) => <TabBarIcon name="address-book" color={color} />,
      },
    },
    Four: {
      screen: Two,
      options: {
        title: 'Premium',
        tabBarIcon: ({ color }) => <Entypo name="spotify" size={24} color={color} />,
      },
    },
    Five: {
      screen: Two,
      options: {
        title: 'Create',
        tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
      },
    },
  },
});

export default Tab;
