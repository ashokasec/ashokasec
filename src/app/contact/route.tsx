import { NextResponse } from "next/server";
const phone_number: string = process.env.NUMBER || ""

export async function GET(request: Request) {
  return NextResponse.json({message: "This feature is no longer available, as Shivam has stopped it. Contact him on Telegram at https://t.me/ashokasec"})
}
