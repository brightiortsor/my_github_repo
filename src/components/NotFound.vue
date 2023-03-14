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
  height: 90vh;
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
}
.link {
  color: #fff;
  font-size: 2.5rem;
  margin-top: 2rem;
  border: 1px solid #e95252;
  width: 12rem;
  text-decoration: none;
  text-align: center;
  border-radius: 10px;
  padding: 0.4rem;
}

.link:hover {
  background-color: #e95252;
  color: white;
}
</style>
