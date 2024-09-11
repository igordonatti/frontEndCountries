import { api } from "./provider"

export const useApi = () => ({
  getAllCountries: async () => {
    try {
      const response = await api.get('/availableCountries');
      return response.data;
    } catch (error) {
      throw new Error('Cant reach the API: ' + error);
    }
  },
  getInfoCountry: async (acronym: string) => {
    try {
      const response = await api.get(`/countryInfo/${acronym}`)
      return response.data;
    } catch (error) {
      throw new Error('Cant reach the API: ' + error);
    }
  }
})