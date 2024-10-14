import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  currentUser: 'User', // Mock current user
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({
        text: action.payload.text,
        user: state.currentUser,
        timestamp: new Date().toLocaleTimeString(),
        received: false,
      });
    },
    receiveMessage: (state, action) => {
      state.messages.push({
        text: action.payload.text,
        user: action.payload.user,
        timestamp: new Date().toLocaleTimeString(),
        received: true,
      });
    },
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
