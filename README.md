# Prova para Desenvolvedor Júnior de JavaScript e jQuery

## Instruções:
- Leia atentamente cada questão antes de responder.
- Responda as questões de maneira clara e objetiva.
- Tempo de prova: 2 horas.

---

## Parte 1: Teoria (30 pontos)

### 1. (5 pontos)
Qual é a diferença entre `var`, `let` e `const` no JavaScript? Cite exemplos de uso.

### 2. (5 pontos)
Explique o que é o DOM (Document Object Model) e como o JavaScript interage com ele.

### 3. (5 pontos)
O que são funções de callback em JavaScript? Dê um exemplo prático de utilização.

### 4. (5 pontos)
O que são eventos no JavaScript e como eles são capturados? Cite ao menos dois exemplos.

### 5. (5 pontos)
O que é o método `$.ajax()` no jQuery e para que ele é utilizado? Cite um exemplo básico.

### 6. (5 pontos)
Explique brevemente a diferença entre `==` e `===` no JavaScript.

---

## Parte 2: Prática de JavaScript (40 pontos)

### 1. (10 pontos)
Escreva uma função chamada `isEven` que recebe um número como parâmetro e retorna `true` se o número for par e `false` caso contrário.

```javascript
function isEven(number) {
    // Sua implementação aqui
}
```

### 2. (10 pontos)
Crie um script que:
   - Pergunte ao usuário um número via `prompt`.
   - Mostre um alerta com o dobro desse número.

### 3. (10 pontos)
Considere o seguinte array:

```javascript
const fruits = ['apple', 'banana', 'orange', 'grape'];
```

Escreva um código que percorra o array e exiba cada fruta no console.

### 4. (10 pontos)
Crie uma função chamada `calculateSum` que receba um array de números e retorne a soma de todos os elementos.

```javascript
function calculateSum(numbers) {
    // Sua implementação aqui
}
```

---

## Parte 3: Prática de jQuery (30 pontos)

### 1. (10 pontos)
Utilizando jQuery, selecione todos os elementos `<p>` de uma página e altere o texto para "Texto alterado com jQuery".

```javascript
// Sua implementação aqui
```

### 2. (10 pontos)
Escreva um código usando jQuery para ocultar um elemento `<div>` com o ID `#myDiv` quando o usuário clicar em um botão com o ID `#hideButton`.

```javascript
// Sua implementação aqui
```

### 3. (10 pontos)
Considere o seguinte formulário HTML:

```html
<form id="userForm">
    <input type="text" id="name" placeholder="Digite seu nome">
    <button type="submit">Enviar</button>
</form>
<div id="message"></div>
```

Escreva um código em jQuery que:
   - Impeça o comportamento padrão do formulário ao ser enviado.
   - Exiba uma mensagem no elemento `<div id="message">` dizendo "Olá, [nome]", onde [nome] é o valor digitado no campo de texto.

```javascript
// Sua implementação aqui
```

### 4. (10 pontos)
Usando JavaScript (ou jQuery), consuma a API dos Correios para buscar o endereço com base em um CEP fornecido. 
   - O CEP deve ser informado em um campo de texto e o endereço exibido em um `<div>` com o ID `#address` após clicar em um botão.
   - Exemplo de API: `https://viacep.com.br/ws/{CEP}/json/`

```javascript
// Sua implementação aqui
```

---

## Bônus (10 pontos)

Implemente um contador regressivo (de 10 até 0) que seja exibido no console, reduzindo um número por segundo. Quando o contador chegar a 0, exiba a mensagem "Tempo esgotado!".

```javascript
// Sua implementação aqui
```

