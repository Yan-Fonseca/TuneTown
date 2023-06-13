<template>
    <div class="perfil-card">
        <img src="../../assets/imgs/perfil.png" alt="foto de perfil">
        <div class="data">
            <p>Nome</p>
            <button class="perfil-btn">Perfil</button>
            <p>Avaliação: x.x/5.0</p>
        </div>
    </div>
</template>



<style scoped>
    .perfil-card {
        width: 187px;
        height: 241px;
        border-radius: 15px;
        background-color: rgba(29, 36, 45, 0.84);
        color: white;
    }

    .perfil-btn {
        border-radius: 7px;
        color:black;
        background-color: rgba(56, 123, 223, 1);
    }
</style>