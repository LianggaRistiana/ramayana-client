"use server";

export const processQuery = async ({
  query,
  top_k = 3,
  context_size = 10,
  embedding_model = 1,
  session_id = ""
}: {
  query: string;
  top_k?: number;
  context_size?: number;
  embedding_model?: number;
  session_id?: string;
}): Promise<ApiResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, top_k, context_size, embedding_model, session_id }),
  });

  if (!res.ok) {
    return { response: "Gagal mendapatkan data" };
  }

  const data = await res.json();

  return {
    response: data.response,
    context: data.context,
    session_id: data.session_id,
  };
};
