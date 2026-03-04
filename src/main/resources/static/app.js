const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const quoteContainer = document.getElementById("quote-container");
const status = document.getElementById("status");

const newQuoteBtn = document.getElementById("new-quote-btn");
const copyBtn = document.getElementById("copy-btn");
const whatsappBtn = document.getElementById("whatsapp-btn");
const twitterBtn = document.getElementById("twitter-btn");

// Função para aplicar o efeito visual de surgimento (fade-in)
function triggerAnimation() {
    quoteContainer.classList.remove("fade-in");
    void quoteContainer.offsetWidth; // Força o navegador a reiniciar a animação
    quoteContainer.classList.add("fade-in");
}

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
        
        triggerAnimation(); // Chama a animação toda vez que uma nova frase carrega

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
        status.textContent = "Frase copiada com sucesso! 📋";
        setTimeout(() => status.textContent = "", 3000); // Remove a mensagem após 3 segundos
    } catch {
        status.textContent = "Não foi possível copiar automaticamente.";
    }
}

function shareOnWhatsApp() {
    const fullQuote = `${quoteText.textContent} ${quoteAuthor.textContent} - via InspiraAgora`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(fullQuote)}`;
    window.open(url, '_blank');
}

function shareOnTwitter() {
    const fullQuote = `${quoteText.textContent} ${quoteAuthor.textContent}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(fullQuote)}&hashtags=InspiraAgora,Motivação`;
    window.open(url, '_blank');
}

// Configura os botões para executar as funções corretas quando clicados
newQuoteBtn.addEventListener("click", loadRandomQuote);
copyBtn.addEventListener("click", copyQuote);
whatsappBtn.addEventListener("click", shareOnWhatsApp);
twitterBtn.addEventListener("click", shareOnTwitter);

// Carrega a primeira frase ao abrir o site
loadRandomQuote();
