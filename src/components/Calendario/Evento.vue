<template>
    <div class="container">
        <div class="ano">
            <h1>2023</h1>
        </div>

        <div class="btn">
            <button class="add">+</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AgendaUser'
}
</script>

<style scoped>
    .container {
        background-color: rgba(36, 43, 52, 1);
        color: white;
        position: relative;
        max-height: 93vh;
    }

    .ano {
        background-color: rgba(41, 51, 61, 1);
        display: flex;
        justify-content: center;
        align-items: center;

        padding-bottom: 20px;
        padding-top: 20px;

        box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
    }

    h1 {
        font-size: 40px;
        align-items: center;
    }

    .btn {
        position: absolute;
        bottom: 30px;
        left: 0;
        right: 0;
        margin: auto;
        display: flex;
        justify-content: center;
    }

    .add {
        background: #2E7A32;
        box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        color: white;

        font-family: 'Arapey';
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        line-height: 53px;
        text-align: center;

        padding-left: 60px;
        padding-right: 60px;
    }

    button:hover {
        cursor: pointer;
    }

</style>