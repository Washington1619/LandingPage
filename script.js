// efeito digitação
function Dati(elemento){
    const textox = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textox.forEach((letra, i)=>{
        setTimeout(()=> elemento.innerHTML += letra, 100*i)
        })
    };

const texto = document.querySelector('div.descricao p')
Dati(texto);

function onload(){
    
}
