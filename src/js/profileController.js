"use strict";

import "regenerator-runtime/runtime";
import { YoutubeView } from "./view";
import { YoutubeModel } from "./model";

if (module.hot) {
  module.hot.accept(function () {
    location.reload();
  });
}

// Profile Controller
export const ProfileController = {
  init() {
    this.loadInitialData();
  },

  loadInitialData() {
    document
      .querySelector(".profile-container")
      .insertAdjacentHTML("afterbegin", this.loadProfileHeader);
  },

  async loadProfileHeader() {
    console.log("cool");
    try {
      const url = new URL(window.location.href);
      const channelId = url.searchParams.get("channelId");
      console.log(channelId);
      const channelData = await YoutubeModel.getChannelData(channelId);
      YoutubeView.renderProfileHeader(channelData);
    } catch (error) {
      console.error(error);
    }
  },
};

document.addEventListener("DOMContentLoaded", () => ProfileController.init());
