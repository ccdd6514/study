import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getApiList } from '../server'

export const useStore = defineStore({
  id: 'index',
  state: () => ({
    list: {}
  }),
  actions: {
    async getList() {
      const result = await getApiList()
      this.list = result
      console.log(this.list)
    }
  }
})
