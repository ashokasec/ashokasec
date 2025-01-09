import { ADMIN_SOCIALS } from "@/lib/config";
import { notFound, redirect } from "next/navigation";

const mapping = {
  github: ADMIN_SOCIALS.github,
  x: ADMIN_SOCIALS.x,
  telegram: ADMIN_SOCIALS.telegram,
};

function findSocialKey(inputKey: string) {
  for (const [key, value] of Object.entries(mapping)) {
    if (key === inputKey) {
      return value;
    }
  }
  return null;
}

export default async function Page({
  params,
}: {
  params: Promise<{ redirect: "string" }>;
}) {
  const redirectKey = (await params).redirect;
  const isValidKey = findSocialKey(redirectKey);
  return isValidKey ? redirect(isValidKey) : notFound();
}
