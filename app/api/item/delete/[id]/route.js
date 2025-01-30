import { NextResponse } from "next/server"
import connectDB from "../../../../../utils/database"
import { ItemModel } from "../../../../../utils/schemaModels"

export async function DELETE(request, context){
    const params = await context.params
    try{
        await connectDB()
        await ItemModel.deleteOne({_id: params.id})
        return NextResponse.json({message: "アイテム削除成功"})
    }catch(err){
        return NextResponse.json({message: "アイテム削除に失敗しました"})
    }  
}

