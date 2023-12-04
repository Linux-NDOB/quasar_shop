import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import Swal from 'sweetalert2'
import { ref } from 'vue'

export const mainStore = defineStore('main', () => {
  const host = 'https://immika.pythonanywhere.com/api/'

  const provider = ref('')

  const setProvider = (id: string) => { provider.value = id }

  const userId = ref('')

  const setUserId = (id: string) => { userId.value = id }

  const product = ref('')

  const setProduct = (id: string) => { product.value = id }

  const user = ref('')

  const setUser = (userData: string) => { user.value = userData }

  // NORMAL CRUD OPERATIONS
  const get = async (topic: string) => {
    const response = await api.get(host + topic)
    return await response.data
  }

  const post = async (topic: string, data: object) => {
    const response = await api.post(host + topic, data)
    return response.status
  }

  const del = async (topic: string, id: string) => {
    const response = await api.delete(host + topic + id)
    return response.status
  }

  // ADVANCED CRUD OPERATIONS
  const getId = async (topic: string, id: string) => {
    const response = await api.get(host + topic + id)
    return await response.data
  }

  const put = async (topic: string, id: string, data: object) => {
    const response = await api.put(host + topic + id, data)
    return response.status
  }

  const notify = (title : string, text: string, icon: string) => Swal.fire({ title, text, icon, confirmButtonText: 'OK' })

  return { user, setUser, get, post, put, del, getId, notify, product, setProduct, userId, setUserId, provider, setProvider }
},
{
  persist: true
}
)
