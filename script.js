// Data do aniversário
let hoje = moment()
let esseAno = hoje.year()
let evento  = new Date(esseAno, 03, 30, 00 , 00, 00)
let duracao = moment.duration(evento - hoje, 'milliseconds');
let dia = duracao.months();

let proximo = esseAno+1
let proximoEvento  = new Date(proximo, 02, 27, 00 , 00, 00)
let proximaDuracao = moment.duration(proximoEvento - hoje, 'milliseconds');

let p = document.createElement("p")
let p2 = document.createElement("p")
let div = document.querySelector("#falta")
div.appendChild(p)
div.appendChild(p2)


setInterval(function() {
  duracao = moment.duration(duracao - 1000, 'milliseconds');
  let meses = duracao.months();
  let dia = duracao.days();
  let hora = duracao.hours();
  let minuto = duracao.minutes();
  let segundo = duracao.seconds();

  let proximoMeses = proximaDuracao.months();
  let proximoDia = proximaDuracao.days();
  let proximaHora = proximaDuracao.hours();
  let proximoMinuto = proximaDuracao.minutes();
  let proximoSegundo = proximaDuracao.seconds();

  if(meses == 0 && dia == 0 && hora <= 0){
        p.innerHTML = `FELIZ ANIVERSÀRIO`
        p2.innerHTML = `PARABÉNS PELO SEU DIA`
    }else if(dia < 0){
        p.innerHTML = `Faltam ${proximoMeses} mês(es) ${proximoDia} dia(s)`
        p2.innerHTML = `E ${proximaHora} h ${proximoMinuto} min e ${proximoSegundo} s para os seus ${proximo-2004} anos`
    }else{
        p.innerHTML = `Faltam ${meses} mês(es) ${dia} dia(s)`
        p2.innerHTML = `E ${hora} h ${minuto} min ${segundo} s para os seus ${esseAno-2004} anos`
    }
}, 1000);

// cards
let cards = document.querySelectorAll(".card-wrapper")
cards.forEach(elemento => {
    elemento.onmouseover = e =>{
        let id = e.path[0].id
        console.log(id)
        let mostrar = document.querySelectorAll(".text-true")
        mostrar[id].style.display = "flex"
    }
    elemento.onmouseout = e =>{
        let id = e.path[0].id
        let mostrar = document.querySelectorAll(".text-true")
        mostrar[id].style.display = "none"
    }
})
