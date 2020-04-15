import { createSlice } from "@reduxjs/toolkit";
import { youtube } from "../api/youtube";

export const channels = createSlice({
  name: "channels",
  initialState: {
    currentVideoChannel: null,
    hasError: null,
  },
  reducers: {
    fetchCurrentVideoChannel: (state, action) => {
      state.currentVideoChannel = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.hasError = action.payload;
    },
  },
});

const { fetchCurrentVideoChannel, setErrorMessage } = channels.actions;

export const fetchCurrentVideoChannelAsync = (channelId) => async (
  dispatch
) => {
  try {
    const response = await youtube.get(
      `/channels?part=snippet%2C%20statistics&id=${channelId}&key=${process.env.REACT_APP_API_KEY}`
    );
    dispatch(fetchCurrentVideoChannel(response.data.items[0]));
  } catch (err) {
    console.log("err", err);
    dispatch(setErrorMessage(err.response));
  }
};

export default channels.reducer;
