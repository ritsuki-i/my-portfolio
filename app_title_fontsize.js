'resize DOMContentLoaded'.split(' ').forEach((event)=>{
  window.addEventListener(event, function () {
    if (window.innerWidth <= 960) {
      console.log(window.innerWidth);
      const playbtn = document.querySelectorAll(".long");
      const appimg = document.querySelectorAll(".appimg");
      for (let i = 0; i < playbtn.length; i++) {
        size = (playbtn[i].offsetWidth - appimg[i].offsetWidth - 20) / playbtn[i].textContent.length;
        console.log(size);
        playbtn[i].style.fontSize = size + "px";
      }
    }else{
      const playbtn = document.querySelectorAll(".long");
      for (let i = 0; i < playbtn.length; i++) {
        size = 3;
        playbtn[i].style.fontSize = size + "vh";
      }
    }
  });
});
