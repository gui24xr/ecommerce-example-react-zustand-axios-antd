import { create } from "zustand";
import platformService from "../services/platformService";


const useProductsStore = create((set,get) =>({
   loading: false,
   error: null,
   productsData:{loaded:false, items:[]},
   selectedCategory: null,
   categoriesData:{loaded:false, items:[]},
   getProducts : async () =>{
      try{
         set({loading: true})
         const products = await platformService.products.getProducts()
         set({
            loading: false,
            productsData:{
               loaded: true, 
               items: products, 
            }
         })
      }catch(error){
         set({error: error.message, loading: false})
      }
   },
   getCategories: async () =>{
      try{
         set({loading: true})
         const categories = await platformService.products.getCategories()
         console.log('categories store',categories)
         set({categoriesData:{
            loaded: true, 
            items: categories
         }})
      }catch(error){
         set({error: error.message})
      }
   }
}))

export default useProductsStore