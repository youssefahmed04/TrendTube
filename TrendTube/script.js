"use strict";

import "regenerator-runtime/runtime";

const API_KEY = "AIzaSyDJvk4A_K5SVv78Rl7Qaun_qFmU0_Xjo9Q";

const settingsMenu = document.querySelector(".settings-menu");
const userProfileIcon = document.querySelector(".nav-user-icon");
const darkBtn = document.getElementById("dark-btn");
const postsContainer = document.querySelector(".posts");
const subContainer = document.querySelector(".subscriptions");
const storyContainer = document.querySelector(".story-gallery");
const body = document.body;

const accessHeaderData = function (channelData) {
  const snippet = channelData.items[0].snippet;
  const profilePic = snippet.thumbnails.high.url;
  const name = snippet.title;
  return { profilePic, name };
};

const getChannelData = async function (channelId) {
  try {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`
    );
    const data = await res.json();
    return accessHeaderData(data);
  } catch (error) {
    console.error(error);
  }
};

const renderVideoContent = function (videoData, headerData, index) {
  const videoSnippet = videoData?.items[index].snippet;
  if (videoSnippet != undefined) {
    const getVideoId = videoData.items[index].id;
    const videoStatistics = videoData.items[index].statistics;
    let viewCount = +videoStatistics.viewCount;
    let likeCount = +videoStatistics.likeCount;
    let commentCount = +videoStatistics.commentCount;

    const currentTime = new Date();
    const datePosted = new Date(videoSnippet.publishedAt);
    const timeDifference = currentTime - datePosted;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    let time = 0;
    let tag = "";
    if (days == 0 && hours == 0 && minutes == 0) {
      time = seconds;
      tag = " seconds ago";
      if (seconds == 1) {
        tag = " second ago";
      }
    } else if (days == 0 && hours == 0) {
      time = minutes;
      tag = " minutes ago";
      if (minutes == 1) {
        tag = " minute ago";
      }
    } else if (days == 0) {
      time = hours;
      if (hours == 1) {
        tag = " hour ago";
      }
      tag = " hours ago";
    } else {
      time = days;
      tag = " days ago";
      if (days == 1) {
        tag = " day ago";
      }
    }

    const countTrunc = function (count) {
      if (count >= 1000000) {
        count = (count / 1000000).toFixed(1);
        if (count.charAt(count.length - 1) == "0") {
          count = Math.trunc(count);
        }
        count = count.toString() + "M";
      } else if (count > 1000) {
        count = (count / 1000).toFixed(1);
        if (count.charAt(count.length - 1) == "0") {
          count = Math.trunc(count);
        }
        count = count.toString() + "K";
      }
      return count;
    };

    let tag1 = " ";
    let tag2 = " ";
    if (videoSnippet?.tags != undefined) {
      if (videoSnippet?.tags[0] != undefined) {
        tag1 = "#" + videoSnippet?.tags[0];
      }
      if (videoSnippet?.tags[1] != undefined) {
        tag2 = "#" + videoSnippet?.tags[1];
      }
    }

    const markup = `
    <div class="post-container">
      <div class="post-row">
        <div class="user-profile">
          <img src="${headerData.profilePic}" />
          <div>
            <p> ${headerData.name}</p>
            <span> ${time + tag} </span>
          </div>
        </div>
        <a href="#"><i class="fas fa-ellipsis-v"></i></a>
      </div>
      <p class="post-text">
        ${videoSnippet.title}
        <a href="#">${tag1}</a> <a href="#">${tag2}</a>
      </p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${getVideoId}" class="post-vid" frameborder="0" allowfullscreen></iframe>
      <div class="post-row">
        <div class="activity-icons">
          <div><i class="fa-solid fa-eye"></i> ${countTrunc(viewCount)}</div>
          <div><button class="like-btn"><i class="fa-solid fa-thumbs-up" data-video-id="video${index}"></i></button> ${countTrunc(
      likeCount
    )}</div>
          <div><i class="fa-solid fa-comments"></i> ${countTrunc(
            commentCount
          )}</div>
        </div>
        <div class="post-profile-icon">
          <img src="https://yt3.ggpht.com/yti/AOXPAcWODTAzDO8acHR5anE77yyjaEuiWqAQ_casQ_Kpcg=s88-c-k-c0x00ffffff-no-rj" />
          <i class="fas fa-caret-down"></i>
        </div>
      </div>
    </div>
  `;
    return markup;
  }
};

const getVideoData = async function (index) {
  try {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${API_KEY}`
    );
    const data = await res.json();
    const headerData = await getChannelData(
      data.items[index].snippet.channelId
    );
    postsContainer.insertAdjacentHTML(
      "beforeend",
      renderVideoContent(data, headerData, index)
    );
  } catch (error) {
    console.error(error);
  }
};

