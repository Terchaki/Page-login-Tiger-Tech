Ola. Estas sao as perguntas tecnicas para vaga de frontend:

1. Quais passos você seguiria para solucionar problemas de um site lento?

2. Quais passos você seguiria para solucionar problemas de um usuário que enfrentasse um erro no envio de um formulário no site?

3. Como desenvolvedor frontend, fale sobre sua experiência no que fazer e o que não fazer ao construir o codigo do site (seja para scripts frontend ou APIs) relacionada ao desempenho.


<hr>


Este e o teste - uma simples pagina de login

1. O botão de login com Facebook é um botão fictício, nenhuma funcionalidade necessária

2. O formulário deve ser responsivo

3. Tente usar TailwindCss para o design da pagina (se puder)

4. Foco no gerenciamento do formulário (fazer o necessário para uma boa experiência do usuário)

5. Validação do formulário:
	- O campo "username ou e-mail" é obrigatório e deve ter no mínimo 6 caracteres e no máximo 50 caracteres
	- O campo "senha" é obrigatório e deve ter no mínimo 10 caracteres e conter pelo menos 1 alfabeto, 1 símbolo e 1 número
	- A mensagem de erro/sucesso pode aparecer enquanto o usuário digita (estilizar a mensagem de validação de acordo com sua preferência)
	- Ao enviar o formulario, deve verificar se os campos são válidos antes de ir para o Ponto 6

6. Ao enviar, altere o ícone do botão para loader/spinner que mudará novamente após 5 segundos

7. Tudo acima deve ser feito com um framework JavaScript de sua escolha

8. A pagina inteira precisa ser em ingles. O codigo tambem em ingles, incluindo comentarios
