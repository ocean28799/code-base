/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { BackHandler } from 'react-native';

export default function useBackHandler(handler: any, deps: any[] = []) {
  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', handler);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handler);
      sub.remove();
    };
  }, deps);
}
