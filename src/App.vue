<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ProfileAvatar from './components/ProfileAvatar.vue'
import type { IProfile } from './interfaces/profile'

const profile = ref<IProfile>()

async function fetchProfile() {
  const data = await fetch('/api/profile')
  const res = (await data.json()) as IProfile
  profile.value = res
}

onMounted(() => {
  fetchProfile()
})
</script>

<template>
  <div class="app">
    <nav class="navbar">
      <ProfileAvatar :v-if="profile" :name="profile.name" />
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
