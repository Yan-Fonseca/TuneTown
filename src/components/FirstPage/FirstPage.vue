<template>
	<div class="header">
      <nav>
        <div id="logo">
              <img src="../../assets/imgs/logo_TuneTown.png" class="imgLogo">
              <h1>TuneTown</h1>
        </div>
        <div class="botoes">
          <ul>
            <li class="login">
              <a class="linkLogin" @click=navegarLogin>Login</a>
            </li>
            <li class="registro">
              <a class="linkRegistro" @click=navegarRegistro>Registre-se</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
<div class="td">
  <div class="main">
    <div id="mainLogo">
      <img src="../../assets/imgs/logo_TuneTown.png">
    </div>

    <div id="marca">
      <h1>Juntos pela música!</h1>
      <p>Conectando músicos e contratantes para shows inesquecíveis </p>
      <p>Agende seu próximo show ao vivo!</p>
    </div>

    <div id="mainDescricao">
      <p>
        Dê vida ao seu evento com a TuneTown! Descubra artistas brilhantes, encontre seu som perfeito e transforme sua festa em uma experiência inesquecível.
      </p>
      <p>
        Com uma ampla gama de recursos e uma comunidade vibrante, estamos aqui para tornar sua busca musical mais simples e emocionante.
      </p>
    </div>
  </div>
</div>
  <footer>
    <div class="FooterBody">
        <div>
            <img src="../../assets/imgs/logo_TuneTown.png" alt="logo TuneTown">
        </div>
        <div class= "links">
            <p>Perguntas Frequentes</p>
            <p>Central de Ajuda</p>
            <p>Termos de Uso</p>
            <p>Privacidade</p>
        </div>
        <div id="tuneTownName"><p>©TuneTown</p></div>
    </div>
  </footer>
</template>

<script>
    import router from '@/router'
	export default {
		name: 'FirstPageVue',

        methods: {
            navegarRegistro(){
              router.push('/Registro');
            },
            navegarLogin(){
              router.push('/Login');
            },
        },
    }
</script>

<style scoped>
.td{
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: rgba(36, 56, 81, 0.84);
}
.header {
    margin-top: 0;
    display: table;
    background: rgba(36, 56, 81, 0.84);
    clear: both;
    width: 100%;
    height: 100%;
}

footer {
    width: 100%;
    background: rgba(36, 56, 81, 0.84);
}

nav {
  background: rgba(36, 56, 81, 0.84);
}

.nav ul {
    display: flex;
    align-items: center;
}


nav ul li {
    display: flex;
    justify-content: center;
    align-items: center;
}
.linkLogin, .linkRegistro {
    color: white;
    cursor: pointer;
}
.linkLogin, .linkRegistro{
    display: block;
    margin-right: 25px;
    padding-bottom: 3px;
    text-transform: uppercase;
    text-align: center;
}

.linkLogin:hover, .linkRegistro:hover {
    border-bottom: 1px solid #535858;
    color: pink;
}

a:link, a:active, a:visited {
   text-decoration: none; 
}

.botoes {
    padding: 25px;
    float: right;
}

#logo {
	display: block;
	float: left;
    font-family: Arapey;
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    font-size: 25px;
    font-weight: lighter;
}

#container {
    width: 1080px;
    margin: 0 auto;
    background: white;
}

.imgLogo {
    width: 68px;
    height: 72px;
}

.main {
  border-radius: 20px;
  margin: 20px;
  clear: both;
  min-height: 40px;
  justify-content: space-between;
  background-size: cover;
  text-align: center;
}

#mainDescricao {
    margin-bottom: 30px;
    margin-top: 80px;
    color: white;
}

#mainLogo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

#marca h1{
	color: white;
    font-size: 30px;
    margin-bottom: 30px;
}

#marca p {
	color: white;
    font-size: 20px;
}

#mainLogo img {
    width: 140px;
    height: 145px;
}

.FooterBody p {
  color: #ffffff;
  font-size: 20px;
  margin-right: 30px;
  float: left;
}

.FooterBody img {
    width: 75px;
    height: 75px;
}
.FooterBody{
  width: 100%;
  height: 80px;
  background: rgba(36, 56, 81, 0.84);
  font-family: 'Arapey', serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.FooterBody #tuneTownName {
        color: #ffffff;
        font-size: 20px;
        margin-left: 30px;
        float: left;
}

.registro,
.login {
    display: inline-block;
    margin-right: 25px;
    vertical-align: middle;
}

</style>