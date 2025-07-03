type Context = {
  sargah_number: number;
  sargah_name: string;
  bait: number;
  sanskrit_text: string;
  text: string;
  is_top_k: Boolean;
  is_sound_available: Boolean;
};

type Chat = {
  query: string;
  response?: string;
  context?: Context[];
  embedding_model?: number = 1;
};

interface String {
  toTitleCase(): string;
}
  

type ApiResponse = {
  response: string;
  context?: Context[];
  session_id?: string;
};
