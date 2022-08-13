/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import {
  CompositeScreenProps,
  NavigatorScreenParams
} from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootTabParamList = {
  TabOne: undefined
  TabTwo: undefined
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined
  Home: undefined
  SignIn: undefined
  ResetPass: undefined
  Splash: undefined
  Modal: undefined
  NotFound: undefined
  Pokemon_details: undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >
declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList
  }
}
