function calcularImpacto() {
  const posts = parseInt(document.getElementById("posts").value);
  const tipo = document.getElementById("type").value;
  const duracion = parseFloat(document.getElementById("duration").value)
  document.getElementById("result").style.display = "block";
document.getElementById("actionButtons").style.display = "flex";


  let factor = 0;

  // Basado en The Shift Project
  if (tipo === "image") {
    factor = 0.15; // gCO₂ por imagen promedio
  } else if (tipo === "video") {
    factor = duracion * 60 * 1.5; // gCO₂ por segundo
  } else {
    factor = (0.15 + (duracion * 60 * 1.5)) / 2;
  }

  const totalGramos = factor * posts;
  const totalKilos = (totalGramos / 1000).toFixed(2);

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <strong>🌍 Tu Impact Score estimado es:</strong><br><br>
    <h2>${totalKilos} kg de CO₂ al mes</h2>
    <p>Este resultado es una estimación basada en el tipo y cantidad de contenido que publicas.</p>
    <p><em>¿Quieres un informe profesional certificado y estrategias para reducir tu huella?</em></p>
    <a href="https://tu-landing-impactscore.com/pro" target="_blank" style="color:#00b894;"><strong>👉 Ir a la versión Pro</strong></a>
  `;
}
function descargarInforme() {
  alert("Funcionalidad de descarga de informe premium próximamente disponible. Gracias por tu interés.");
  // Aquí puedes integrar un enlace de descarga o pago más adelante.
}

function irAMentoria() {
  window.open("https://tumentoria.com/landing", "_blank"); // Sustituye esta URL por tu página real
}

function compartirScore() {
  const resultText = document.getElementById("result").innerText;
  const shareText = `Este es mi Impact Score™: ${resultText} 💚 Calcula el tuyo en impactscore.com`;

  if (navigator.share) {
    navigator
      .share({
        title: "Mi Impact Score™",
        text: shareText,
        url: window.location.href,
      })
      .then(() => console.log("Compartido con éxito"))
      .catch((err) => console.error("Error al compartir", err));
  } else {
    alert("Tu navegador no soporta la función de compartir. Copia y pega tu resultado manualmente.");
  }
}
function descargarInforme() {
  window.open("https://tuweb.com/impacto-informe-pago", "_blank"); // Sustituye por tu enlace real
}

function irAMentoria() {
  window.open("https://tuweb.com/mentoria-certificacion", "_blank"); // Sustituye por tu landing de mentoría
}

function compartirScore() {
  const resultText = document.getElementById("result").innerText;
  const shareText = `Este es mi Impact Score™: ${resultText} 💚 Calcula el tuyo en impactscore.com`;

  if (navigator.share) {
    navigator
      .share({
        title: "Mi Impact Score™",
        text: shareText,
        url: window.location.href,
      })
      .then(() => console.log("Compartido con éxito"))
      .catch((err) => console.error("Error al compartir", err));
  } else {
    alert("Tu navegador no soporta la función de compartir. Copia y pega tu resultado manualmente.");
  }
}
