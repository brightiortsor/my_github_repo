<template>
  <div class="repos-container">
    <img
      v-if="loading"
      src="../assets/spinloader.gif"
      alt="Loading Spinner"
      class="loading-spinner"
    />
    <div class="repo" v-else>
      <h1 style="text-transform: uppercase">{{ repository.name }}</h1>
      <p>{{ repository.description }}</p>
      <p><strong>Language:</strong> {{ repository.language }}</p>
      <p><strong>Created:</strong> {{ repository.created_at }}</p>
      <p><strong>Last Updated:</strong> {{ repository.updated_at }}</p>
      <p>
        <strong>URL:</strong>
        <a :href="repository.html_url">{{ repository.html_url }}</a>
      </p>
      <p><strong>Stars:</strong> {{ repository.stargazers_count }}</p>
      <button @click="redirectToHome" class="btn">Back Home</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      repository: {},
      loading: true,
    };
  },
  async created() {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // wait for 3 seconds
    const response = await fetch(
      `https://api.github.com/repositories/${this.$route.params.id}`
    );
    const data = await response.json();
    this.repository = data;
    this.loading = false;
  },
  methods: {
    redirectToHome() {
      this.$router.push("/");
    },
  },
  mounted() {
    document.body.style.backgroundColor = "lightblue";
  },
};
</script>

<style>
.btn {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
