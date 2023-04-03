import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';

enum StorageKey {
  UserToken = 'UserToken',
}

interface IAppStorage {
  userToken?: string;
}

const Storage: IAppStorage = {};

export default Storage;

export const saveUserTokens = async (userToken: string) => {
  try {
    await AsyncStorage.setItem(StorageKey.UserToken, JSON.stringify(userToken));
    Storage.userToken = await loadUserTokens();
  } catch (error) {
    console.log('[Storage] Save UserTokens error', error);
  }
};

export const loadUserTokens = async () => {
  try {
    const userTokens = await AsyncStorage.getItem(StorageKey.UserToken);
    if (!_.isEmpty(userTokens)) {
      return JSON.parse(userTokens!);
    } else {
      return undefined;
    }
  } catch (error) {
    console.log('[Storage] Get getUserTokens error', error);
  }
};

export const clearUserToken = async () => {
  try {
    await AsyncStorage.removeItem(StorageKey.UserToken);
    Storage.userToken = await loadUserTokens();
  } catch (error) {
    console.log('[Storage] Clear getUserTokens error', error);
  }
};
