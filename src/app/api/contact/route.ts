import { IContactInfo, sendShippingInfoEmail } from "@/server/mails";

export async function POST(req: Request) {
  const body = await req.json();
  const message = sendShippingInfoEmail(body as IContactInfo);
  return new Response("message", {
    status: 200,
  });
}
