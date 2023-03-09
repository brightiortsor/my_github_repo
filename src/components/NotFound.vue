<template>
  <AppLayout />
  <div class="home-link">
    <div class="img-container">
      <img src="../assets/404.gif" alt="404" class="404" />
    </div>
    <div class="link-container">
      <RouterLink to="/" class="link"> Go Home </RouterLink>
    </div>
  </div>
</template>
<script>
import AppLayout from "./AppLayout.vue";

export default {
  name: "NotFound",

  components: {
    AppLayout,
  },
};
</script>
<style>
.home-link {
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 100vh;
  margin: 0 -1rem -1rem;
  padding: 0;
}

.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
}
.link-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}
.link {
  color: #0c6e42;
  font-size: 2.5rem;
  margin-top: 3rem;
  border: 1px solid #0c6e42;
  width: 12rem;
  text-decoration: none;
  text-align: center;
  border-radius: 10px;
  padding: 0.4rem;
}

.link:hover {
  background-color: #0c6e42;
  color: white;
}
</style>
