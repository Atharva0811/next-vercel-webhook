import dbConnect from "@/app/utils/mongodb";
import user from "../../model/user";

export async function POST(request: Request) {
  try {
    await dbConnect();
    console.log("Webhook received!");
    await user.create({ name: "John Doe" });
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
