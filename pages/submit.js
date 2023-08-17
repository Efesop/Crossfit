export default function SubmitDesign() {
    const handleSubmit = async (event) => {
      event.preventDefault();
      const designData = {
        // Your form data here
      };
      const response = await fetch('/api/designs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(designData),
      });
      const result = await response.json();
      if (result.success) {
        // Handle successful submission
      } else {
        // Handle error
      }
    };
  
    // Your form fields and submission logic here
  }
  