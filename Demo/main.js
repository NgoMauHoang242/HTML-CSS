const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const closeIcon = document.querySelector(".icon-close");

const registerForm = document.querySelector(".Register form");
const loginForm = document.querySelector(".Login form");

// Hiển thị popup
btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

// Đóng popup
closeIcon.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  wrapper.classList.remove("active");
});

// Chuyển sang form đăng ký
registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

// Quay lại form đăng nhập
loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

// Xử lý đăng ký
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = registerForm.querySelector('input[type="text"]').value;
  const email = registerForm.querySelector('input[type="email"]').value;
  const password = registerForm.querySelector('input[type="password"]').value;

  // Kiểm tra xem email đã tồn tại chưa
  if (localStorage.getItem(email)) {
    alert("Email này đã được đăng ký!");
    return;
  }

  // Lưu thông tin tài khoản vào localStorage
  const userData = { user, email, password };
  localStorage.setItem(email, JSON.stringify(userData));
  alert("Đăng ký thành công! Vui lòng đăng nhập.");
  wrapper.classList.remove("active"); // Quay về form đăng nhập
});

// Xử lý đăng nhập
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm.querySelector('input[type="email"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  // Lấy dữ liệu tài khoản từ localStorage
  const storedUser = localStorage.getItem(email);
  if (!storedUser) {
    alert("Tài khoản không tồn tại!");
    return;
  }

  const userData = JSON.parse(storedUser);
  if (userData.password === password) {
    alert("Đăng nhập thành công!");
    window.location.href = "TrangChu.html"; // Chuyển hướng sau khi đăng nhập
  } else {
    alert("Sai mật khẩu!");
  }
});
