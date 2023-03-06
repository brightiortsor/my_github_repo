<template>
  <div>
    <h1>My GitHub Repositories</h1>
    <ul>
      <li v-for="repo in paginatedRepositories" :key="repo.id">
        {{ repo.name }}
      </li>
    </ul>
    <div>
      <button @click="currentPage--" :disabled="currentPage === 1">Prev</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="currentPage++" :disabled="currentPage === totalPages">
        Next
      </button>
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
