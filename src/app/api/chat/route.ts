import openai from "@/lib/openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

export async function POST(req: Request) {
  const body = await req.json();

  // Extract the `messages` from the body of the request
  const messages = body.messages.slice(-6);

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    max_tokens: 1024,
    messages: [
      {
        role: "system",
        content:
          "You are a physics problem solver. Solve physics problems and try to explain problems in simple language",
      },
      ...messages,
    ],
  });
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
