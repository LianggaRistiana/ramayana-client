"use server";

// under development
export const processSound = async (
    sargah_number: number,
    bait: number
): Promise<string> => {
    const response = await fetch(`${process.env.API_URL}/sound?sargah=${sargah_number}&bait=${bait}`);

    if (!response.ok) {
        throw new Error('Failed to fetch audio');
    }

    const blob = await response.blob();
    const audioUrl = URL.createObjectURL(blob);

    return audioUrl; 
};


export const FakeProcessSound = async (
    sargah_number: number,
    bait: number
): Promise<string> => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const audioUrl = `/audio/tutorial.mp3`;
    return audioUrl;
};





