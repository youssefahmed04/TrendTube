// Model
const API_KEY = "AIzaSyDJvk4A_K5SVv78Rl7Qaun_qFmU0_Xjo9Q";

export const YoutubeModel = {
  pagination: {
    currentPage: 1,
    resultsPerPage: 5,
    totalResults: 20,
  },

  setCurrentPage(pageNumber) {
    this.pagination.currentPage = pageNumber;
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

  async getVideoPageData(pageToken = "") {
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

  allVideosData: [],

  async getAllVideosData(pageToken = "", pageNum = 1) {
    const maxPages =
      this.pagination.totalResults / this.pagination.resultsPerPage;
    if (pageNum <= maxPages) {
      const currData = await this.getVideoPageData(pageToken);

      if (!currData) {
        return null;
      }

      this.allVideosData = this.allVideosData.concat(currData.items);

      if (currData.nextPageToken) {
        return await this.getAllVideosData(currData.nextPageToken, pageNum + 1);
      }
    }

    return this.allVideosData;
  },

  async getPageData() {
    const start =
      (this.pagination.currentPage - 1) * this.pagination.resultsPerPage;
    const end = start + this.pagination.resultsPerPage;

    const data = await this.getAllVideosData("", 1);
    return data.slice(start, end);
  },

  async getSubscriptionData() {
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

  async getStoryData() {
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

  toggleSubStatus(index) {
    const currentStatus = this.getSubStatus(index);
    const newStatus =
      currentStatus === "subscribed" ? "unsubscribed" : "subscribed";
    localStorage.setItem(`subStatus_${index}`, newStatus);
    return newStatus;
  },

  getSubStatus(index) {
    return localStorage.getItem(`subStatus_${index}`) || "unsubscribed";
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
