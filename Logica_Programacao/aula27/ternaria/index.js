const pontuacaoUsuario = 1000;
const nivel = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivel, corPadrao)