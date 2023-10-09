import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getApiList } from '../server'

interface state {
  list: any,
}

export const useStore = defineStore({
  id: 'index',
  state: () => ({
    list: {} as any,
    item: [] as any,
    chinaAdd: {} as any,
    chinaTotal: {} as any,
  }),
  actions: {
    async getList() {
      const result = await getApiList()
      this.list = result
      this.chinaAdd = result.chinaTotal.today
      this.chinaTotal = result.chinaTotal.total
    }
  }
})
