<script setup lang="ts">
import { onMounted } from 'vue'
import ProfileAvatar from './components/ProfileAvatar.vue'
import type { TProfile } from './interfaces/profile'
import { useProfileStore } from './stores/profile.store'
import { API_ROUTES } from './api'

const store = useProfileStore()

async function fetchProfile() {
  const data = await fetch(API_ROUTES.profile)
  const res = (await data.json()) as TProfile
  store.profile = res
}

onMounted(() => {
  fetchProfile()
})
</script>

<template>
  <div class="app">
    <nav class="navbar">
      <ProfileAvatar :v-if="store.profile" :name="store.profile.name" />
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
