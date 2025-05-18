"use server";


export const processQuery = async (
  query: string,
  top_k: number = 3,
  context_window: number = 10
): Promise<ApiResponse> => {
  const res = await fetch(`${process.env.API_URL}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, top_k, context_window }),
  });

  if (!res.ok) {
    return { response: "Gagal mendapatkan data" };
  }

  const data = await res.json();

  return {
    response: data.response,
    context: data.context,
  };
};


