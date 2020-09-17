let previewLink = document.querySelector(".preview-info__link");
previewLink.onclick = function () {
  let resumeContainer = document.querySelector(".resume-container");

  document.querySelector(".preview-info").setAttribute("id", "hingeContainer");

  setTimeout(() => {
    document.querySelector(".preview-info").classList.add("hide");
    resumeContainer.classList.remove("hide");
    resumeContainer.setAttribute("id", "resumeContainer");
  }, 2000);

};
