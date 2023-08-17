export default async function handler(req, res) {
    const designData = req.body;
    const userId = req.user.sub; // Get user's ID
    const result = await submitDesignToBackend(designData, userId);
    res.status(200).json(result);
}

async function submitDesignToBackend(data, userId) {
    const response = await fetch(`${process.env.BACKEND_URL}/users/${userId}/designs`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
}
