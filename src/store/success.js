// foxgps *

import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'success',
  initialState: {
    messages: [],
  },
  reducers: {
    push(state, action) {
      state.messages.push(action.payload);
    },
    pop(state) {
      if (state.messages.length) {
        state.messages.shift();
      }
    },
  },
});

export { actions as successActions };
export { reducer as successReducer };
