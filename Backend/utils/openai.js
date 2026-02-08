import "dotenv/config";

const getOpenAIAPIResponse = async (message) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "HTTP-Referer": "http://localhost:3000",   
      "X-Title": "SigmaGPT"                      
    },
    body: JSON.stringify({
      model: "openai/gpt-4o-mini",  
      messages: [
        {
          role: "user",
          content: message
        }
      ]
    })
  };

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", options);
    const data = await response.json();

    // Safety check
    if (!data.choices || data.choices.length === 0) {
      throw new Error("No choices returned from OpenRouter");
    }

    return data.choices[0].message.content;
  } catch (err) {
    console.error("OpenRouter API Error:", err);
    return null;
  }
};

export default getOpenAIAPIResponse;
