'use client'

import { useState } from "react";
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { Send } from "lucide-react";
import { useChat } from "@/hooks/use-chat";


const dummyContext: Context[] = [
    {
      sargah_number: 1,
      sargah_name: "PRATHAMAS SARGGAH",
      bait: 2,
      sanskrit_text: "Hana sira ratu dibya rêngn, prasasta rin rat musuh nira pranata, jaya pandita rin aji kabèh, san Dasaratha ngma tamoli,",
      text: "He was the father of Triwikrama, that is god Wisnu when he descended to earth for the purpose of bringing happiness to the world.",
    },
    {
      sargah_number: 1,
      sargah_name: "PRATHAMAS SARGGAH",
      bait: 2,
      sanskrit_text: "",
      text: "Sang Dasaratha was full of moral excellence, he knew the Vedas, he was devoted to the gods, never forgot to worship his ancestors, and loved all the members of his family.",
    },
    {
      sargah_number: 1,
      sargah_name: "PRATHAMAS SARGGAH",
      bait: 4,
      sanskrit_text: "",
      text: "Passion etc. are close enemies, staying in one's heart and never far from the body, but they were not found in him, as he was gallant and wise in all his conducts.",
    },
    {
      sargah_number: 1,
      sargah_name: "PRATHAMAS SARGGAH",
      bait: 6,
      sanskrit_text: "",
      text: "Also he was true to his words, even to his wives he did not lie; the more so to other people; all his words were very kind and good.",
    },
    {
      sargah_number: 1,
      sargah_name: "PRATHAMAS SARGGAH",
      bait: 7,
      sanskrit_text: "",
      text: "He was successful in ruling the world, also he was a close and very devoted friend of Indra. He was a faithful adherent of Siwaism, and conducted Siwa-worship regularly with increasing dedication.",
    },
    {
      sargah_number: 1,
      sargah_name: "PRATHAMAS SARGGAH",
      bait: 8,
      sanskrit_text: "",
      text: "All the ksatriyas were humble and submissive to him, they were always ready to give their services, (as) it seemed that his prestige was great.",
    },
  ];
  


export default function InputQuery() {
    const { chats, addChat, updateChatResponse } = useChat();

    const [query, setQuery] = useState("");
    const handleSubmit = () => {
        // Cek jika query tidak kosong
        if (query.trim()) {
          // Menambahkan chat baru ke context
          addChat({ query });
          setQuery(""); // Reset query setelah ditambahkan
          const index = chats.length; 
          updateChatResponse(index, "Dasaratha adalah ayah dari Triwikrama, yaitu dewa Wisnu ketika turun ke bumi. Ia penuh dengan kebaikan moral, menguasai Weda, berbakti kepada para dewa, tidak pernah lupa memuja leluhurnya, dan mencintai seluruh anggota keluarganya. Ia tidak memiliki hawa nafsu karena gagah berani dan bijaksana. Ia selalu menepati janjinya, bahkan kepada istrinya sendiri. Ia berhasil memerintah dunia, teman dekat Indra, dan penganut Siwa yang setia. Semua ksatria tunduk kepadanya karena prestisenya yang besar.",
            dummyContext
          );
        }
      };
    

    return (
        <div className="px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-screen-lg 2xl:max-w-screen-2xl mx-auto py-4 bg-background fixed bottom-0 left-0 right-0">
            <div className=" flex justify-between items-center gap-2 px-4 py-4 border rounded-2xl shadow-lg bg-sidebar">

                <Textarea
                    placeholder="Tulis pertanyaan seputar ramayana"
                    className="border-none dark:bg-transparent shadow-none focus:ring-0 focus:outline-none resize-none focus-visible:ring-0"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                ></Textarea>
                <Button
                    onClick={handleSubmit}
                    disabled={!query.trim()}
                >
                    <Send></Send>
                    Kirim
                </Button>
            </div>
        </div>
    );
}