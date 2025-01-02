document.getElementById("gerar").addEventListener("click", function () {
    // Obtém os valores do formulário
    const valor = document.getElementById("valor").value;
    const valorExtenso = document.getElementById("valor-extenso").value;
    const referente = document.getElementById("referente").value;
    const pagador = document.getElementById("pagador").value;
    const cpfPagador = document.getElementById("cpf-pagador").value;
    const local = document.getElementById("local").value;
    const emissor = document.getElementById("emissor").value;
    const cpfEmissor = document.getElementById("cpf-emissor").value;
  
    // Cria o conteúdo do recibo
    const reciboContent = `
      <html>
      <head>
        <title>Recibo</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
          h1 { text-align: center; }
          .center { text-align: center; margin-top: 20px; }
          button { padding: 10px 20px; font-size: 16px; cursor: pointer; }
        </style>
      </head>
      <body>
        <h1>RECIBO</h1>
        <p><strong>Recibo R$:</strong> ${valor}</p>
        <p><strong>Recebi(emos) de:</strong> ${pagador}</p>
        <p><strong>CPF/CNPJ:</strong> ${cpfPagador}</p>
        <p><strong>A importância supra de:</strong> ${valorExtenso}</p>
        <p><strong>Referente a:</strong> ${referente}</p>
        <p><strong>Local:</strong> ${local}</p>
        <p><strong>Emitido por:</strong> ${emissor}</p>
        <p><strong>CPF/CNPJ do Emitente:</strong> ${cpfEmissor}</p>
        <div class="center">
          <button onclick="window.print()">Imprimir</button>
          <button onclick="window.close()">Fechar</button>
        </div>
      </body>
      </html>
    `;
  
    // Abre uma nova aba com o conteúdo do recibo
    const novaAba = window.open("", "_blank");
    novaAba.document.write(reciboContent);
    novaAba.document.close();
  });
  