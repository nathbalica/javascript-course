const numero = Number(prompt('Digite seu numero'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
texto1.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)} </p>`;
texto2.innerHTML += `<p>é NaN: ${Number.isNaN(numero)}</p>`;
texto3.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto4.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto5.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;

