<template>
   <section>
        <DatosComponents class="datos"></DatosComponents>
        <CurriculComponents class="experiencia"></CurriculComponents>
        <EducacionComponents class="educa"></EducacionComponents>
        <HabilidadesComponents class="habili"></HabilidadesComponents>
    </section> 
    
       
     
   
   
</template>

<script>
import DatosComponents from '@/components/DatosComponents.vue';
import CurriculComponents from '@/components/CurriculComponents.vue';
import EducacionComponents from '@/components/EducacionComponents.vue';
import HabilidadesComponents from '@/components/HabilidadesComponents.vue';



export default {
    name: 'CurriculumView',
    components: {
    DatosComponents,
    CurriculComponents,
    EducacionComponents,
    HabilidadesComponents,
}
}
</script>

<style scoped>
.datos:hover{
    border: 1px solid red;
    background-color: aquamarine;
    border-radius: 20px;
    
  
}
.experiencia:hover{
    border: 1px solid blue;
    border-radius: 20px;
    background-color: bisque;

    
    
}
.educa:hover{
    border: 1px solid black;
    border-radius: 20px;
    background-color: cadetblue;

    
}

.habili{
    border: 1px solid green;
    border-radius: 20px;
    background-color: lightblue
}
</style>
