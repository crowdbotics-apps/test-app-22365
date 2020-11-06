import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile168678Navigator from '../features/UserProfile168678/navigator';
import Tutorial168677Navigator from '../features/Tutorial168677/navigator';
import NotificationList168649Navigator from '../features/NotificationList168649/navigator';
import Settings168648Navigator from '../features/Settings168648/navigator';
import Settings168640Navigator from '../features/Settings168640/navigator';
import UserProfile168638Navigator from '../features/UserProfile168638/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile168678: { screen: UserProfile168678Navigator },
Tutorial168677: { screen: Tutorial168677Navigator },
NotificationList168649: { screen: NotificationList168649Navigator },
Settings168648: { screen: Settings168648Navigator },
Settings168640: { screen: Settings168640Navigator },
UserProfile168638: { screen: UserProfile168638Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
