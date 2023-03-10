function homeButton() {
    const homeButton = document.getElementById('main')

    homeButton.innerHTML=`
    <img src="code_web.jpg" style="width: 100%;margin-top: 7px;" alt="">
    <h2>Desenvolvimento WEB</h2>
    <ul>
        <li>
            <a href="https://www.w3schools.com/html/default.asp">HTML</a>  
            </li>
                <p>HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web. Outras tecnologias além do HTML geralmente são usadas para descrever a aparência/apresentação (CSS) ou a funcionalidade/comportamento (JavaScript) de uma página da web.
                </p>
                <p>

                    <small>
                        "Hipertexto" refere-se aos links que conectam páginas da Web entre si, seja dentro de um único site ou entre sites. Links são um aspecto fundamental da web. Ao carregar conteúdo na Internet e vinculá-lo a páginas criadas por outras pessoas, você se torna um participante ativo na world wide web.
                    </small>
                </p>
            <li>
                    <a href="https://www.w3schools.com/css/default.asp">CSS</a>  
            </li>
                <p>CSS é a sigla para Cascading Style Sheets, ou seja, Folhas de Estilo em Cascatas. É uma maneira de dar estilo ao código criado por linguagens como HTML, XML ou XHTML, por exemplo. De forma prática, ela funciona como uma camada de personalização ao conteúdo visível.
                <p>

                Estes tipos de linguagem citados foram idealizados para serem funcionais e, por serem de marcação, precisaram ser aperfeiçoados. Ele foi criado porque o HTML não era capaz de compreender todas as necessidades que um programador tinha para criar padrões de formatação nas páginas. O CSS, no caso, veio como uma boa solução para aprimorar a estética dos sites.
                </p>                     
                <p>
                Por meio dele, é possível separar formatos de conteúdos, bem como definir como serão exibidos em cada página.
                </p>
            <li>
                <a href="https://www.w3schools.com/js/default.asp">JAVASCRIPT</a>  
            </li>
            <p>
                JavaScript® (frequentemente abreviado como JS) é uma linguagem de programação leve, interpretada e orientada a objetos com funções de primeira classe, conhecida como a linguagem de scripting para páginas Web, mas também utilizada em muitos ambientes fora dos navegadores. Ela é uma linguagem de scripting baseada em protótipos, multi-paradigma e dinâmica, suportando os estilos orientado a objetos, imperativo e funcional.

            </p>
            <p>
                JavaScript roda no client side da web, o que pode ser usado para projetar / programar o comportamento de uma página web a partir da ocorrência de um evento. JavaScript é uma linguagem fácil de se aprender mas que também é poderosa, sendo amplamente utilizada para controlar o comportamento de páginas web.
            </p>
        </ul>
    `
}

export default homeButton()