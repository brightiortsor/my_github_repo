<template>
  <div class="repos-container">
    <img
      v-if="loading"
      src="../assets/spinloader.gif"
      alt="Loading Spinner"
      class="loading-spinner"
    />
    <div class="repos" :style="{ opacity: loading ? 0.5 : 1 }" v-else>
      <h1>Bright's GitHub Repositories</h1>
      <ul>
        <li
          style="text-transform: uppercase"
          v-for="repo in paginatedRepositories"
          :key="repo.id"
        >
          <router-link
            class="links"
            :to="{ name: 'single-repo', params: { id: repo.id } }"
            >{{ repo.name }}</router-link
          >
        </li>
      </ul>
      <div class="btn-container">
        <button
          @click="currentPage--"
          :disabled="currentPage === 1"
          :class="{ disabled: currentPage === 1 }"
        >
          Prev
        </button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button
          @click="currentPage++"
          :disabled="currentPage === totalPages"
          :class="{ disabled: currentPage === totalPages }"
        >
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
      loading: true,
    };
  },
  methods: {
    async fetchRepositories() {
      this.loading = true;
      try {
        const response = await axios.get(
          "https://api.github.com/users/brightiortsor/repos"
        );
        console.log(response);
        this.repositories = response.data;
        this.totalPages = Math.ceil(this.repositories.length / this.perPage);
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
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
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

.repos {
  width: 50%;
  margin: 0 auto;
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}
.repos.loading {
  opacity: 0.5;
}
.loading-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  color: #b30000;
  text-align: center;
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

.links {
  color: #504b4b;
  text-decoration: none;
  cursor: pointer;
}

.links:visited {
  color: #867c7c;
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 1.5rem 0;
}

button {
  background-color: #e01f1f;
  color: #fff;
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  margin: 0 0.5rem;
  font-size: 1.2rem;
}

button:hover {
  background-color: #d85d5d;
}

.disabled {
  color: grey;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .repos {
    width: 80%;
  }
  h1 {
    font-size: 1.5rem;
  }

  li {
    font-size: 1rem;
  }

  button {
    font-size: 1rem;
  }
}
</style>
