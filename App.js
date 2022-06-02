const wrapper = document.querySelector(".slidderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // console.log("you click!" + index);
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});
