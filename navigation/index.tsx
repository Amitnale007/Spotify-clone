import { createStaticNavigation, StaticParamList } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Modal from '../screens/modal';
import DrawerNavigator from './drawer-navigator';
import Tab from './tab-navigator';
import Login from 'screens/Login/Index';

const Stack = createStackNavigator({
  screens: {
     Login: {
      screen: Login,
      options: {
        headerShown: false,
      },
    },
    Tab: {
      screen: Tab,
      options: {
        headerShown: false,
      },
    },
    Modal: {
      screen: Modal,
      options: {
        presentation: 'modal',
        headerLeft: () => null,
      },
    },
  },
});

type RootNavigatorParamList = StaticParamList<typeof Stack>;

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface RootParamList extends RootNavigatorParamList {}
  }
}

const Navigation = createStaticNavigation(Stack);
export default Navigation;
