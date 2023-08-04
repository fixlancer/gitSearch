/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *  
 * @format
 * @flow strict-local
 */

 import React, { useEffect, useState } from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import Routes from './src/Routes/Routes';
 import { Provider } from 'react-redux';
 import { store } from './src/redux/store/store';
 
 const App = () => {
 
   return (
     
    <Provider store={store}>
       <NavigationContainer>
          <Routes />
       </NavigationContainer>
     </Provider>
   );
   }
  
  
  export default App;
 