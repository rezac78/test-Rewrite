import axios from "../utils/axiosInstance";

export const WriteText = async (
  text: string,
  // active: string,
  // activeFormat: string,
  // SelectLan: string
) => {
  const requestBody = {
    model: "deepseek-coder",
    stream: true,
    messages: [
      {
        role: "system",
        content: `You are a helpful assistant`,
      },
      { role: "user", content: text },
    ],
  };
  try {
    const response = await axios.post("/chat/completions", requestBody, {
      headers: { Authorization: `Bearer sk-d353d13fb9e94afa8beb597e99e09d8d` },
    });
    return response.data;
  } catch (error: any) {
    return error.response;
  }
};
