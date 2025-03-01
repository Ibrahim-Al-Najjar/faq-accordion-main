document.addEventListener("DOMContentLoaded", function () {
  const expandButtons = document.querySelectorAll(".ExpandButton");

  expandButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const expandable = this.closest(".expandable");
      const buttonImage = this.querySelector("img");

      if (expandable) {
        expandable.classList.toggle("expandable-opened");

        if (expandable.classList.contains("expandable-opened")) {
          buttonImage.src = "assets/images/icon-minus.svg";
        } else {
          buttonImage.src = "assets/images/icon-plus.svg";
        }
      }
    });
  });
});
