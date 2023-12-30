// View
export const YoutubeView = {
  renderVideoContent: function (videoData, headerData, i) {
    // Assuming videoData and headerData are the data objects received from the Model
    const videoSnippet = videoData?.items[i]?.snippet;
    const videoStatistics = videoData?.items[i]?.statistics;

    if (!videoSnippet || !videoStatistics) {
      return ""; // Return empty string if data is missing
    }

    // Extracting data
    const { title, publishedAt, thumbnails, tags } = videoSnippet;
    const { viewCount, likeCount, commentCount } = videoStatistics;
    const videoId = videoData.items[i].id;
    const timeAgo = this.calculateTimeAgo(publishedAt);

    // Construct tags
    const formattedTags = (tags || [])
      .slice(0, 2)
      .map((tag) => `<a href="#">#${tag}</a>`)
      .join(" ");

    // Construct the HTML
    return `
        <div class="post-container">
            <div class="post-row">
                <div class="user-profile">
                    <img src="${headerData.profilePic}" alt="Profile Picture" />
                    <div>
                        <p>${headerData.name}</p>
                        <span>${timeAgo}</span>
                    </div>
                </div>
                <a href="#"><i class="fas fa-ellipsis-v"></i></a>
            </div>
            <p class="post-text">${title} ${formattedTags}</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" class="post-vid" frameborder="0" allowfullscreen></iframe>
            <div class="post-row">
                <div class="activity-icons">
                    <div><i class="fa-solid fa-eye"></i> ${this.formatCount(
                      viewCount
                    )}</div>
                    <div><button class="like-btn"><i class="fa-solid fa-thumbs-up" data-video-id="video${i}"></i></button> ${this.formatCount(
      likeCount
    )}</div>
                    <div><i class="fa-solid fa-comments"></i> ${this.formatCount(
                      commentCount
                    )}</div>
                </div>
                <div class="post-profile-icon">
                    <img src="${headerData.profilePic}" alt="Profile Picture" />
                    <i class="fas fa-caret-down"></i>
                </div>
            </div>
        </div>
    `;
  },

  calculateTimeAgo: function (publishedAt) {
    const currentTime = new Date();
    const timePosted = new Date(publishedAt);
    const timeDifference = currentTime.getTime() - timePosted.getTime();

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) {
      return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
    } else if (minutes < 60) {
      return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
    } else if (hours < 24) {
      return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    } else if (days < 7) {
      return days === 1 ? "1 day ago" : `${days} days ago`;
    } else if (weeks < 4) {
      return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
    } else if (months < 12) {
      return months === 1 ? "1 month ago" : `${months} months ago`;
    } else {
      return years === 1 ? "1 year ago" : `${years} years ago`;
    }
  },

  formatCount: function (count) {
    if (count < 1000) {
      return count; // return the original number if less than 1000
    } else if (count < 1000000) {
      return (count / 1000).toFixed(1) + "K"; // convert to K for thousands
    } else {
      return (count / 1000000).toFixed(1) + "M"; // convert to M for millions
    }
  },

  renderSubscriptions: function (subData) {
    // Assuming subData is an array of subscription data objects
    return subData
      .map(
        (data) =>
          `
          <div class="subcription">
            <div class="left-event">
              <img
                src="${data.profilePic}"
              />
            </div>
            <div class="right-event">
              <a href="https://www.youtube.com/${data.channelTag}">${data.name}</a>
              <button class="sub-btn"> Subscribe</button>
            </div>
          </div>
        `
      )
      .join("");
  },

  renderStories: function (storyData) {
    // Assuming storyData is an array of story data objects
    return storyData
      .map((data, index) => {
        if (index < 4) {
          return `
            <div class="story story${
              index + 1
            }" style="background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5)), url(${
            data.profilePic
          })">
              <img src="${data.profilePic}" />
              <p>${data.name}</p>
            </div>
          `;
        } else {
          return "";
        }
      })
      .join("");
  },

  updateUIForDarkMode: function (isDarkMode) {
    const body = document.body;
    const darkBtn = document.getElementById("dark-btn");
    body.classList.toggle("dark-theme", isDarkMode);
    darkBtn?.classList.toggle("dark-btn-on", isDarkMode);
  },

  updateUIForSubButton: function (button, isSubscribed) {
    button.textContent = isSubscribed ? "Subscribed" : "Subscribe";
    button.classList.toggle("sub-btn-on", isSubscribed);
  },

  updateUIForLikeButton: function (button, isLiked) {
    button.classList.toggle("like-on", isLiked);
  },
};
