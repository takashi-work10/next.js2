import { NextResponse } from "next/server"
import { jwtVerify } from "jose"

export async function middleware(request){
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImlpaS5nYW1pbC5jb20iLCJleHAiOjE3MzgzMDE1Njh9.VZZpVI0CwNvoOluGV1AH0Y3OMxBNZ2OIY52zLhtUakM"
request.headers.get("Authorization")?.split(" ")[1]
    if(!token){
        return NextResponse.json({message: "トークンがありません"})
        try{
            const secret = new TextEncoder().encode("next-market-app-book")
            const decodeJwt = await jwtVerify(token, secretKey)
            return NextResponse.next()
        }catch(err){
            return NextResponse.json({message: "トークンが有効ではありません"})
        }
    }
    return NextResponse.next()
}

export const config = {
    matcher: ["/api/item/create", "/api/item/update/:path*", "/api/item/delete/:path*"],
}