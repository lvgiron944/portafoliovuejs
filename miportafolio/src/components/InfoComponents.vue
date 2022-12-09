<template>
    <div>
        <h1>Hola</h1>
        <h3>Un poco de mí</h3>
        <ul>
          <li class="primero"><a href="http://localhost:8080/#/curriculum"> Curriculum </a></li> 
          
          <li class="tercero"><a href="http://localhost:8080/#/contacto"> Contacto </a></li> 
        </ul>
    </div>
</template>
 
<script>
export default {
    name:'InfoComponents',
}
</script>

<style scoped>
h1{
   color: black;
   font-size: 250%;
}
ul{
    list-style: none;
    display: flex;
    width: 100%;
    
    
   
    
}
li{
    text-align: center;
    padding-block-start: 10%;
   
    
}

.primero {
    background-color: rgb(218, 151, 204);
    border-radius: 50%;
    width: 100px;
    height: 70px;
   
    
    
    
}
.segundo{
    background-color: rgba(133, 150, 150, 0.58);
    border-radius: 50%;
    width: 100px;
    height: 70px;
    
    
    
}
.tercero{
    background-color: rgb(116, 172, 202);
    border-radius: 50%;
    width: 100px;
    height: 70px;
    
}

</style>
