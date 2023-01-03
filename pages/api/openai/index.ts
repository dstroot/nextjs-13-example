import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import { settings } from "../../../config/configuration";

// setup OpenAI connection
const configuration = new Configuration({
  apiKey: settings.openAIKey,
});
const openai = new OpenAIApi(configuration);

// use edge runtime
// On Vercel, Next.js Middleware and API Routes are deployed globally
// using Vercel Edge Functions for the lowest possible latency
// export const config = {
//   runtime: "edge",
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `analyze my dream:\n\n${req.body.text}`,
    temperature: 0.8, // Higher values means the model will take more risks.
    max_tokens: 512,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0.5,
  });

  return res.status(200).json({ result: completion.data });
}
