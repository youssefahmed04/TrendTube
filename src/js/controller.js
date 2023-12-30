import { YoutubeView } from "./view";
import { YoutubeModel } from "./model";

// Controller
export const YoutubeController = {
  init: function () {
    this.bindEventListeners();
    this.loadInitialData();
    this.checkDarkModeSetting();
  },

  bindEventListeners: function () {
    const darkBtn = document.getElementById("dark-btn");
    darkBtn?.addEventListener("click", this.handleDarkModeToggle);

    const seeProfileLink = document.getElementById("see-profile");
    seeProfileLink?.addEventListener("click", this.goToProfile);

    const userProfileIcon = document.querySelector(".nav-user-icon");
    userProfileIcon.addEventListener("click", this.toggleSettingsMenu);

    const subContainer = document.querySelector(".subscriptions");
    function handleSubClick(event) {
      const subBtn = event.target.closest(".sub-btn");
      if (subBtn) {
        const allSubBtns = subContainer.querySelectorAll(".sub-btn");
        const index = Array.from(allSubBtns).indexOf(subBtn);
        this.toggleSub(subBtn, index);
      }
    }
    if (subContainer) {
      subContainer.addEventListener("click", handleSubClick.bind(this));
    }

    const postContainer = document.querySelector(".posts");
    function handlePostClick(event) {
      const likeBtn = event.target.closest(".like-btn");
      if (likeBtn) {
        const videoId =
          likeBtn.querySelector("[data-video-id]").dataset.videoId;
        this.toggleLike(likeBtn.querySelector(".fa-thumbs-up"), videoId);
      }
    }
    if (postContainer) {
      postContainer.addEventListener("click", handlePostClick.bind(this));
    }
  },

  loadInitialData: async function () {
    let videoContent = "";

    const loadVideos = async function (pagetoken = "", vidCount) {
      try {
        if (vidCount !== 4) {
          const videoData = await YoutubeModel.getVideoData(pagetoken);
          for (let i = 0; i < videoData.items.length; i++) {
            const channelData = await YoutubeModel.getChannelData(
              videoData.items[i].snippet.channelId
            );
            videoContent += YoutubeView.renderVideoContent(
              videoData,
              channelData,
              i
            );
          }
          return await loadVideos(videoData.nextPageToken, vidCount + 1);
        } else {
          return videoContent;
        }
      } catch (error) {
        console.error("Error loading videos:", error);
        return "";
      }
    };
    (async () => {
      try {
        const videos = await loadVideos("", 0);
        document
          .querySelector(".posts")
          .insertAdjacentHTML("beforeend", videos);
      } catch (error) {
        console.error("Error inserting video content:", error);
      }
    })();

    // Load subscription data
    const subscriptionData = await Promise.all(
      await YoutubeModel.getSubscriptionData()
    );
    const subscriptionContent =
      YoutubeView.renderSubscriptions(subscriptionData);
    document
      .querySelector(".subscriptions")
      .insertAdjacentHTML("beforeend", subscriptionContent);

    // Load story data
    const storyData = await Promise.all(await YoutubeModel.getStoryData());
    const storyContent = YoutubeView.renderStories(storyData);
    document
      .querySelector(".story-gallery")
      .insertAdjacentHTML("beforeend", storyContent);

    // Initialize subscription buttons
    const subBtns = document.querySelectorAll(".sub-btn");
    subBtns.forEach((subBtn, index) => {
      const isSubscribed = YoutubeModel.getSubStatus(index) === "subscribed";
      YoutubeView.updateUIForSubButton(subBtn, isSubscribed);
    });

    // Initialize like buttons
    const likeBtns = document.querySelectorAll(".like-btn");
    likeBtns.forEach((likeBtn, videoId) => {
      const isLiked = YoutubeModel.getLikeStatus(`video${videoId}`) === "like";
      YoutubeView.updateUIForLikeButton(
        likeBtn.querySelector(".fa-thumbs-up"),
        isLiked
      );
    });
  },

  handleDarkModeToggle: function () {
    const isDarkMode = document.body.classList.contains("dark-theme");
    YoutubeView.updateUIForDarkMode(!isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "light" : "dark");
  },

  checkDarkModeSetting: function () {
    const isDarkMode = localStorage.getItem("theme") === "dark";
    YoutubeView.updateUIForDarkMode(isDarkMode);
  },

  toggleSettingsMenu: function () {
    const settingsMenu = document.querySelector(".settings-menu");
    settingsMenu.classList.toggle("settings-menu-height");
  },

  goToProfile: function () {
    window.location = "profile.html";
  },

  toggleSub: function (subBtn, index) {
    const newStatus = YoutubeModel.toggleSubStatus(index);
    const isSubscribed = newStatus === "subscribed";
    YoutubeView.updateUIForSubButton(subBtn, isSubscribed);
  },

  toggleLike: function (likeBtn, videoId) {
    const newStatus = YoutubeModel.toggleLikeStatus(videoId);
    const isLike = newStatus === "like";
    YoutubeView.updateUIForLikeButton(likeBtn, isLike);
  },
};

document.addEventListener("DOMContentLoaded", () => YoutubeController.init());
