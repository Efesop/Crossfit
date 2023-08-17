export default async function handler(req, res) {
    const designData = req.body;
    // Replace the following logic with a call to your new backend or database
    const result = await submitDesignToBackend(designData);
    res.status(200).json(result);
  }
  
  async function submitDesignToBackend(data) {
    // Replace 'YOUR_BACKEND_URL' with your actual backend URL
    const response = await fetch('YOUR_BACKEND_URL/designs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  }
  