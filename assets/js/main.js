function toggleMode() {
    // Pegar o document html
    const html = document.documentElement

    // Se no document html contém a classe light
    // if(html.classList.contains('light')) {
    //     Pegar o html (variável a cima) e remover a classe light do document
    //    html.classList.remove('light')
    // } else {
    //     Se não conter a a classe light, adiciona-a no document
    //    html.classList.add('light')
    // }

    // A função toggle já faz o que foi declarado na função a cima...
    html.classList.toggle('light')
    // Se tiver a classe light ele tira. Se não tiver a classe light, ele coloca
}