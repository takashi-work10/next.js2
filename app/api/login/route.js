import { NextResponse } from "next/server"
import { SignJWT } from "jose"
import connectDB from "../../../utils/database"         
import { UserModel } from "../../../utils/schemaModels"

export async function POST(request){
    const reqBody = await request.json()
    try{
        await connectDB()
        const savedUserData =await UserModel.findOne({email: reqBody.email})
        if(savedUserData){
            const secret = new TextEncoder().encode("next-market-app-book")
            const payload = {
                email: reqBody.email,
            }
            const token = await new SignJWT(payload).setProtectedHeader({alg: "HS256"}).setExpirationTime("1h").sign(secretKey)
            console.log(token)
            return NextResponse.json({message: "ログイン成功", token: token})
        }else{
            return NextResponse.json({message: "ログインに失敗しました"})
        }
    }catch(err){
        return NextResponse.json({message: "ログインに失敗しました"})
    }   
}