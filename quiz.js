            const quizData = [
            {
                question: "Qual é a diferença entre as tags div e span em HTML?",
                options: [
                    "A) div é um elemento de bloco, enquanto span é um elemento em linha.",
                    "B) div é usado para texto, enquanto span é usado para imagens.",
                    "C) div não pode conter outros elementos, enquanto span pode.",
                    "D) Não há diferença; ambas são usadas da mesma forma."
                ],
                correct: 0
            },
            {
                question: "Qual atributo é usado para especificar a URL de um link em uma tag a?",
                options: ["A) src", "B) link", "C) href", "D) url"],
                correct: 2
            },
            {
                question: "O que faz a tag meta em HTML?",
                options: [
                    "A) Define o título da página",
                    "B) Fornece metadados sobre o documento, como descrição e palavras-chave",
                    "C) Cria um link para um arquivo CSS",
                    "D) Insere uma imagem na página"
                ],
                correct: 1
            },
            {
                question: "Qual é a função do atributo alt em uma tag img?",
                options: [
                    "A) Define a largura da imagem",
                    "B) Fornece um texto alternativo para a imagem",
                    "C) Especifica a URL da imagem",
                    "D) Define a altura da imagem"
                ],
                correct: 1
            },
            {
                question: "O que é o DOCTYPE em um documento HTML?",
                options: [
                    "A) Um tipo de elemento HTML",
                    "B) Uma declaração que define a versão do HTML que está sendo usada",
                    "C) Um estilo CSS aplicado ao documento",
                    "D) Um script JavaScript"
                ],
                correct: 1
            },
        ];

        const quizContainer = document.getElementById("quiz");
        const submitBtn = document.getElementById("submit");
        const scoreContainer = document.getElementById("score");

        function loadQuiz() {
            quizData.forEach((item, index) => {
                const questionElement = document.createElement("div");
                questionElement.classList.add("question");
                questionElement.innerHTML = `
                    <h2>${item.question}</h2>
                    <ul class="options">
                        ${item.options
                            .map(
                                (option, i) =>
                                    `<li>
                                        <input type="radio" name="q${index}" id="q${index}o${i}" value="${i}">
                                        <label for="q${index}o${i}">${option}</label>
                                    </li>`
                            )
                            .join("")}
                    </ul>
                `;
                quizContainer.appendChild(questionElement);
            });
        }

        function checkAnswers() {
            let score = 0;
            quizData.forEach((item, index) => {
                const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
                if (selectedOption && parseInt(selectedOption.value) === item.correct) {
                    score++;
                }
            });
            scoreContainer.innerHTML = `Você acertou ${score} de ${quizData.length} perguntas!`;
        }

        submitBtn.addEventListener("click", checkAnswers);

        loadQuiz();


