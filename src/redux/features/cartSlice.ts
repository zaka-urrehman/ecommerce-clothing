import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    cart: [],
    totalQuantity: 0,
    totalAmount: 0
};


export const fetchDbData = createAsyncThunk(
    "cart/fetchDbData",
    async (userId: string) => {
        const res = await fetch(`/api/cart/${userId}` );

        if (!res.ok) {
            console.log("Failed to Fetch Data From API");
          }

          const data = await res.json();
          return data; 
    })
    

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add(state, action) {
            let find = state.cart.findIndex((item:any) => item.id === action.payload.id)
            if (find >= 0) {
                state.cart[find].quantity += action.payload.quantity
            } else {

                state.cart.push(action.payload)
            }

        },
        remove(state, action) {
           
            state.cart = state.cart.filter((item:any) => item.id !== action.payload);
        },


        getCartTotal(state){
            let {totalAmount,totalQuantity}=state.cart.reduce(
                (cartTotal:any,cartItems:any)=>{
                //    console.log("cartTotal: ", cartTotal)
                //    console.log("cartItems: ", cartItems)
                   const {price, quantity}= cartItems
                    // console.log(price,quantity)
                    const itemTotal = price*quantity
                    cartTotal.totalAmount += itemTotal
                    cartTotal.totalQuantity += quantity
                    return cartTotal
                },
                {
                    totalAmount : 0,
                    totalQuantity : 0
                }
            )
            state.totalAmount = parseInt(totalAmount.toFixed(2))
            state.totalQuantity = totalQuantity
        }
    },
          extraReducers :(builder)=> {
           builder.addCase(fetchDbData.fulfilled, (state, action) => {
           const { cartItems, totalQuantity, totalAmount} = action.payload;
       
       
         
        state.cart = cartItems;
        state.totalAmount = totalAmount;
        state.totalQuantity = totalQuantity;
        
        });

}

});
// export const cartSlice = createSlice({
//     name: "cart",
//     initialState,
//     reducers: {
//         add(state , action) {
//             state.totalQuantity = state.totalQuantity + action.payload.quantity
//             state.totalAmount = state.totalAmount + action.payload.quantity*action.payload.price


//             const newItem = action.payload
//             const existingItem = state.cart.find((item:any)=>item.id===newItem.id)

//             if(!existingItem){
//                 const totalProductPrice = newItem.price * action.payload.quantity
//                 state.cart.push({
//                     ...newItem,
//                     totalProductPrice,
//                 })
//             } else {
//                 const totalProductPrice = existingItem.totalProductPrice + existingItem.price * action.payload.quantity
//                 existingItem.quantity += action.payload.quantity
//                 existingItem.totalProductPrice = totalProductPrice
//             }
            
//         },
//         remove(state, action) {
         
//             state.cart = state.cart.filter((item:any) => item.id !== action.payload);
//             state.totalQuantity = state.cart.reduce(
//                 (total:any, item:any) => total + item.quantity,
//                 0
//               );
//               state.totalAmount = state.cart.reduce(
//                 (total:any, item: any) => total + item.totalProductPrice,
//                 0
//               );
//               let amt = state.totalAmount
//               console.log(amt)
         
          
//         }
//     },

//     extraReducers :(builder)=> {
//         builder.addCase(fetchDbData.fulfilled, (state, action) => {
//             const { cartItems, totalQuantity, totalAmount} = action.payload;
//             // console.log(totalAmount)
           
             
//             state.cart = cartItems;
//             state.totalAmount = totalAmount;
//             state.totalQuantity = totalQuantity;
            
//             });

//     }

// });






export const { add, remove,getCartTotal } = cartSlice.actions

export default cartSlice.reducer