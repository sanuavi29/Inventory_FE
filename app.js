// Tabs and forms
const loginBtn = document.getElementById("loginTab");
const registerBtn = document.getElementById("registerTab");

const loginFormEl = document.getElementById("loginForm");
const registerFormEl = document.getElementById("registerForm");

const authContainer = document.getElementById("authSection");
const dashboardContainer = document.getElementById("appSection");

const adminLabel = document.getElementById("adminName");
const logoutBtn = document.getElementById("logoutButton");

const alertBox = document.getElementById("message");

const STORAGE_KEY = "inventory-token";


// Display messages
function displayMessage(message, type = "success") {

  alertBox.textContent = message;
  alertBox.className = `message show ${type}`;

  setTimeout(() => {
    alertBox.className = "message";
  }, 3000);
}


// Save token
function storeToken(token) {
  localStorage.setItem(STORAGE_KEY, token);
}


// Get token
function readToken() {
  return localStorage.getItem(STORAGE_KEY);
}


// Remove token
function removeToken() {
  localStorage.removeItem(STORAGE_KEY);
}


// Switch login/register tabs
function changeTab(tabName) {

  if (tabName === "login") {

    loginBtn.classList.add("active");
    registerBtn.classList.remove("active");

    loginFormEl.classList.remove("hidden");
    registerFormEl.classList.add("hidden");

  } else {

    registerBtn.classList.add("active");
    loginBtn.classList.remove("active");

    registerFormEl.classList.remove("hidden");
    loginFormEl.classList.add("hidden");
  }
}


// Show dashboard or auth section
function updateScreen(isLoggedIn) {

  if (isLoggedIn) {

    authContainer.classList.add("hidden");
    dashboardContainer.classList.remove("hidden");

  } else {

    authContainer.classList.remove("hidden");
    dashboardContainer.classList.add("hidden");
  }
}


// Logout
function logoutUser() {

  removeToken();

  updateScreen(false);

  displayMessage("Logged out");
}


// Events
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    changeTab("login");
  });
}

if (registerBtn) {
  registerBtn.addEventListener("click", () => {
    changeTab("register");
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", logoutUser);
}