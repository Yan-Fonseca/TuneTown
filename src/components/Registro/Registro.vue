<template>
    <div class="corpo">
        <div class="top">
            <div class="logo">
                <img src="../../assets/imgs/logo_TuneTown.png" alt="Logo">
                <h1>TuneTown</h1>
            </div>
            <h2>Inscreva-se grátis e viva a música</h2>
        </div>
        <div class="form-box">
            <form action="">
                <label for="email">Qual é o seu Email?</label>
                <input type="text" id="email" placeholder="insira o seu email">

                <label for="senha">Crie uma senha</label>
                <input type="password" id="senha" placeholder="Crie uma senha">

                <label for="repSenha">Repita a sua senha</label>
                <input type="password" id="repSenha" placeholder="Repita a senha">

                <label for="nome">Como devemos te chamar?</label>
                <input type="text" id="nome" placeholder="Insira o seu nome de perfil">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegistroComp'
}
</script>

<style scoped>

    input {
        background: rgba(217, 217, 217, 0.47);
        border-radius: 5px;
    }

    input::placeholder {
        color: white;
    }

    label {
        font-family: 'Arapey';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
    }

    h1 {
        font-family: 'Arapey';
        color: white;
        font-style: normal;
        font-weight: 400;
        font-size: 47px;
        line-height: 52px;
        display: flex;
        align-items: center;
        text-align: center;
    }

    h2 {
        font-family: 'Arapey';
        color: white;
        font-style: normal;
        font-weight: 400;
        font-size: 37px;
        line-height: 41px;
        display: flex;
        align-items: center;
        text-align: center;
    }

    .form-box {
        background: rgba(88, 112, 130, 0.26);
        border-radius: 20px;
    }
</style>