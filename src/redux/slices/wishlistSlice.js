import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        //add to wishlist - addtowishlist btn clicked in View
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        }
        //remove wishlist
    }
})

export const {addToWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer