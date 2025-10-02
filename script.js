async function cargarDatos() {
  // 👉 Cambia esta URL por la de tu Apps Script publicado
  const URL = "https://script.google.com/macros/s/AKfycbx4n6oBXOLSHeELri4HK8FrIokOoVxEo1RuvXzCOL4nRTTMu4ukGqgsanmCbWrXOR6n6A/exec";

  try {
    const res = await fetch(URL);
    const data = await res.json();

    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    data.forEach(u => {
      let li = document.createElement("li");
      li.textContent = `${u.nombre} - ${u.edad} años`;
      lista.appendChild(li);
    });
  } catch (error) {
    console.error("Error cargando datos:", error);
  }
}

cargarDatos();
