<template>
  <nav>
    <div class="profile">
      <router-link to="/">
        <img src="../assets/logo.png" alt="logo" />
      </router-link>
    </div>
    <div class="nav-items">
      <router-link class="layout-link" to="/">Home</router-link>
      <router-link class="layout-link" to="/repositories">Repos</router-link>
      <router-link class="layout-link" to="/404">404</router-link>
    </div>
  </nav>
</template>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: #e95252;
  color: #fff;
  padding: 1rem;
  margin: -0.5rem -1rem 0 -1rem;
}
.profile {
  display: flex;
}

.profile img {
  display: hidden;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 0.5rem 0 0.5rem;
}

.nav-items {
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
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
  transition: 0.2s ease-in-out;
  margin: 1rem;
}
.layout-link:hover {
  border-color: #ccc;
}

@media (max-width: 768px) {
  .layout-link {
    font-size: 1rem;
  }
}
</style>
