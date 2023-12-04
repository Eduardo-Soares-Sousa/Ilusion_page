function setCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
}

function getCookie(name) {
    var defineCookie = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while(cookie.charAt(0) === ' ') cookie = cookie.substring(1, cookie.length);
        if(cookie.indexOf(defineCookie) === 0) return cookie.substring(defineCookie.length, cookie.length);
    }
    return null;
}

function salvarCookies() {
    var nome = document.getElementsByName("Nome")[0].value;
    var email = document.getElementsByName("Email")[0].value;
    var telefone = document.getElementsByName("Telefone")[0].value;
    var instituicao = document.getElementsByName("Instituicao")[0].value;
    var mensagem = document.getElementsByName("Mensagem")[0].value;

    setCookie("Nome", nome);
    setCookie("Email", email);
    setCookie("Telefone", telefone);
    setCookie("Instituicao", instituicao);

    localStorage.setItem("Mensagem", mensagem);

    alert("Cookies e Local Storage atualizados!");
}