/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';

import { withBaseComponent } from '@core/hocs';
import { Text, View } from 'react-native';

import styles from './styles';

import { NavigationComponentProps } from 'react-native-navigation';

import _ from 'lodash';

interface LoginScreenProps extends NavigationComponentProps {}

const BaseComponent = withBaseComponent(View);

const LoginScreen: React.FC<LoginScreenProps> = ({ componentId }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'auth' });

  return (
    <BaseComponent style={styles.conatiner} componentId={componentId}>
      <Text style={styles.loginTitle}>{t('login.title')}</Text>
    </BaseComponent>
  );
};

export default LoginScreen;
