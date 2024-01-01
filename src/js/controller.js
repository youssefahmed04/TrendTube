import { YoutubeView } from "./view";
import { YoutubeModel } from "./model";

// Controller
export const YoutubeController = {
  init() {
    this.bindEventListeners();
    this.loadInitialData();
    this.checkDarkModeSetting();
  },

  bindEventListeners() {
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

    const postContainer = document.querySelector(".main-content");
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

  async loadInitialData() {
    let videoContent = "";

    // Load subscription data
    const subscriptionData = await Promise.all(
      await YoutubeModel.getSubAndStoryData()
    );
    const subscriptionContent =
      YoutubeView.renderSubscriptions(subscriptionData);
    document
      .querySelector(".subscriptions")
      .insertAdjacentHTML("beforeend", subscriptionContent);

    // Load story data
    const storyData = await Promise.all(
      await YoutubeModel.getSubAndStoryData()
    );
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

    this.initPagination(document.querySelector(".pagination"));
  },

  handleDarkModeToggle() {
    const isDarkMode = document.body.classList.contains("dark-theme");
    YoutubeView.updateUIForDarkMode(!isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "light" : "dark");
  },

  checkDarkModeSetting() {
    const isDarkMode = localStorage.getItem("theme") === "dark";
    YoutubeView.updateUIForDarkMode(isDarkMode);
  },

  toggleSettingsMenu() {
    const settingsMenu = document.querySelector(".settings-menu");
    settingsMenu.classList.toggle("settings-menu-height");
  },

  goToProfile() {
    window.location = "profile.html";
  },

  toggleSub(subBtn, index) {
    const newStatus = YoutubeModel.toggleSubStatus(index);
    const isSubscribed = newStatus === "subscribed";
    YoutubeView.updateUIForSubButton(subBtn, isSubscribed);
  },

  toggleLike(likeBtn, videoId) {
    const newStatus = YoutubeModel.toggleLikeStatus(videoId);
    const isLike = newStatus === "like";
    YoutubeView.updateUIForLikeButton(likeBtn, isLike);
  },

  initPagination(pagContainer) {
    this.setupPaginationClickHandler(document.querySelector(".pagination"));
    this.loadCurrentPageData();
    pagContainer.innerHTML = YoutubeView.renderPagination();
  },

  setupPaginationClickHandler(pagContainer) {
    YoutubeView.addHandlerClick((pageNumber) => {
      YoutubeModel.setCurrentPage(pageNumber);
      this.loadCurrentPageData();
      pagContainer.innerHTML = YoutubeView.renderPagination();
    });
  },

  async loadCurrentPageData() {
    try {
      const pageData = await YoutubeModel.getVideoData();
      this.renderPageData(pageData);
    } catch (error) {
      console.error("Error loading page data:", error);
    }
  },

  async renderPageData(pageData) {
    const postsContainer = document.querySelector(".posts");
    postsContainer.innerHTML = "";

    for (const videoData of pageData.items) {
      try {
        const channelData = await YoutubeModel.getChannelData(
          videoData.snippet.channelId
        );
        const videoContent = YoutubeView.renderVideo(videoData, channelData);
        postsContainer.insertAdjacentHTML("beforeend", videoContent);
      } catch (error) {
        console.error("Error rendering video data:", error);
      }
    }
  },
};

document.addEventListener("DOMContentLoaded", () => YoutubeController.init());
