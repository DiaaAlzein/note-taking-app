import * as React from 'react';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export interface StackItem {
  name: string;
  component: React.ComponentType<any>;
  options: NativeStackNavigationOptions;
}
