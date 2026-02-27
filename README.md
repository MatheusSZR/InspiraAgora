# InspiraAgora (Java)

Site de frases motivacionais com backend em **Java + Spring Boot**.

## Como executar

```bash
mvn spring-boot:run
```

Acesse: `http://localhost:8080`

## Endpoints

- `GET /api/quotes/random` → retorna uma frase aleatória em JSON.

## Estrutura

- `src/main/java/.../controller/QuoteController.java` API de frases.
- `src/main/java/.../service/QuoteService.java` regra de negócio de sorteio.
- `src/main/resources/static/` frontend (HTML, CSS e JS).
