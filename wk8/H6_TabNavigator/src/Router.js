import React from 'react';
import { TabNavigator,StackNavigator } from 'react-navigation';
import Albums from './components/Albums';
import Details from './components/Details';
import Me from './components/Me';
import Setting from './components/Setting';

export const AlbumStack = StackNavigator({
  Albums: {
    screen: Albums,
  },
  Details: {
    screen: Details,
    },
  },
);

export const MeStack = StackNavigator({
  Me: {
    screen: Me,
  }
});

export const SettingStack = StackNavigator({
  Setting: {
    screen: Setting,
  }
});


export const TabRouter = TabNavigator(
  {
    Albums: {
      screen: AlbumStack,
    },
    Me: {
      screen: MeStack,
    },
    Setting: {
      screen: SettingStack,
    },
  },
  {
    animationEnabled : true,
  }
);


