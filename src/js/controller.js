import { YoutubeView } from "./view";
import { YoutubeModel } from "./model";

// Controller
export const YoutubeController = {
  init() {
    this.loadInitialData();
    this.bindEventListeners();
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
    // Load video data and wait for it to complete
    await this.loadCurrentPageData();

    // Once video data is loaded, load other data in parallel
    const subAndStoryData = await Promise.all(
      await YoutubeModel.getSubAndStoryData()
    );

    // Load subscription data
    const subscriptionContent = YoutubeView.renderSubs(subAndStoryData);
    document
      .querySelector(".subscriptions")
      .insertAdjacentHTML("beforeend", subscriptionContent);

    // Load story data
    const storyContent = YoutubeView.renderStories(subAndStoryData);
    document
      .querySelector(".story-gallery")
      .insertAdjacentHTML("beforeend", storyContent);

    // Initialize other UI elements
    document.querySelector(".pagination").innerHTML =
      YoutubeView.renderPagination();
    this.initPagination();

    // Initialize subscription buttons
    this.initializeSubButtons();

    // Initialize like buttons
    this.initializeLikeButtons();
  },

  initializeSubButtons() {
    const subBtns = document.querySelectorAll(".sub-btn");
    subBtns.forEach((subBtn, index) => {
      const isSubscribed = YoutubeModel.getSubStatus(index) === "subscribed";
      YoutubeView.updateUIForSubButton(subBtn, isSubscribed);
    });
  },

  initializeLikeButtons() {
    const likeBtns = document.querySelectorAll(".like-btn");
    likeBtns.forEach((likeBtn) => {
      const videoId = likeBtn.querySelector("[data-video-id]").dataset.videoId;
      const isLiked = YoutubeModel.getLikeStatus(videoId) === "like";
      YoutubeView.updateUIForLikeButton(
        likeBtn.querySelector(".fa-thumbs-up"),
        isLiked
      );
    });
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

  initPagination() {
    this.setupPaginationClickHandler(document.querySelector(".pagination"));
  },

  setupPaginationClickHandler(pagContainer) {
    YoutubeView.addHandlerClick(async (pageNumber) => {
      YoutubeModel.setCurrentPage(pageNumber);
      await this.loadCurrentPageData();
      pagContainer.innerHTML = YoutubeView.renderPagination();
    });
  },

  async loadCurrentPageData() {
    try {
      const videoPageData = await YoutubeModel.getVideoData();
      await this.renderPageData(videoPageData);
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
