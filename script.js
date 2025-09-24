// ----------------------
// Wi-Fi Sidebar
// ----------------------
const wifiBtn = document.getElementById("wifi-btn");
const wifiSidebar = document.getElementById("wifi-sidebar");
const closeBtn = document.getElementById("close-sidebar");

wifiBtn.addEventListener("click", () => {
  wifiSidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  wifiSidebar.classList.remove("active");
});

// ----------------------
// Copy Wi-Fi Password
// ----------------------
const copyBtn = document.getElementById("copy-btn");
const wifiPassword = document.getElementById("wifi-password");
const copyMsg = document.getElementById("copy-msg");

if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(wifiPassword.textContent).then(() => {
      copyMsg.style.display = "inline";
      setTimeout(() => {
        copyMsg.style.display = "none";
      }, 2000);
    }).catch(err => {
      console.log("Failed to copy!", err);
    });
  });
}

// ----------------------
// Review Modal
// ----------------------
const reviewBtn = document.getElementById("review-btn");
const reviewModal = document.getElementById("review-modal");
const closeModal = document.getElementById("close-modal");

reviewBtn.addEventListener("click", (e) => {
  e.preventDefault();
  reviewModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  reviewModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === reviewModal) {
    reviewModal.style.display = "none";
  }
});
