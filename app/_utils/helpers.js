export async function extractVideoId(videoUrl) {
    const urlObj = new URL(videoUrl);
    const videoId = urlObj.searchParams.get("v");
    return videoId
}