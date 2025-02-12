import dbConnect from "@/app/utils/mongodb";
import user from "../../model/user";

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    console.log("Webhook received!");
    await user.create({ name: JSON.stringify(body)});
    // Process the webhook payload
  } catch (error) {
    return new Response(`Webhook error: ${error}`, {
      status: 400,
    });
  }

  return new Response("Success!", {
    status: 200,
  });
}
