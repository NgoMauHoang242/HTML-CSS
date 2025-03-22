const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const closeIcon = document.querySelector(".icon-close");

const registerForm = document.querySelector(".Register form");
const loginForm = document.querySelector(".Login form");

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

closeIcon.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  wrapper.classList.remove("active");
});

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = registerForm.querySelector('input[type="text"]').value;
  const email = registerForm.querySelector('input[type="email"]').value;
  const password = registerForm.querySelector('input[type="password"]').value;

  if (localStorage.getItem(email)) {
    alert("Email này đã được đăng ký!");
    return;
  }

  const userData = { user, email, password };
  localStorage.setItem(email, JSON.stringify(userData));
  alert("Đăng ký thành công! Vui lòng đăng nhập.");
  wrapper.classList.remove("active");
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm.querySelector('input[type="email"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  const storedUser = localStorage.getItem(email);
  if (!storedUser) {
    alert("Tài khoản không tồn tại!");
    return;
  }

  const userData = JSON.parse(storedUser);
  if (userData.password === password) {
    alert("Đăng nhập thành công!");
    window.location.href = "TrangChu.html";
  } else {
    alert("Sai mật khẩu!");
  }
});
