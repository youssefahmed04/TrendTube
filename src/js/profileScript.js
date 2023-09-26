import { getVideoData } from "./script.js";

if (module.hot) {
  module.hot.accept(function () {
    location.reload();
  });
}

const postColContainer = document.querySelector(".post-col");

for (let index = 0; index < 5; index++) {
  getVideoData(postColContainer, index);
}
