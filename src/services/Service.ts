import axios from "../utils/axiosInstance";
export const streamWriteText = async (
  text: string,
  selectedLanguage: string,
  tone: string,
  creativity: string,
  pointOfView: string,
  lengthDescription: string
) => {
  const prompt = `Write a ${lengthDescription} response in ${selectedLanguage}, with a ${tone} tone, and a ${creativity} level of creativity, from a ${pointOfView} point of view.\n\n${text}`;

  const requestBody = {
    model: "deepseek-coder",
    stream: true,
    temperature: 1,
    top_p: 1,
    presence_penalty: 0,
    max_tokens: 2048,
    frequency_penalty: 0,
    messages: [
      { role: "system", content: `You are a helpful assistant.` },
      { role: "user", content: "```" + prompt + "```" },
    ],
  };

  try {
    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer sk-d353d13fb9e94afa8beb597e99e09d8d`,
      },
      body: JSON.stringify(requestBody),
    });

    if (response.body) {
      const reader = response.body.getReader();
      return reader;
    }
  } catch (error) {
    console.error("Error during API call:", error);
    return null;
  }
};
