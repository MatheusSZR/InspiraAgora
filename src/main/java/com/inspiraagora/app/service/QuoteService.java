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
            new Quote("Tudo que você precisa está do outro lado do medo.", "George Addair")
    );

    public Quote getRandomQuote() {
        int index = ThreadLocalRandom.current().nextInt(QUOTES.size());
        return QUOTES.get(index);
    }
}
