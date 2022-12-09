<template>
  <section>
  <div class="about">
    <img class="imagen" src="../assets/20220625_155740.jpg" alt="">
    <MiPortafolio></MiPortafolio>
  </div>
  <div class="otro">
    <InfoComponents></InfoComponents>
  </div>
</section>
</template>

<script>
import MiPortafolio from '@/components/MiPortafolio.vue'
import InfoComponents from '@/components/InfoComponents.vue'
export default {
  name:'AbautView',
  components: {
    MiPortafolio,
    InfoComponents,
  }
}
</script>

<style scoped>

.imagen{
  height: 50vh;
  width: 100%;
  border-radius: 50%;
    width: 350px;
    height: 400px;
 

}
section{
display: flex;
width: 70%;
justify-content: center;


 }

  
</style>


