window.addEventListener("onload", load())

function load(){
	let isLogged = sessionStorage.getItem("isLogged")

	if(isLogged === "true"){
		location.replace('page3.html')
	}else{
		sessionStorage.setItem("isLogged", "false")
		return null;
	}
}


function login(){
  var usuario = document.getElementsByName ('usuario')[0].value;
  usuario = usuario.toLowerCase();

  var senha = document.getElementsByName ('senha')[0].value;
  senha = senha.toLowerCase();

  if (usuario == "admin" && senha == "admin"){
		sessionStorage.setItem("isLogged", "true")
		console.log("Sucesso");
		location.replace('page3.html');
		return true  				 
  }

  if (usuario == "null" && senha == "null"){
		return false
  } else{
		alert('Insira o login corretamente');
	}
}