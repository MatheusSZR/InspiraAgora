package com.inspiraagora.app.service;

import com.inspiraagora.app.model.Quote;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

@Service
public class QuoteService {

    private static final List<Quote> QUOTES = List.of(
            new Quote("A persistência realiza o impossível.", "Provérbio Chinês"),
            new Quote("Não espere por oportunidades, crie-as.", "George Bernard Shaw"),
            new Quote("Você é mais forte do que imagina.", "Autor desconhecido"),
            new Quote("Grandes jornadas começam com pequenos passos.", "Lao Tsé"),
            new Quote("Seu esforço de hoje é sua conquista de amanhã.", "Autor desconhecido"),
            new Quote("Disciplina é a ponte entre metas e realizações.", "Jim Rohn"),
            new Quote("Nunca é tarde para começar de novo.", "Autor desconhecido"),
            new Quote("Tudo que você precisa está do outro lado do medo.", "George Addair"),
            new Quote("O Senhor é o meu pastor; de nada terei falta.", "Bíblia (Salmos 23:1)"),
            new Quote("Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos.", "Bíblia (Provérbios 16:3)"),
            new Quote("Tudo posso naquele que me fortalece.", "Bíblia (Filipenses 4:13)"),
            new Quote("A verdadeira medida de um homem não se vê na forma como se comporta em momentos de conforto e conveniência, mas em como se mantém em tempos de controvérsia e desafio.", "Martin Luther King Jr."),
            new Quote("O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.", "Henry Ford"),
            new Quote("No meio da dificuldade encontra-se a oportunidade.", "Albert Einstein"),
            new Quote("A imaginação é mais importante que o conhecimento.", "Albert Einstein"),
            new Quote("Seja a mudança que você deseja ver no mundo.", "Mahatma Gandhi"),
            new Quote("A educação é a arma mais poderosa que você pode usar para mudar o mundo.", "Nelson Mandela"),
            new Quote("Tudo parece impossível até que seja feito.", "Nelson Mandela"),
            new Quote("Só sei que nada sei.", "Sócrates"),
            new Quote("O que não nos mata, nos torna mais fortes.", "Friedrich Nietzsche"),
            new Quote("A única constante na vida é a mudança.", "Heráclito"),
            new Quote("O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.", "Winston Churchill"),
            new Quote("O pessimista vê dificuldade em cada oportunidade; o otimista vê oportunidade em cada dificuldade.", "Winston Churchill"),
            new Quote("Penso, logo existo.", "René Descartes"),
            new Quote("A suprema arte da guerra é derrotar o inimigo sem lutar.", "Sun Tzu"),
            new Quote("Sorte é o que acontece quando a preparação encontra a oportunidade.", "Sêneca"),
            new Quote("Inteligência é a capacidade de se adaptar à mudança.", "Stephen Hawking"),
            new Quote("A simplicidade é o último grau de sofisticação.", "Leonardo da Vinci"),
            new Quote("Se você passar por um inferno, continue caminhando.", "Winston Churchill"),
            new Quote("O segredo de progredir é começar.", "Mark Twain")
    );

    public Quote getRandomQuote() {
        int index = ThreadLocalRandom.current().nextInt(QUOTES.size());
        return QUOTES.get(index);
    }
}
