import api from '../apis/api'

class AnimalService {
  async getAllAnimals() {
    const response = await api.get('/animals/')
    return response.data
  }
  async saveAnimal(animal) {
    const response = await api.post('/animals/', animal)
    return response.data
  }
  async deleteAnimal(animal) {
    const response = await api.delete(`/animals/${animal.id}/`)
    return response.data
  }
}

export default new AnimalService()