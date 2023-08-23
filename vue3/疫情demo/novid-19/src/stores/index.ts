import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getApiList } from '../server'

interface state {
  list: any,
}

export const useStore = defineStore({
  id: 'index',
  state: () => ({
    list: {} as any
  }),
  actions: {
    async getList() {
      const result = await getApiList()
      this.list = result
    }
  }
})
