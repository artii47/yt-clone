import { youtube } from "../api/youtube";
import { createSlice } from "@reduxjs/toolkit";

export const channels = createSlice({
  name: "channels",
  initialState: {
    currentVideoChannel: null,
  },
  reducers: {
    fetchCurrentVideoChannel: (state, action) => {
      state.currentVideoChannel = action.payload;
    },
  },
});

const { fetchCurrentVideoChannel } = channels.actions;

export const fetchCurrentVideoChannelAsync = (channelId) => async (
  dispatch
) => {
  const response = await youtube.get(
    `/channels?part=snippet%2C%20statistics&id=${channelId}&key=${process.env.REACT_APP_API_KEY}`
  );
  dispatch(fetchCurrentVideoChannel(response.data.items[0]));
};

export default channels.reducer;
