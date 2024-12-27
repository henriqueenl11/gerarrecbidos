document.getElementById("reciboForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Coletar valores do formulário
  const valor = document.getElementById("valor").value;
  const valorExtenso = document.getElementById("valorExtenso").value;
  const referente = document.getElementById("referente").value;
  const nomePagador = document.getElementById("nomePagador").value;
  const cpfCnpjPagador = document.getElementById("cpfCnpjPagador").value;
  const chequeNumero = document.getElementById("chequeNumero").value;
  const banco = document.getElementById("banco").value;
  const agencia = document.getElementById("agencia").value;
  const localEmissao = document.getElementById("localEmissao").value;
  const nomeEmitente = document.getElementById("nomeEmitente").value;
  const cpfCnpjEmitente = document.getElementById("cpfCnpjEmitente").value;
  const rgEmitente = document.getElementById("rgEmitente").value;
  const dataAtual = new Date().toLocaleDateString("pt-BR");

  // Criar o PDF
  const doc = new jsPDF();

  doc.setFont("Times", "Bold");
  doc.setFontSize(16);
  doc.text("R E C I B O", 105, 20, null, null, "center");

  doc.setFont("Times", "Normal");
  doc.setFontSize(14);
  doc.text(`Recibo R$ ${valor}`, 160, 30, null, null, "right");

  doc.setFontSize(12);
  doc.text(
      `Recebi(emos) de ${nomePagador.toUpperCase()} - CPF/CNPJ nº ${cpfCnpjPagador},\na importância supra de: ***(${valorExtenso})*** - referente a: ${referente}.`,
      10,
      50
  );

  doc.text(
      "E, para maior clareza firmo o presente recibo para que produza os seus efeitos,\ndando plena, rasa e irrevogável quitação, pelo valor recebido.",
      10,
      70
  );

  if (chequeNumero) {
      doc.text(
          `Pagamento efetuado através do cheque nº: ${chequeNumero} do Banco: ${banco} Agência: ${agencia}.`,
          10,
          90
      );
  } else {
      doc.text("Pagamento efetuado em dinheiro.", 10, 90);
  }

  doc.text(
      `${localEmissao.toUpperCase()}, ${dataAtual}`,
      160,
      110,
      null,
      null,
      "right"
  );

  doc.text(nomeEmitente.toUpperCase(), 105, 140, null, null, "center");
  doc.text(`RG/IE nº ${rgEmitente}`, 105, 150, null, null, "center");
  doc.text(`CPF/CNPJ nº ${cpfCnpjEmitente}`, 105, 160, null, null, "center");

  // Botão para salvar o PDF
  doc.save("recibo.pdf");
});
