import { NextResponse } from "next/server";
const phone_number: string = process.env.NUMBER || ""

export async function GET(request: Request) {
  return NextResponse.redirect(`https://wa.me/${phone_number}`, 302)
}