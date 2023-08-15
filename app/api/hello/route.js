import fetch from 'node-fetch';

export async function POST(request) {
  const requestBody = await request.json();
  const { exercises, days, intensity, progressive } = requestBody;

  const promptText = `Generate a ${intensity} intensity CrossFit workout for ${days} days using ${exercises.join(', ')}.`;

  const response = await fetch("https://api.openai.com/v1/engines/davinci/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      prompt: promptText,
      max_tokens: 150
    })
  });

  const data = await response.json();

  return new Response(JSON.stringify({ workout: data.choices[0].text.trim() }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
