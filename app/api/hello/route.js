import { NextApiRequest, NextApiResponse } from 'next';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

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

  // Call the OpenAI API
  const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${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}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 150,
    }),
  });

  const data = await response.json();

  // Extract the generated workout from the OpenAI response
  const workout = data.choices?.[0]?.text?.trim();

  res.json({ workout });
}
