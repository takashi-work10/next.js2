import { NextResponse } from "next/server"
import { jwtVerify } from "jose"

export async function middleware(request){
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
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