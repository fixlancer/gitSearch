import { createStackNavigator } from '@react-navigation/stack';

import Search from '../ui/screens/Search/Index';
import Profile from '../ui/screens/Profile/Index';
import Followers from '../ui/screens/Followers/Index';
import Following from '../ui/screens/Following/Index';

const Stack = createStackNavigator();

const Routes = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerShown: false,
      }}>

      <Stack.Group>
      <Stack.Screen name="Profile" component={Profile} />	
      <Stack.Screen name='Search' component={Search} />

      </Stack.Group>


      <Stack.Group screenOptions={{ presentation: 'modal' }}>
      
      <Stack.Screen name="Followers" component={Followers} /> 
      <Stack.Screen name="Following" component={Following} />

      </Stack.Group>

    </Stack.Navigator>
  );
};
export default Routes;