import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabContent from './section';

interface TabsProps {
  children?: any
}

const Tab = createMaterialTopTabNavigator();

export default function Tabs(props: TabsProps) {
  const contents: JSX.Element[] = [];

  React.Children.forEach(props.children, (child) => {
    if (child.type === TabContent) {
      contents.push(child);
    }
  });

  return (
    <Tab.Navigator
      style={{
      }}
      sceneContainerStyle={{
      }}
      screenOptions={{
        tabBarActiveTintColor: '#001EB8',
        tabBarInactiveTintColor: '#58616E',
        tabBarPressColor: 'transparent',
        tabBarStyle: {
          backgroundColor: 'transparent'
        },
        tabBarItemStyle: { 
          width: 'auto',
        },
        tabBarLabelStyle: {
          fontSize: 18,
          fontWeight: '600',
          fontFamily: 'Karla-Bold',
          textAlign: 'center'
        },
        tabBarIndicatorStyle: {
          borderBottomColor: '#001EB8',
          borderBottomWidth: 2,
          marginBottom: -1,
          width: 1.1
        },
        tabBarIndicatorContainerStyle:{
          borderBottomColor: '#D4D6D9',
          borderBottomWidth: 1
        },
      }}>
        {contents.map((section, index) => (
          <Tab.Screen
            key={index}
            name={section.props.name}
            options={{
              tabBarLabel: section.props.title,
            }}>
            {(props) => <TabContent {...section.props} {...props} />}
          </Tab.Screen>
        ))}
    </Tab.Navigator>
  );
}

