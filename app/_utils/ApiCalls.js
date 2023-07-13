import { cookies } from 'next/headers'
import { extractVideoId } from "./helpers";


export async function fetchYoutubeSentiment(videoUrl, apiUrl) {
    // Extract video_id
    const video_id = await extractVideoId(videoUrl)

    // Get sessionToken
    const cookieStore = cookies()
    const sessionToken = cookieStore.get('next-auth.session-token')?.value

    // Set headers
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionToken}`
    }

    // Create payload
    const requestBody = {
        video_id: video_id,
        num_comments: 3,
        order: "relevance",
        language: "french"
    };

    // API call
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: headers,
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
