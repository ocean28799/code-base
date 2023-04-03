/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react';

import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { StyleSheet, ViewProps } from 'react-native';

import _ from 'lodash';

import {
  useComponentDidAppearListener,
  useComponentDidDisappearListener,
} from '../helpers';

interface BaseComponentOptions {}

interface BaseComponentProps extends ViewProps {
  componentId: string;
}

const defaultOptions: BaseComponentOptions = {};

const withBaseComponent =
  (Comp: any, options?: BaseComponentOptions) =>
  (props: BaseComponentProps) => {
    const isViewShowing = useRef(false);

    const viewDidAppear = () => {
      isViewShowing.current = true;
    };
    useComponentDidAppearListener(viewDidAppear, props.componentId);

    const viewDidDisappear = () => {
      isViewShowing.current = false;
    };
    useComponentDidDisappearListener(viewDidDisappear, props.componentId);

    return (
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <SafeAreaView edges={['top', 'bottom']} style={styles.container}>
          <Comp {...props} style={props.style} />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default withBaseComponent;
