<template>
    <div class="HeaderBody">
        <div class="Logo">
            <img src="../../assets/imgs/logo_TuneTown.png" alt="logo TuneTown">
            <h1>TuneTown</h1>
        </div>
        
        <div class="Nav">
          <p>SOBRE</p>
          <p>BLOG</p>
          <p>CONTATO</p>
        </div>
        
        <div class="Icons">
          <img  src="../../assets/imgs/git.png"/>
          <img  src="../../assets/imgs/twt.png"/>
          <img  src="../../assets/imgs/insta.png"/>
        </div>
    </div>
  </template>
  
  <script>

    export default {
      name: 'LoginHeader',
    }
  </script>
  
  <style scoped>
  .HeaderBody {
    width: 100%;
    background: rgba(36, 56, 81, 0.84);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .Logo{
    font-family: Arapey;
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    font-size: 25px;
    font-weight: lighter;
  }
  .Logo img{
      width: 60px;
  }

  .Nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    color: white;
  }
  .Nav p{
    margin: 0 50px 0 50px;
  }
  .Icons{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    color: white;
  }
  .Icons img{
    width: 25px;
    margin-right: 25px;
  }
  </style>
  