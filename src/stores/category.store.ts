import { defineStore } from 'pinia'
import { ref } from 'vue'
import { API_ROUTES, axiosInstance } from '@/api'
import type { ICategory } from '@/interfaces/category'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<ICategory[]>()

  async function fetchCategories() {
    const { data } = await axiosInstance.get(API_ROUTES.categories)
    categories.value = data
  }
  return { categories, fetchCategories }
})
