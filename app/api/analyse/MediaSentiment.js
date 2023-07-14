import YoutubeAnalyzer from "@/app/_utils/YoutubeAnalyzer";
import SentimentAnalyzer from "@/app/_utils/SentimentAnalyzer";
import { extractVideoId } from "../../_utils/helpers";

// Constants
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export async function fetchMediaSentiment(videoUrl, language, platform) {
    // Extract video_id
    const video_id = await extractVideoId(videoUrl)

    let analyzer;
    if (platform === "youtube") {
        analyzer = new YoutubeAnalyzer(YOUTUBE_API_KEY);

    } else {
        return {
            statusCode: 400,
            body: `Unsupported platform: ${platform}`,
        };
    }

    // Get video infos and comments
    const videoInfo = await analyzer.getVideoInfo(video_id);
    const comments = await analyzer.getVideoComments(video_id);

    // Get sentiment analysis
    const sentimentAnalyzer = new SentimentAnalyzer(OPENAI_API_KEY);
    const sentiment = await sentimentAnalyzer.getSentimentFromComments(comments, language);
    const sentimentContent = JSON.parse(sentiment.content)
    sentiment.content = sentimentContent

    const result = { videoInfo, sentiment };
    return result;
}
