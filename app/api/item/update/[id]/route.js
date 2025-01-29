import { NextResponse } from "next/server"
import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels"

export async function PUT(request, context){
    const reqBody = await request.json()
    try{
        await connectDB()
        const params = await context.params
        const singleItem = await ItemModel.findOne({_id: params.id})
        if(singleItem.email === reqBody.email){
            await ItemModel.updateOne({_id: params.id}, reqBody)
            return NextResponse.json({message: "アイテム更新成功"})
        }else{
            return NextResponse.json({message: "アイテム更新に失敗しました"})
        }
    }catch(err){
        return NextResponse.json({message: "アイテム更新に失敗しました"})
    }
}

