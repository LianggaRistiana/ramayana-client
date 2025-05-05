// Tipe untuk context React
type ChatContextType = {
  chats: Chat[];
  addChat: (chat: Chat) => void;
  updateChatResponse: (index: number, response: string, context?: Context[]) => void;
  clearChats: () => void;
};
