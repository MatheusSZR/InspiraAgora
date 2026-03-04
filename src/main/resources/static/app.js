// Lista de frases direto no JavaScript para funcionar no GitHub Pages!
const quotes = [
    { text: "A persistência realiza o impossível.", author: "Provérbio Chinês" },
    { text: "Não espere por oportunidades, crie-as.", author: "George Bernard Shaw" },
    { text: "Você é mais forte do que imagina.", author: "Autor desconhecido" },
    { text: "Grandes jornadas começam com pequenos passos.", author: "Lao Tsé" },
    { text: "Seu esforço de hoje é sua conquista de amanhã.", author: "Autor desconhecido" },
    { text: "Disciplina é a ponte entre metas e realizações.", author: "Jim Rohn" },
    { text: "Nunca é tarde para começar de novo.", author: "Autor desconhecido" },
    { text: "Tudo que você precisa está do outro lado do medo.", author: "George Addair" },
    { text: "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.", author: "Winston Churchill" },
    { text: "A imaginação é mais importante que o conhecimento.", author: "Albert Einstein" },
    { text: "Seja a mudança que você deseja ver no mundo.", author: "Mahatma Gandhi" },
    { text: "O que não nos mata, nos torna mais fortes.", author: "Friedrich Nietzsche" },
    { text: "Tudo parece impossível até que seja feito.", author: "Nelson Mandela" },
    { text: "Sorte é o que acontece quando a preparação encontra a oportunidade.", author: "Sêneca" },
    { text: "O segredo de progredir é começar.", author: "Mark Twain" }
    // Você pode colar mais frases aqui depois!
];

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const quoteContainer = document.getElementById("quote-container");
const status = document.getElementById("status");

const newQuoteBtn = document.getElementById("new-quote-btn");
const copyBtn = document.getElementById("copy-btn");
const whatsappBtn = document.getElementById("whatsapp-btn");
const twitterBtn = document.getElementById("twitter-btn");

// Efeito visual de surgimento (fade-in)
function triggerAnimation() {
    quoteContainer.classList.remove("fade-in");
    void quoteContainer.offsetWidth; 
    quoteContainer.classList.add("fade-in");
}

function loadRandomQuote() {
    // Sorteia uma frase da lista acima
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    quoteText.textContent = `“${quote.text}”`;
    quoteAuthor.textContent = `— ${quote.author}`;
    status.textContent = "";
    
    triggerAnimation();
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
        setTimeout(() => status.textContent = "", 3000);
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

// Configura os botões
newQuoteBtn.addEventListener("click", loadRandomQuote);
copyBtn.addEventListener("click", copyQuote);
whatsappBtn.addEventListener("click", shareOnWhatsApp);
twitterBtn.addEventListener("click", shareOnTwitter);

// Carrega a primeira frase
loadRandomQuote();
