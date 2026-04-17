// Aplicar tema al cargar la página
(function () {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark-mode");
  } else if (!savedTheme) {
    // Si no hay preferencia guardada, usar la del sistema
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark-mode");
    }
  }
})();

// Función para alternar modo oscuro
function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle("dark-mode");

  if (isDark) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}