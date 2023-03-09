<template>
  <nav>
    <router-link class="layout-link" to="/">Home</router-link>
    <router-link class="layout-link" to="/repositories">Repos</router-link>
    <router-link class="layout-link" to="/404">404</router-link>
  </nav>
</template>

<style>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #e95252;
  color: #fff;
  padding: 1rem;
  margin: -0.5rem -1rem 0 -1rem;
}

.layout-link {
  list-style: none;
  font-size: 1.2rem;
  padding: 5px 10px;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid #dd4747;
  color: #fff;
  border-radius: 10px;
  transition: border-color 0.2s ease-in-out;
  margin: 1rem 0;
}
.layout-link:hover {
  border-color: #ccc;
}
</style>
