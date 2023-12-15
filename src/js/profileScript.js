"use strict";

import "regenerator-runtime/runtime";

import { getVideoData } from "./script.js";

if (module.hot) {
  module.hot.accept(function () {
    location.reload();
  });
}

const postColContainer = document.querySelector(".post-col");

document.addEventListener("DOMContentLoaded", function () {
  for (let index = 0; index < 5; index++) {
    getVideoData(postColContainer, index);
  }
});
