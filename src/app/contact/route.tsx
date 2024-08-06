import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    message:
      "This feature is no longer available, as Shivam has stopped it. Contact him on below provided socials.",
    social_links: {
      twitter: "https://twitter.com/ashokasec",
      github: "https://github.com/ashokasec",
      telegram: "https://telegram.me/ashokasec",
      instagram: "https://instagram.com/ashokasec",
    },
  });
}
