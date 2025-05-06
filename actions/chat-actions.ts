"use server";


export const processQuery = async (query: string): Promise<ApiResponse> => {
  const res = await fetch(`${process.env.API_URL}/predict/faiss`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    return {response: "Gagal mendapatkan data" };
  }

  const data = await res.json();

  return {
      response: data.response,
      context: data.context    
  };
};

type FakeApiResponse = {
  response: string;
  context: Context[];
};

const dummyContext: Context[] = [
  {
    sargah_number: 1,
    sargah_name: "PRATHAMAS SARGGAH",
    bait: 2,
    sanskrit_text:
      "Hana sira ratu dibya rêngn, prasasta rin rat musuh nira pranata, jaya pandita rin aji kabèh, san Dasaratha ngma tamoli,",
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

export const FakeApiCall = async (query: string): Promise<FakeApiResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulasi delay

  const response = [
    "Dasaratha adalah ayah dari Triwikrama, yaitu dewa Wisnu ketika turun ke bumi.",
    "Ia penuh dengan kebaikan moral, menguasai Weda, berbakti kepada para dewa, tidak pernah lupa memuja leluhurnya, dan mencintai seluruh anggota keluarganya.",
    "Ia tidak memiliki hawa nafsu karena gagah berani dan bijaksana.",
    "Ia selalu menepati janjinya, bahkan kepada istrinya sendiri.",
    "Ia berhasil memerintah dunia, teman dekat Indra, dan penganut Siwa yang setia.",
    "Semua ksatria tunduk kepadanya karena prestisenya yang besar.",
  ].join(" ");

  return {
    response,
    context: dummyContext,
  };
};
