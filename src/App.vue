<script setup>
 import Header from './components/layout/header.vue'
 
</script>

<template>
  <header>
    
  </header>
    <Header />
  <main>
     <router-view />
  </main>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  padding: 2rem;
  
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    
  }

  #app {
    grid-template-columns: 1fr 1fr;
    padding: 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
