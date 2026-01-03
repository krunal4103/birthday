function goGift() {
  createStarShower();

  // wait before moving to next page
  setTimeout(() => {
    window.location.href = "gift.html";
  }, 2500);
}

document.querySelectorAll(".video-container").forEach(video => {
  video.addEventListener("click", () => {
    window.location.href = "coupon.html";
  });
});


document.querySelectorAll(".coupon").forEach(box => {
  box.addEventListener("click", () => {
    window.location.href = "order.html";
  });
});






function noClick() {
  alert("WHY DID YOU CLICK NO 😤 TRY AGAIN!");
}

function openCoupons() {
  window.location.href = "coupon.html";
}

function openMemories() {
  window.location.href = "memories.html";
}

function createStarShower() {
  const container = document.getElementById("star-container");

  for (let i = 0; i < 60; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.innerHTML = "⭐ ❤️ ⭐ ";

    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = Math.random() * 2 + 2 + "s";
    star.style.fontSize = Math.random() * 20 + 15 + "px";

    container.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 4000);
  }
}

