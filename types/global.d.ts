type Context = {
  sargah_number: number;
  sargah_name: string;
  bait: number;
  sanskrit_text: string;
  text: string;
};

type Chat = {
  query: string;
  response?: string;
  context?: Context[];
};

interface String {
  toTitleCase(): string;
}
  

type ApiResponse = {
  response: string;
  context?: Context[];
};
