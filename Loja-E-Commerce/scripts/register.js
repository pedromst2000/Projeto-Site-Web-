// Vasco coloca aqui a interatividade com o register form mensagem de sucesso de autentificação ou de erro

//Já te faço duas funções simplesmente para mostrar os caracteres que user está a introduzir no campo das passwords

// REGRAS PARA OS CAMPOS DE PREENCHIMENTO
// OS CAMPOS DE PREENCHIMENTO JÁ SÃO OBRIGATÓRIOS MAS TÊM DE ESTAR FUNCIONAIS :
// NOS CAMPOS:
// PRIMEIRO NOME = SÓ ACEITAR CARACTERES CASO CONTRÁRIO SURGIR MENSAGEM DE ERRO "CAMPO INVÁLIDO" NO RESPETIVO INPUT !!
// ULTIMO NOME = SÓ ACEITAR CARACTERES CASO CONTRÁRIO SURGIR MENSAGEM DE ERRO "CAMPO INVÁLIDO" NO RESPETIVO INPUT !!
// PASSWORD =  DEFINIR UM LIMITE MÍNIMO DE STRINGS
// CONFIRME PASSWORD = TEM DE CORRESPONDER(MATCH) A PASSWORD INSERIDA 
// Email = SÓ ACEITAR CASO CONTENHA @ CASO CONTRÁRIO SURGIR MENSAGEM DE ERRO "CAMPO INVÁLIDO" NO RESPETIVO INPUT !!
// CONTACTO = SÓ ACEITAR INTEIROS CASO CONTRÁRIO SURGIR MENSAGEM DE ERRO "CAMPO INVÁLIDO" NO RESPETIVO INPUT !!
// ENDEREÇO = SÓ ACEITAR INTEIROS E CARACTERES E CASO CONTENHA SIMBOLOS  SURGIR MENSAGEM DE ERRO "CAMPO INVÁLIDO" NO RESPETIVO INPUT !!
// CÓDIGO POSTAL = SÓ ACEITAR INTEIROS  SURGIR MENSAGEM DE ERRO "CAMPO INVÁLIDO" NO RESPETIVO INPUT !!

//SE TODOS OS CAMPOS CORRESPONDEREM SURGIRá MENSAGEM DE SUCESSO "BEM-VINDO HÁ ALTESC!!"(OPCIONAL)
// SE TODOS OS CAMPOS CORRESPONDEREM IRÁ SER REGISTRADO COM SUCESSO E DERIGIR PARA A PÁGINA DE DESTAQUES(É APENAS UM DETALHE)

// DEIXO AQUI UM RECURSO ONLINE QUE TE POSSA AJUDAR MAIS AJUDA DO TEU PAI CLARO 
// https://www.youtube.com/watch?v=GTMEuHxh8aQ
// https://www.youtube.com/watch?v=rsd4FNGTRBw

// Se conseguires armazenar dados de um input no armazenamento local e restaura-lo no carregamento da página agradecia tens aí links no qual te possa ajudar nessa tarefa
// PS poderás fazê-lo com localStorage com JS 

// https://www.ti-enxame.com/pt/javascript/como-salvar-dados-de-um-formulario-com-armazenamento-local-em-html5/1073245592/
// https://www.youtube.com/watch?v=i04nMOowrII 

// BOM TRABALHO E APROVEITAS E ESTUDAS PARA O TESTE DE TW COM JS !!

//  limpa as intruções todas e deixa só os comentários no código, naquilo que fores fazer 


// função que permite mostrar os caracteres introduzidos pelo o user e que por sua vez é invocada ao clicar no botão
function showPassword() {
    var x = document.getElementById("showPsw");
    if (x.type === "password"){
        x.type = "text";
    } else {
        x.type = "password";
    }
}

// função que permite mostrar os caracteres introduzidos pelo o user e que por sua vez é invocada ao clicar no botão
function confirmeshowPassword() {
    var x = document.getElementById("confirmeshowPsw");
    if(x.type === "password"){
        x.type = "text";
    } else{
        x.type = "password";
    }
}


