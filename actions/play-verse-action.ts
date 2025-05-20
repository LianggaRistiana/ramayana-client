"use server";

// under development
export const processSound = async (
  sargah_number: number,
  bait: number
): Promise<string> => {

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/sound?sargah=${sargah_number}&bait=${bait}`,
    {
      method: "GET",
      headers: {
        Accept: "audio/mpeg",
      },
    }
  );

  if (!response.ok) {
    console.log(response.statusText);
    throw new Error(`Failed to fetch audio: ${response.statusText}`);
  }

  const blob = await response.blob();

  if (blob.type !== "audio/mpeg") {
    throw new Error(`Invalid MIME type: ${blob.type}`);
  }
  const audioUrl = URL.createObjectURL(blob);

  return audioUrl;
};


export const getAudioUrl = async (sargah_number: number, bait: number): Promise<string> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/sound?sargah=${sargah_number}&bait=${bait}`;
  const headResponse = await fetch(url, {
    method: "GET"
  });

  if (headResponse.status === 404) {
    throw new Error(`MP3 file for sargah ${sargah_number} bait ${bait} not found`);
  }

  if (!headResponse.ok) {
    throw new Error(`Failed to fetch audio: ${headResponse.statusText}`);
  }
  return url;
};
