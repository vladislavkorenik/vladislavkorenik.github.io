let previewLink = document.querySelector(".preview-info__link");
previewLink.onclick = function () {
  document.querySelector(".preview-info").setAttribute("id", "hingeContainer");
  setTimeout(() => {
    document.querySelector(".preview-info").classList.add("hide");
    document.querySelector(".resume-container").classList.remove("hide");
    document.querySelector(".resume-container").setAttribute("id", "resumeContainer");
  }, 2000);
};
