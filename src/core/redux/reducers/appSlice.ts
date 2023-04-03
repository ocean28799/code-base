import { createSlice } from '@reduxjs/toolkit';
import { APP_FLOW } from '@core/navigation';

interface AppState {
  currentFlow: string;
  errorMessage: string;
  showLoading: boolean;
}

var initialState: AppState = {
  currentFlow: '',
  errorMessage: '',
  showLoading: false,
};

const slice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    startFlow(state: AppState, action: any) {
      state.currentFlow = action.payload;
    },
    finishFlow(state: AppState) {
      if (state.currentFlow === APP_FLOW.AUTH) {
        state.currentFlow = APP_FLOW.HOME;
      } else if (state.currentFlow === APP_FLOW.HOME) {
        state.currentFlow = APP_FLOW.AUTH;
      }
    },
    showLoading(state: AppState, action: any) {
      state.showLoading = action.payload;
    },
    setErrorMessage(state: AppState, action: any) {
      const { message } = action.payload;
      state.errorMessage = message;
    },
    clearErrorMessage(state: AppState) {
      state.errorMessage = '';
    },
  },
});

export const {
  startFlow,
  finishFlow,
  setErrorMessage,
  clearErrorMessage,
  showLoading,
} = slice.actions;

export default slice.reducer;
