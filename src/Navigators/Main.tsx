import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { IndexExampleContainer } from '@/Containers'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={IndexExampleContainer}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Passbook" component={IndexExampleContainer} />
      <Tab.Screen name="Billbox" component={IndexExampleContainer} />
      <Tab.Screen name="Profile" component={IndexExampleContainer} />
      <Tab.Screen name="More" component={IndexExampleContainer} />
    </Tab.Navigator>
  )
}

export default MainNavigator
