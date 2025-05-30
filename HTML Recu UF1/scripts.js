// MENU DE USUARI
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('botoMenuUser');
  const menu = document.querySelector('.menuUsuari');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      menu.classList.toggle('visible');
    });

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !toggleBtn.contains(e.target)) {
        menu.classList.remove('visible');
      }
    });
  }

  // NOTIFICACIONS
  const notifBtn = document.getElementById("notificacionsBtn");
  const notifPanel = document.getElementById("notificacionsPanel");
  const tancarBtn = document.getElementById("tancarNotificacions");

  if (notifBtn && notifPanel) {
    notifBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      notifPanel.classList.toggle("active");
    });

    document.addEventListener("click", function (e) {
      const clickedInside = notifPanel.contains(e.target);
      const clickedButton = notifBtn.contains(e.target);
      if (!clickedInside && !clickedButton) {
        notifPanel.classList.remove("active");
      }
    });
  }

  if (tancarBtn && notifPanel) {
    tancarBtn.addEventListener("click", function () {
      notifPanel.classList.remove("active");
    });
  }

  // CARRET
  const carrBtn = document.getElementById("carretBtn");
  const carrPanel = document.getElementById("carretPanel");
  const tancarBtn2 = document.getElementById("tancarCarret");

  if (carrBtn && carrPanel) {
    carrBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      carrPanel.classList.toggle("active");
    });

    document.addEventListener("click", function (e) {
      const clickedInside = carrPanel.contains(e.target);
      const clickedButton = carrBtn.contains(e.target);
      if (!clickedInside && !clickedButton) {
        carrPanel.classList.remove("active");
      }
    });
  }

  if (tancarBtn2 && carrPanel) {
    tancarBtn2.addEventListener("click", function () {
      carrPanel.classList.remove("active");
    });
  }

  // FINALITZAR COMPRA
  const finalitzarBtn = document.getElementById("finalitzarBtn");
  const overlayFinalitzar = document.getElementById("overlayFinalitzar");

  if (finalitzarBtn && overlayFinalitzar) {
    finalitzarBtn.addEventListener("click", (e) => {
      e.preventDefault();
      overlayFinalitzar.style.display = "flex";
    });
  }

  // AFEGIR TARJETA DE CREDIT
  const tarjetaBtn = document.getElementById("afegirTarjetaBtn");
  const overlayTarjeta = document.getElementById("overlayTarjeta");

  if (tarjetaBtn && overlayTarjeta) {
    tarjetaBtn.addEventListener("click", (e) => {
      e.preventDefault();
      overlayTarjeta.style.display = "flex";
    });
  }
});
