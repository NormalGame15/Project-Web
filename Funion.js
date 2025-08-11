const texts = [
  "IT Development",
  "IT Infrastructure",
  "Data/Analytic",
  "Design",
  "IT Support",
  "Emerring Technology",
  "IT Management",
];

let count = 0;
let index = 0;
let currentText = "";
let displayText = "";

function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  displayText = currentText.slice(0, ++index);
  document.getElementById("typewriter").textContent = displayText;

  if (index === currentText.length) {
    setTimeout(erase, 2000);
  } else {
    setTimeout(type, 100);
  }
}

function erase() {
  let chars = displayText.split("");
  let eraseIndex = chars.findIndex((c) => c !== " ");
  if (eraseIndex !== -1) {
    chars[eraseIndex] = " ";
    displayText = chars.join("");
    document.getElementById("typewriter").textContent = displayText;
    setTimeout(erase, 50);
  } else {
    count = Math.floor(Math.random() * texts.length);
    index = 0;
    setTimeout(type, 500);
  }
}
type();

function openContact() {
  document.getElementById("contactModal").style.display = "block";
}

function closeContact() {
  document.getElementById("contactModal").style.display = "none";
}

function randomLink() {
  const links = [
    "https://www.instagram.com/andrea_ninida?igsh=bWEyejhzczdmNWw%3D&utm_source=qr",
    "https://www.instagram.com/07_stb?igsh=MWFiaXE1OWs0MGUwOA%3D%3D&utm_source=qr",
    "https://www.instagram.com/im_not_urxboy?igsh=cG5qNWh5cTRuaWRq",
    "https://www.instagram.com/bmoo.__?igsh=MWNrZmdzMjhtamw3bA%3D%3D&utm_source=qr",
    "https://www.instagram.com/mfsc_derd49/?igsh=MWFiaXE1OWs0MGUwOA%3D%3D&utm_source=qr#",
  ];

  const randomIndex = Math.floor(Math.random() * links.length);

  window.location.href = links[randomIndex];
}

function checkLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  if (username === "Admin" && password === "22313") {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "Home.html";
  } else {
    errorMsg.innerText = "ຊື່ຫຼືລະຫັດຜິດ!";
  }
}

function checkSession() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const loginBtn = document.getElementById("loginButton");
  const profileIcon = document.getElementById("profileIcon");

  if (isLoggedIn === "true") {
    loginBtn.style.display = "none";
    profileIcon.style.display = "block";
  } else {
    loginBtn.style.display = "block";
    profileIcon.style.display = "none";
  }
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  location.reload();
}

function openProfile() {
  document.getElementById("profileModal").style.display = "block";
}

function closeProfile() {
  document.getElementById("profileModal").style.display = "none";
}

function editProfile() {
  alert("ຟັງຊັນ Edit Profile ຢູ່ໃນການພັດທະນາ 🔧");
}

document.querySelectorAll('.other-box-it').forEach(box => {
  box.addEventListener('click', () => {
    box.classList.toggle('active');
  });
});
