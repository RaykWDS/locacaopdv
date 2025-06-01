// Função para formatar valor da locação
let valorLocacao = parseFloat(valorLocacao);

if (!isNaN(valorLocacao)) {
    let valorFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2
    }).format(valorLocacao);

    pdf.text(`Valor da locação: ${valorFormatado}`, 14, y += 7);
} else {
    pdf.text('Valor da locação: inválido', 14, y += 7);
}

document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function() {
        sessionStorage.removeItem('logado');
        window.location.href = "../Login/login.html";
      });
    }
});
