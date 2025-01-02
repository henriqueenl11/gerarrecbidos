document.getElementById('gerar').addEventListener('click', function () {
    const valor = document.getElementById('valor').value;
    const valorExtenso = document.getElementById('valor-extenso').value;
    const referente = document.getElementById('referente').value;
    const pagador = document.getElementById('pagador').value;
    const cpfPagador = document.getElementById('cpf-pagador').value;
    const local = document.getElementById('local').value;
    const emissor = document.getElementById('emissor').value;
    const cpfEmissor = document.getElementById('cpf-emissor').value;
  
    const dataAtual = new Date().toLocaleDateString('pt-BR');
  
    const reciboHTML = `
      <html>
      <head>
        <title>Recibo</title>
      </head>
      <body>
        <h1 style="text-align: center;">RECIBO</h1>
        <p>Recibemos de ${pagador} (CPF/CNPJ: ${cpfPagador}), a importância de R$ ${valor} (${valorExtenso}) referente a: ${referente}.</p>
        <p>Pagamento efetuado em dinheiro.</p>
        <p>${local}, ${dataAtual}</p>
        <br>
        <p>_____________________________________<br>${emissor} (CPF/CNPJ: ${cpfEmissor})</p>
        <button onclick="window.print()">Imprimir</button>
      </body>
      </html>
    `;
  
    const novaJanela = window.open('', '_blank');
    novaJanela.document.write(reciboHTML);
    novaJanela.document.close();
  });
  