const initializeLikeButtons = function () {
  const applyLikeButtonBehavior = function (postElement) {
    const likeBtn = postElement.querySelector(".fa-thumbs-up");
    if (!likeBtn) return;

    const videoId = likeBtn.getAttribute("data-video-id");
    const localStorageKey = `liked_${videoId}`;

    if (localStorage.getItem(localStorageKey) === "on") {
      likeBtn.classList.add("like-on");
    }

    likeBtn.addEventListener("click", function () {
      likeBtn.classList.toggle("like-on");

      if (localStorage.getItem(localStorageKey) === "on") {
        localStorage.setItem(localStorageKey, "off");
      } else {
        localStorage.setItem(localStorageKey, "on");
      }
    });
  };

  const observePostsContainer = function () {
    const postsContainer = document.querySelector(".posts");

    if (!postsContainer) return;

    const observer = new MutationObserver(function (mutationsList) {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((addedNode) => {
            if (addedNode instanceof HTMLElement) {
              applyLikeButtonBehavior(addedNode);
            }
          });
        }
      }
    });

    observer.observe(postsContainer, { childList: true, subtree: true });
  };

  observePostsContainer();
};

for (let index = 0; index < 5; index++) {
  getVideoData(index);
}

document.addEventListener("DOMContentLoaded", function () {
  initializeLikeButtons();
});

const renderSubscriptions = function (subData) {
  const markup = `
  <div class="subcription">
    <div class="left-event">
      <img
        src="${subData.profilePic}"
      />
    </div>
    <div class="right-event">
      <h3>${subData.name}</h3>
      <button class="sub-btn"> Subscribe</button>
    </div>
  </div>
  `;
  return markup;
};

const initializeButtonState = function (subBtn, index) {
  const subStatus = localStorage.getItem(`subStatus${index}`);
  if (subStatus === "subscribed") {
    subBtn.classList.remove("sub-btn-off");
    subBtn.classList.add("sub-btn-on");
    subBtn.textContent = "Subscribed";
  } else if (subStatus === "unsubscribed") {
    subBtn.classList.remove("sub-btn-on");
    subBtn.classList.add("sub-btn-off");
    subBtn.textContent = "Subscribe";
  }
};

const subscribe = function (subBtn, index) {
  if (subBtn.classList.contains("sub-btn-off")) {
    subBtn.textContent = `Subscribed`;
    subBtn.classList.add("sub-btn-on");
    subBtn.classList.remove("sub-btn-off");
    localStorage.setItem(`subStatus${index}`, "subscribed");
  } else if (subBtn.classList.contains("sub-btn-on")) {
    subBtn.textContent = "Subscribe";
    subBtn.classList.remove("sub-btn-on");
    subBtn.classList.add("sub-btn-off");
    localStorage.setItem(`subStatus${index}`, "unsubscribed");
  } else {
    subBtn.classList.add("sub-btn-on");
    subBtn.textContent = "Subscribed";
    localStorage.setItem(`subStatus${index}`, "subscribed");
  }
};

const getSubscriptionData = async function (index) {
  try {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&pageToken=CAUQAA&key=${API_KEY}`
    );
    const data = await res.json();
    const subData = await getChannelData(data.items[index].snippet.channelId);

    subContainer.insertAdjacentHTML(
      "afterbegin",
      renderSubscriptions(subData, index)
    );

    const subBtn = subContainer.querySelector(".sub-btn");
    initializeButtonState(subBtn, index);

    if (subBtn) {
      subBtn.addEventListener("click", function () {
        subscribe(subBtn, index);
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const renderStories = function (storyData, videoData, index) {
  let backgroundImage = videoData.items[index].snippet.thumbnails?.maxres?.url;

  if (backgroundImage == undefined) {
    backgroundImage = videoData.items[index].snippet.thumbnails.high.url;
  }

  const markup = `
  <div class="story story${
    index + 2
  }" style="background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5)), url(${backgroundImage})">
    <img src="${storyData.profilePic}" />
    <p>${storyData.name}</p>
  </div>
`;
  return markup;
};

const getStoryData = async function (index) {
  try {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&pageToken=CAUQAA&key=${API_KEY}`
    );
    const data = await res.json();
    const storyData = await getChannelData(data.items[index].snippet.channelId);

    storyContainer.insertAdjacentHTML(
      "beforeend",
      renderStories(storyData, data, index)
    );
  } catch (error) {
    console.error(error);
  }
};

for (let index = 0; index < 5; index++) {
  getSubscriptionData(index);

  if (index != 4) {
    getStoryData(index);
  }
}

const toggleSettingsMenu = function () {
  settingsMenu.classList.toggle("settings-menu-height");
};

userProfileIcon.addEventListener("click", toggleSettingsMenu);

darkBtn.addEventListener("click", function () {
  darkBtn.classList.toggle("dark-btn-on");
  body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme") === "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.getItem("theme") === "light") {
  darkBtn.classList.remove("dark-btn-on");
  body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") === "dark") {
  darkBtn.classList.add("dark-btn-on");
  body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}
