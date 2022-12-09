<template>
    <main>
        <ContactoComponents class="formu"></ContactoComponents>
        <FooterComponets> </FooterComponets>
    </main>
   
    
   
  
</template>

<script>
import ContactoComponents from '@/components/ContactoComponents.vue';
import FooterComponets from '@/components/FooterComponets.vue';

export default {
    name:'ContactView',
    components: {
    ContactoComponents,
    FooterComponets,
}
}
</script>

<style scoped>
*{
    
      margin: 10px;
      padding: 0px;
}
.formu{
    background-color: rgba(208, 173, 207, 0.527);
    border: 2px solid rgb(217, 9, 44);
    height: 50vh;
    border-radius: 20px;
 
}


main{
    width: 100%;
    text-align: center;
}



</style>
