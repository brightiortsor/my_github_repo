<template>
  <div class="repo">
    <h1>{{ repository.name }}</h1>
    <p>{{ repository.description }}</p>
    <p><strong>Language:</strong> {{ repository.language }}</p>
    <p><strong>Created:</strong> {{ repository.created_at }}</p>
    <p><strong>Last Updated:</strong> {{ repository.updated_at }}</p>
    <p>
      <strong>URL:</strong>
      <a :href="repository.html_url">{{ repository.html_url }}</a>
    </p>
    <p><strong>Stars:</strong> {{ repository.stargazers_count }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { repository: {} };
  },
  async created() {
    const response = await fetch(
      `https://api.github.com/repositories/${this.$route.params.id}`
    );
    const data = await response.json();
    this.repository = data;
  },
};
</script>
