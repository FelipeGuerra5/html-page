class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML= `
        <header>
        <h1>WEB - Atividade Web sobre Web</h1>
        </header>
        `
    }
}


class MyMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML=`
        <div class="menu">
            <a href="index.html">Home</a>
            <a href="pages/contatos.html">Contato</a>
            <a href="pages/faleConosco.html">Fale Conosco</a>
        </div>
        `
    }
}


class MyInfo extends HTMLElement {
    connectedCallback() {
        this.innerHTML=`
        <div class="right">
          <h2>Sobre</h2>
          <p>Este Site tem como por objetivo ser um exercício de aprendizado, Escrito por Felipe Baldim Guerra no curso de Analise e Desenvolvimento Mackenzie, na Aula 1 de Fundamentos WEB</p>
          <video width="100%" height="" controls autoplay audio muted>
            <source src="videoExample.mp4" type="video/mp4" />
            Seu Navegador não é compatível com html video!
          </video>
        </div>
        `
    }
}

var nome = "Felipe Baldim Guerra"
var github = "github.com/FelipeGuerra5"
var linkedin = "@Felipe_Baldim_Guerra"
var loc = "Polo - Luz"
var sexo = "Masculino"

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML=`
        <footer>Web sobre Web&reg;
        <ul>
            <li>${nome}</li>
            <li>${github}</li>
            <li>${linkedin}</li>
            <li>${loc}</li>
            <li>${sexo}</li>
        </ul>
        </footer>`
    }
}


function formEnviado() {
    alert("Seu contato foi registrado!\nVerifique seu e-mail para nossa resposta!\nObrigado!");
}


customElements.define('my-header', MyHeader)
customElements.define('my-menu', MyMenu)
customElements.define('my-info', MyInfo)
customElements.define('my-footer', MyFooter)