<template>
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
export default {
  name: "NotFound",
};
</script>
<style>
.home-link {
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 100vh;
  margin: -1rem;
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
  width: 10rem;
  text-decoration: none;
  border-radius: 10px;
  padding: 0.4rem;
}

.link:hover {
  background-color: #0c6e42;
  color: white;
}
</style>
