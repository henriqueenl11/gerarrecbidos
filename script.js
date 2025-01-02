// script.js
document.getElementById("generate").addEventListener("click", function() {
    const formData = new FormData(document.getElementById("recibo-form"));
    const reciboData = {};

    formData.forEach((value, key) => {
        reciboData[key] = value;
    });

    const receiptWindow = window.open("", "_blank");

    receiptWindow.document.write(`<!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Recibo</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                h1 { text-align: center; }
                .details { margin-top: 20px; }
                .details p { margin: 5px 0; }
            </style>
        </head>
        <body>
            <h1>Recibo</h1>
            <div class="details">
                <p><strong>Valor R$:</strong> ${reciboData.valor}</p>
                <p><strong>Valor (por extenso):</strong> ${reciboData["valor-extenso"]}</p>
                <p><strong>Referente:</strong> ${reciboData.referente}</p>
                <p><strong>Nome do Pagador:</strong> ${reciboData["nome-pagador"]}</p>
                <p><strong>CPF/CNPJ do Pagador:</strong> ${reciboData["cpf-pagador"]}</p>
                <p><strong>Cheque Nº:</strong> ${reciboData["cheque-num"] || "N/A"}</p>
                <p><strong>Banco:</strong> ${reciboData.banco || "N/A"}</p>
                <p><strong>Local:</strong> ${reciboData.local}</p>
                <p><strong>Nome do Emitente:</strong> ${reciboData["nome-emitente"]}</p>
                <p><strong>CPF/CNPJ do Emitente:</strong> ${reciboData["cpf-emitente"]}</p>
                <p><strong>RG do Emitente:</strong> ${reciboData["rg-emitente"] || "N/A"}</p>
            </div>
        </body>
        </html>`);

    receiptWindow.document.close();
});
