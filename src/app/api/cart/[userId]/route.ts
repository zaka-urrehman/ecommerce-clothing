import { cartTable, db } from "@/lib/drizzle";
import { eq } from 'drizzle-orm'
import { NextRequest, NextResponse } from "next/server";



export const GET = async (
    request: NextRequest,
    { params: { userId } }: { params: { userId: string } }
) => {
    if (!userId) {
        return NextResponse.json({ message: "Invalid User ID" });
    }
    

    try {
        const res = await db.select().from(cartTable).where(eq(cartTable.user_id, userId));
        
        const cartItems = res.map((item) => ({
            id: item.product_id,
            user_id: item.user_id,
            title: item.product_name,
            price: item.price,
            totalPrice: item.price * item.quantity,
            type: item.subcat,
            image: item.image,
            quantity: item.quantity,
        }));
       
        

        const totalQuantity = cartItems.reduce(
            (total, item) => total + item.quantity,
            0
        );
        const totalAmount = cartItems.reduce(
            (total, item) => total + item.totalPrice,
            0
        );

        


        return NextResponse.json({ cartItems, totalQuantity, totalAmount });

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            Message: (error as { message: string }).message,
        });
    }


}