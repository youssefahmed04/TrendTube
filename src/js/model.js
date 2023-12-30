// Model
const API_KEY = "AIzaSyDJvk4A_K5SVv78Rl7Qaun_qFmU0_Xjo9Q";

export const YoutubeModel = {
  getChannelData: async function (channelId) {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`
      );
      const data = await response.json();
      if (response.ok) {
        return {
          profilePic: data.items[0].snippet.thumbnails.high.url,
          channelTag: data.items[0].snippet.customUrl,
          name: data.items[0].snippet.title,
        };
      } else {
        throw new Error(`Error fetching channel data: ${data.error.message}`);
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  getVideoData: async function (pageToken = "", index) {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&pageToken=${pageToken}&regionCode=US&key=${API_KEY}`
      );
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        throw new Error(`Error fetching video data: ${data.error.message}`);
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  getSubscriptionData: async function () {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&pageToken=CAUQAA&key=${API_KEY}`
      );
      const data = await response.json();
      if (response.ok) {
        return data.items.map((item) =>
          this.getChannelData(item.snippet.channelId)
        );
      } else {
        throw new Error(
          `Error fetching subscription data: ${data.error.message}`
        );
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  getStoryData: async function () {
    // Assuming stories are fetched similar to video data but with different criteria
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&pageToken=CAUQAA&key=${API_KEY}`
      );
      const data = await response.json();
      if (response.ok) {
        return data.items.map((item) =>
          this.getChannelData(item.snippet.channelId)
        );
      } else {
        throw new Error(`Error fetching story data: ${data.error.message}`);
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  toggleSubStatus: function (index) {
    const currentStatus = this.getSubStatus(index);
    const newStatus =
      currentStatus === "subscribed" ? "unsubscribed" : "subscribed";
    localStorage.setItem(`subStatus_${index}`, newStatus);
    return newStatus;
  },

  getSubStatus: function (index) {
    return localStorage.getItem(`subStatus_${index}`) || "unsubscribed";
  },

  toggleLikeStatus: function (videoId) {
    const currentStatus = this.getLikeStatus(videoId);
    const newStatus = currentStatus === "like" ? "unlike" : "like";
    localStorage.setItem(`likeStatus_${videoId}`, newStatus);
    return newStatus;
  },

  getLikeStatus: function (videoId) {
    // console.log(`likeStatus_${videoId}`);
    return localStorage.getItem(`likeStatus_${videoId}`) || "unlike";
  },
};
