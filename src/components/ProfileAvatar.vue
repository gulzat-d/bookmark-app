<script setup lang="ts">
type TProfileAvatarProps = { name: string }
const { name } = defineProps<TProfileAvatarProps>()
</script>

<template>
  <div class="profile-avatar">
    <img src="/public/Avatar.svg" class="profile-avatar__image" alt="Изображение пользователя" />
    <div>
      Привет, <strong>{{ name }}</strong>
    </div>
  </div>
</template>

<style scoped>
.profile-avatar {
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 18px;
  margin-bottom: 40px;
}
.profile-avatar__image {
  width: 80px;
  height: 80px;
}
</style>
