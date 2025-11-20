import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        //add to wishlist - addtowishlist btn clicked in View
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        //remove wishlist
        removeWishlistItem:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addToWishlist,removeWishlistItem} = wishlistSlice.actions
export default wishlistSlice.reducer