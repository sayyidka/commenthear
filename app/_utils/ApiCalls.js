import { extractVideoId } from "./helpers";

export async function fetchYoutubeSentiment(videoUrl, apiUrl) {
    // Extract video_id
    const video_id = await extractVideoId(videoUrl)

    // Create payload
    const requestBody = {
        video_id: video_id,
        num_comments: 10,
        order: "relevance",
        language: "french"
    };

    // API call
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error("Request failed with status: " + response.status);
        }

        const responseData = await response.json();
        const data = JSON.parse(responseData);
        const sentimentContent = JSON.parse(data[1]);

        // Return the fetched data
        return {
            videoInfos: data[0],
            sentimentAnalysis: sentimentContent[0],
        };
    } catch (error) {
        console.error(error);
        // Handle error state if needed
    }

}
