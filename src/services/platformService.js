import apiClient from "../apiClient"


export const platformService = {
   products:{
      getProducts: async () =>{
         const {data:products} = await apiClient.get("/products")
         return products
      },
      getCategories: async () =>{
         const {data:categories} = await apiClient.get("/categories")
         return categories
      }
   }
}

export default platformService
