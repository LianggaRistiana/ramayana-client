"use server";


export const processQuery = async (query: string) => {
    const response = await fetch(`${process.env.API_URL}/predict/faiss`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
  
    if (!response.ok) {
      return { success: false, message: "Failed to generate reponses" };
    }
  
    const { index, message } = await response.json();
  
    return {
      success: true,
      message: "Success",
      data: {
        index,
        message,
      },
    };
  };