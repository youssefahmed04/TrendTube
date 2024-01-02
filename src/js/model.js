// Model
const API_KEY = "AIzaSyDJvk4A_K5SVv78Rl7Qaun_qFmU0_Xjo9Q";

export const YoutubeModel = {
  pageToken: "",
  pagination: {
    currentPage: 1,
    resultsPerPage: 5,
    totalResults: 20,
  },

  setCurrentPage(pageNumber) {
    this.pagination.currentPage = pageNumber;
  },

  getCurrentPage() {
    return this.pagination.currentPage;
  },

  setResultsPerPage(resultsPerPage) {
    this.pagination.resultsPerPage = resultsPerPage;
  },

  getResultsPerPage() {
    return this.pagination.resultsPerPage;
  },

  setTotalResults(totalResults) {
    this.pagination.totalResults = totalResults;
  },

  getTotalResults() {
    return this.pagination.totalResults;
  },

  async fetchYouTubeData() {
    try {
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&pageToken=${this.pageToken}&regionCode=US&key=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(`Error fetching YouTube data: ${data.error.message}`);
      }
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async setPageToken(pageToken) {
    this.pageToken = pageToken;
  },

  getPageToken() {
    return this.pageToken;
  },

  async getVideoData() {
    return await this.fetchYouTubeData();
  },

  async getChannelData(channelId) {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`
      );
      const data = await response.json();
      if (response.ok) {
        return {
          profilePic: data.items[0].snippet.thumbnails.high.url,
          name: data.items[0].snippet.title,
          channelTag: data.items[0].snippet.customUrl,
          channelId: channelId,
        };
      } else {
        throw new Error(`Error fetching channel data: ${data.error.message}`);
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async getSubAndStoryData() {
    try {
      const data = await this.fetchYouTubeData();
      return data.items.map(
        async (item) => await this.getChannelData(item.snippet.channelId)
      );
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  toggleSubStatus(channelId) {
    const currentStatus = this.getSubStatus(channelId);
    const newStatus =
      currentStatus === "subscribed" ? "unsubscribed" : "subscribed";
    localStorage.setItem(`subStatus_${channelId}`, newStatus);
    return newStatus;
  },

  getSubStatus(channelId) {
    return localStorage.getItem(`subStatus_${channelId}`) || "unsubscribed";
  },

  toggleLikeStatus(videoId) {
    const currentStatus = this.getLikeStatus(videoId);
    const newStatus = currentStatus === "like" ? "unlike" : "like";
    localStorage.setItem(`likeStatus_${videoId}`, newStatus);
    return newStatus;
  },

  getLikeStatus(videoId) {
    return localStorage.getItem(`likeStatus_${videoId}`) || "unlike";
  },
};
