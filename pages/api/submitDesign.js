export default async function handler(req, res) {
    const designData = req.body;
    const result = await submitDesignToBackend(designData);
    res.status(200).json(result);
}

async function submitDesignToBackend(data) {
    const response = await fetch(`${process.env.BACKEND_URL}/designs`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
}
