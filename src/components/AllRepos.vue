<template>
  <div class="repos-container">
    <div class="repos">
      <h1>My GitHub Repositories</h1>
      <ul>
        <li v-for="repo in paginatedRepositories" :key="repo.id">
          {{ repo.name }}
        </li>
      </ul>
      <div class="btn-container">
        <button @click="currentPage--" :disabled="currentPage === 1">
          Prev
        </button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="currentPage++" :disabled="currentPage === totalPages">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      repositories: [],
      currentPage: 1,
      perPage: 5,
      totalPages: 0,
    };
  },
  methods: {
    async fetchRepositories() {
      try {
        const response = await axios.get(
          "https://api.github.com/users/brightiortsor/repos"
        );
        this.repositories = response.data;
        this.totalPages = Math.ceil(this.repositories.length / this.perPage);
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    paginatedRepositories() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.repositories.slice(startIndex, endIndex);
    },
  },
  mounted() {
    this.fetchRepositories();
  },
};
</script>

<style>
.repos-container {
  margin: -1rem -1rem 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  color: #e25e5e;
}

.repos {
  color: #504b4b;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  font-size: 1.2rem;
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
}

li:hover {
  background-color: #d8bbbb;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

button {
  background-color: #b30000;
  color: #fff;
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  margin: 0 0.5rem;
  font-size: 1.2rem;
}

button:hover {
  background-color: #cc0000;
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
</style>
