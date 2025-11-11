import { defineStore } from 'pinia'
import { ref } from 'vue'
import { API_ROUTES, axiosInstance } from '@/api'
import type { IProfile } from '@/interfaces/profile'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<IProfile>()

  async function fetchProfile() {
    const { data } = await axiosInstance.get(API_ROUTES.profile)
    profile.value = data
  }
  return { profile, fetchProfile }
})
