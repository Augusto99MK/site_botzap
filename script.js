document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav_link");

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href");
      let targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Altura da barra de navegação
        const navHeight = document.querySelector("header").offsetHeight;

        // Posição do início da seção considerando a altura da barra de navegação
        let targetPosition =
          targetElement.getBoundingClientRect().top +
          window.scrollY -
          navHeight;

        // Ajuste adicional para a seção de início para garantir que não haja espaço extra na rolagem suave
        if (targetId === "#inicio") {
          targetPosition -= 40; // ajuste de 40 pixels para garantir que o início seja corretamente exibido
        }

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  const btn = document.getElementById("botao");
  const menu = document.getElementById("menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});
