import type { TProfile } from '@/interfaces/profile'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<TProfile>()
  return { profile }
})
