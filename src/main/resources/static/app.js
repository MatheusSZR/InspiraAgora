const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const status = document.getElementById("status");
const newQuoteBtn = document.getElementById("new-quote-btn");
const copyBtn = document.getElementById("copy-btn");

async function loadRandomQuote() {
    status.textContent = "";

    try {
        const response = await fetch("/api/quotes/random");

        if (!response.ok) {
            throw new Error("Falha ao buscar frase");
        }

        const quote = await response.json();
        quoteText.textContent = `“${quote.text}”`;
        quoteAuthor.textContent = `— ${quote.author}`;
    } catch (error) {
        quoteText.textContent = "Não foi possível carregar a frase agora.";
        quoteAuthor.textContent = "";
        status.textContent = "Tente novamente em instantes.";
    }
}

async function copyQuote() {
    if (!quoteAuthor.textContent) {
        status.textContent = "Gere uma frase antes de copiar.";
        return;
    }

    const fullQuote = `${quoteText.textContent} ${quoteAuthor.textContent}`;

    try {
        await navigator.clipboard.writeText(fullQuote);
        status.textContent = "Frase copiada com sucesso!";
    } catch {
        status.textContent = "Não foi possível copiar automaticamente.";
    }
}

newQuoteBtn.addEventListener("click", loadRandomQuote);
copyBtn.addEventListener("click", copyQuote);

loadRandomQuote();
