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

if (copyBtn) { // make sure element exists
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(wifiPassword.textContent).then(() => {
      // Show success message
      copyMsg.style.display = "inline";
      setTimeout(() => {
        copyMsg.style.display = "none";
      }, 2000); // hide after 2 seconds
    }).catch(err => {
      console.log("Failed to copy!", err);
    });
  });
}
