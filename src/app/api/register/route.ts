import prisma from "@/app/lib/prismadb"
import { NextResponse } from "next/server"

export async function POST(request:Request) {
  try {
    const body = await request.json()
  const {
    username,
    password
  } = body;

  if ( !username || !password) {
    return new NextResponse("Missing info", {status: 400})
  }

  const user = await prisma.user.create({
    data: {
      username,
      password
    }
  })
  
  return NextResponse.json(user)
  } catch (error) {
    console.log(error, "REGISTRATION_ERROR")
    return new NextResponse("Internal Error", {status: 500})
  }
}