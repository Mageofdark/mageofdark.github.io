function toggleDarkMode() {
    const html = document.documentElement;
    const isDark = html.getAttribute("data-bs-theme") === "dark";

    const newTheme = isDark ? "light" : "dark";
    html.setAttribute("data-bs-theme", newTheme);

    localStorage.setItem("theme", newTheme);

    if(newTheme === "dark"){
      themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
    }else{
      themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    }
}

// al cargar
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-bs-theme", savedTheme);

const themeToggle = document.getElementById("themeToggle");

if(savedTheme === "dark"){
    themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
}else{
    themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
}