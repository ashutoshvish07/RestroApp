import { ActionTypes, Product } from './../types/types';
import { CartType } from "@/types/types"
import { create } from "zustand"
import {persist} from "zustand/middleware"

const INITIAL_STATE = {
    products :[],
    totalItems:0,
    totaltPrice:0
}

export const useCartStore = create(persist<CartType & ActionTypes>((set,get)=>({
    products:INITIAL_STATE.products,
    totalItems:INITIAL_STATE.totalItems,
    totalPrice:INITIAL_STATE.totaltPrice,
    addToCart(item){
        set((state)=>({
            products:[...state.products,item],
            totalItems:state.totalItems + item.quantity,
            totaltPrice:state.totalPrice+item.price
        }))
    },
    removeFromCart(item){
        set((state)=>({
            products :state.products.filter( (product) => product.id != item.id ),
            totalItems:state.totalItems - item.quantity,
            totaltPrice: state.totalPrice - item.price

        }))
    }
}),{name:"cart",skipHydration:true}))