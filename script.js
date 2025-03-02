document.addEventListener("DOMContentLoaded", function () {
  const expandables = document.querySelectorAll(".expandable");

  expandables.forEach((expandable) => {
    expandable.addEventListener("click", function (event) {
      const buttonImage = this.querySelector(".ExpandButton img");

      // Collapse other expandables
      expandables.forEach((otherExpandable) => {
        if (otherExpandable !== this) {
          otherExpandable.classList.remove("expandable-opened");
          otherExpandable.querySelector(".ExpandButton img").src =
            "assets/images/icon-plus.svg";
        }
      });

      this.classList.toggle("expandable-opened");

      if (this.classList.contains("expandable-opened")) {
        buttonImage.src = "assets/images/icon-minus.svg";
      } else {
        buttonImage.src = "assets/images/icon-plus.svg";
      }
    });
  });
});
