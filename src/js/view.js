import icons from "../assets/imgs/icons.svg";
import { YoutubeModel } from "./model";

// View
export const YoutubeView = {
  renderVideo(videoData, headerData, i) {
    const videoSnippet = videoData?.snippet;
    const videoStatistics = videoData?.statistics;

    if (!videoSnippet || !videoStatistics) {
      return;
    }
    4;
    const { title, publishedAt, tags } = videoSnippet;
    const { viewCount, likeCount, commentCount } = videoStatistics;
    const videoId = videoData.id;
    const timeAgo = this.calculateTimeAgo(publishedAt);

    const formattedTags = (tags || [])
      .slice(0, 2)
      .map((tag) => `<a href="#">#${tag}</a>`)
      .join(" ");

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

  calculateTimeAgo(publishedAt) {
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

  formatCount(count) {
    if (count < 1000) {
      return count; // return the original number if less than 1000
    } else if (count < 1000000) {
      return (count / 1000).toFixed(1) + "K"; // convert to K for thousands
    } else {
      return (count / 1000000).toFixed(1) + "M"; // convert to M for millions
    }
  },

  renderSubs(subData) {
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

  renderStories(storyData) {
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

  updateUIForDarkMode(isDarkMode) {
    const body = document.body;
    const darkBtn = document.getElementById("dark-btn");
    body.classList.toggle("dark-theme", isDarkMode);
    darkBtn?.classList.toggle("dark-btn-on", isDarkMode);
  },

  updateUIForSubButton(button, isSubscribed) {
    button.textContent = isSubscribed ? "Subscribed" : "Subscribe";
    button.classList.toggle("sub-btn-on", isSubscribed);
  },

  updateUIForLikeButton(button, isLiked) {
    button.classList.toggle("like-on", isLiked);
  },

  paginationContainer: document.querySelector(".pagination"),

  addHandlerClick(handler) {
    this.paginationContainer.addEventListener("click", async function (e) {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;

      const data = await YoutubeModel.fetchYouTubeData();

      if (btn.classList.contains("pagination__btn--next")) {
        await YoutubeModel.setPageToken(data.nextPageToken);
      } else if (btn.classList.contains("pagination__btn--prev")) {
        await YoutubeModel.setPageToken(data.prevPageToken);
      }
      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  },

  renderPagination() {
    const currPage = YoutubeModel.getCurrentPage();

    const numPages = Math.ceil(
      YoutubeModel.getTotalResults() / YoutubeModel.getResultsPerPage()
    );

    const prevBtn = `
          <button data-goto="${
            currPage - 1
          }" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                  <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currPage - 1}</span>
              </button>
          `;

    const fwrdBtn = `<button data-goto="${
      currPage + 1
    }" class="btn--inline pagination__btn--next">
                  <span>Page ${currPage + 1}</span>
                  <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                  </svg>
                </button>
          `;

    // Page 1, and there are other pages
    if (currPage === 1 && numPages > 1) {
      return fwrdBtn;
    }

    //Last page
    if (currPage === numPages && numPages > 1) {
      return prevBtn;
    }

    //Other page
    if (currPage < numPages) {
      return prevBtn + fwrdBtn;
    }

    // Page 1, and there are no other pages
    return "";
  },
};
