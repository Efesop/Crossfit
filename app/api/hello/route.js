import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-3DMIQgm7KgujKSu6MpZLrZ8j",
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { exercises, days, intensity, progressive } = req.body;

  // Construct the prompt for OpenAI based on the parameters
  let prompt = `Generate a CrossFit workout plan for ${days} days a week with ${intensity} intensity using the following exercises: ${exercises.join(', ')}.`;

  if (progressive) {
    prompt += ' The workouts should progressively get harder over time.';
  }

  // Call the OpenAI API using the SDK
  const response = await openai.createCompletion({
    engine: "davinci",
    prompt: prompt,
    max_tokens: 150
  });

  // Extract the generated workout from the OpenAI response
  const workout = response.data.choices?.[0]?.message?.content?.trim();

  res.json({ workout });
}
