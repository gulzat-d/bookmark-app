<script setup lang="ts">
import CategoryList from './components/CategoryList.vue';
import ProfileAvatar from './components/ProfileAvatar.vue'


</script>

<template>
  <div class="app">
    <nav class="navbar">
      <ProfileAvatar />
      <CategoryList />
    </nav>
    <main class="main-content">Контент</main>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  min-height: calc(100vh - 140px);
  max-width: 1450px;
  margin: 140px auto 0 auto;
  gap: 200px;
}

.navbar {
  background: var(--color-fg);
  color: var(--color-bg);
  min-width: 400px;
}

.main-content {
  flex: 1;
  background: var(--color-bg);
  color: var(--color-fg);
}
</style>
