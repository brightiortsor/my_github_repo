<template>
  <div class="home-link">
    <RouterLink to="/" class="link"> Home </RouterLink>
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
  align-items: center;
}

.home-link .icon {
  margin-right: 0.5rem;
}
.link {
  color: #0c6e42;
  font-size: 1.5rem;
}
</style>
