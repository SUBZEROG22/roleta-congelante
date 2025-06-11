window.addEventListener("message", function(event) {
  if (event.data.type === "SPIN_ROLETA") {
    const nomes = [
      "SUB-ZERO", "FROST", "HITSUGAYA", "RUKIA", "ELSA", "ANIVIA", "SEJUANI",
      "BRAUM", "ASHE", "LISANDRA", "NUNU", "TRUNDLE", "GELADO", "SENHOR FRIO",
      "EVIE", "FRIAGEN", "HOMEM DE GELO", "CAPITÃO FRIO", "REI GELADO"
    ];
    const sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    document.getElementById("roleta").textContent = `❄️ ${sorteado} foi escolhido!`;
  }
});
