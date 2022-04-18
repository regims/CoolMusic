var x = document.getElementById('myAudio'); 
let music = document.getElementById("musicaDaVez") //pega a tag onde indica o arquivo de audio
const path = "music/music" //apenas para armazenar o caminho das musicas pra não ficar digitando pelo código
let pos = 1; //define o numero da musica lá da pasta, começando pela music1.mp3

let display = document.getElementById('font-display')

function playAudio() { 
  x.play(); 
  display.innerHTML = 'music' + pos + '.mp3';
} 

function pauseAudio() { 
	x.pause(); 
} 

function stopAudio() {   
	x.pause();
	x.currentTime = 0; 
} 

function skipdAudio(){  
	pos++; //incrementa +1 para pegar a próxima musica
	music.setAttribute("src", `${path}${pos}.mp3`); //altera o atributo onde é colocado o caminho da muscica, concatenando o path com o numero da musica e a extensão no final
	x.load(); //recarrega o player pra ele pegar a nova musica
	playAudio(); 
}

function forwardAudio(){  
  --pos;
	music.setAttribute("src", `${path}${pos}.mp3`);
	x.load();
	playAudio();
}

