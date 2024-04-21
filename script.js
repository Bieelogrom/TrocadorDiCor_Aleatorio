function trocarCor() {
    var cor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
    var cor_final = []


    for (var contador = 0; contador < 6; contador++) {
        var valor = Math.floor(Math.random() * cor.length)
        cor_final.push(cor[valor])
    }

    document.getElementsByTagName("body")[0].style.backgroundColor = `#${cor_final.join("")}`
    document.getElementsByTagName("p")[0].style.color = "#fff"
    document.getElementsByTagName("span")[0].innerHTML = `#${cor_final.join("")}`
}