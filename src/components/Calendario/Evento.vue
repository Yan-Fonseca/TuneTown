<template>
    <div class="container">
        <div class="ano">
            <h1>2023</h1>
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

</style>