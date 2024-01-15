window.addEventListener("resize", function () {
  if (window.innerWidth <= 960) {
    const playbtn = document.querySelectorAll(".long");
    const appimg = document.querySelectorAll(".appimg");
    for (let i = 0; i < playbtn.length; i++) {
      let fontSize = parseFloat(window.getComputedStyle(playbtn[i]).fontSize);
      if (playbtn[i].textContent.length * fontSize > playbtn[i].offsetWidth - appimg[i].offsetWidth) {
        size = (playbtn[i].offsetWidth - appimg[i].offsetWidth) / playbtn[i].textContent.length;
        playbtn[i].style.fontSize = size + "px";
      }
    }
  }
});
