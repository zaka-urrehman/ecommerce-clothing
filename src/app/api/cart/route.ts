import { db, cartTable, addToCart } from "@/lib/drizzle";
import { eq, and } from 'drizzle-orm'
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";



export const PUT = async (request: NextRequest) => {
    const { userId } = auth();
    const req: addToCart = await request.json();


    try {
        if (req) {
            const res = await db
                .update(cartTable)
                .set({
                    quantity: req.quantity,
                    total_price: req.price,
                })
                .where(and(eq(cartTable.user_id, userId as string), eq(cartTable.product_id, req.product_id))).returning();

                return NextResponse.json({res})
        } else {
            throw new Error ('Failed to Update Data')
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            Message: "Something went wrong",
        });
    }
}




export const POST = async (request: NextRequest) => {
    const { userId } = auth();
    const req = await request.json()

    try {
        if (req) {
            const res = await db
                .insert(cartTable)
                .values({
                    user_id: userId as string,
                    product_id: req.product_id,
                    quantity: req.quantity,
                    image: req.image,
                    price: req.price,
                    product_name: req.product_name,
                    subcat: req.subcat,
                    total_price: req.price * req.quantity,
                })
                .returning();
                return NextResponse.json({ res });
        }  else {
            throw new Error("Failed to Insert Data");
          }

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            Message: "Something went wrong",
          });
    }

    

}