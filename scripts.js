/**
 * Função principal para trocar o sabor
 * @param {string} cor - A cor do círculo e elementos de texto
 * @param {string} imagem - O caminho da imagem do copo
 */
function mudarSabor(cor, imagem) {
    const circulo = document.getElementById("circulo");
    const copo = document.getElementById("copo-principal");
    const span = document.getElementById("span-color");
    const botao = document.getElementById("meu-botao");

   
    circulo.style.background = cor;
    span.style.color = cor;
    botao.style.background = cor;

  
    copo.style.opacity = "0";
    copo.style.transform = "translateY(30px) scale(0.9)";

    
    setTimeout(() => {
        copo.src = imagem;
        copo.style.opacity = "1";
        copo.style.transform = "translateY(0) scale(1)";
    }, 300); 
}