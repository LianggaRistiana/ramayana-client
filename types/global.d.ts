// Tipe detail untuk konteks jawaban
type Context = {
  sargah_number: number;
  sargah_name: string;
  bait: number;
  sanskrit_text: string;
  text: string;
};

// Tipe untuk satu chat: query wajib, response & context opsional
type Chat = {
  query: string;
  response?: string;
  context?: Context[];
};

interface String {
  toTitleCase(): string;
}
  

