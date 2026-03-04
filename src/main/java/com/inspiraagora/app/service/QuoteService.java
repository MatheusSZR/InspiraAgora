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
            new Quote("O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.", "Winston Churchill"),
            new Quote("A imaginação é mais importante que o conhecimento.", "Albert Einstein"),
            new Quote("Seja a mudança que você deseja ver no mundo.", "Mahatma Gandhi"),
            new Quote("O que não nos mata, nos torna mais fortes.", "Friedrich Nietzsche"),
            new Quote("Tudo parece impossível até que seja feito.", "Nelson Mandela"),
            new Quote("Penso, logo existo.", "René Descartes"),
            new Quote("Sorte é o que acontece quando a preparação encontra a oportunidade.", "Sêneca")
            // Adicione aqui as demais frases que estavam no seu index.html original para o banco ficar gigante!
    );

    public Quote getRandomQuote() {
        int index = ThreadLocalRandom.current().nextInt(QUOTES.size());
        return QUOTES.get(index);
    }
}
