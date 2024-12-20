function toggleMode() {
    // Pegar o document html
    const html = document.documentElement

    //Se no document html contém a classe light
    if(html.classList.contains('light')) {
        html.classList.replace('light', 'dark')
        localStorage.setItem('theme', 'dark')
    } else {
        html.classList.replace('dark', 'light')
        localStorage.setItem('theme', 'light')
    }

    // A função toggle já faz o que foi declarado na função a cima...
    //html.classList.toggle('light')
    // Se tiver a classe light ele tira. Se não tiver a classe light, ele coloca
}

// Ao carregar a página
const savedTheme = localStorage.getItem('theme');
const html = document.documentElement;

if (savedTheme) {
    html.classList.add(savedTheme);
} else {
    // Se não houver preferência armazenada, aplicar um tema padrão
    html.classList.add('dark');
}


/* Mostrar ano atual no footer */
const ano = document.getElementById("mostrarAnoAtual");
const anoAtual = new Date();
ano.innerHTML = anoAtual.getFullYear();