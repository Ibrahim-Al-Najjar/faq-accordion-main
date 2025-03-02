document.addEventListener("DOMContentLoaded", function () {
  const expandables = document.querySelectorAll(".expandable");

  expandables.forEach((expandable) => {
    expandable.addEventListener("click", function (event) {
      const buttonImage = this.querySelector(".ExpandButton img");

      this.classList.toggle("expandable-opened");

      if (this.classList.contains("expandable-opened")) {
        buttonImage.src = "assets/images/icon-minus.svg";
      } else {
        buttonImage.src = "assets/images/icon-plus.svg";
      }
    });
  });
});
