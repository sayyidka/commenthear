import { google } from 'googleapis';
import SocialMediaAnalyzer from './SocialMediaAnalyzer.js';

class YoutubeAnalyzer extends SocialMediaAnalyzer {
    constructor(key) {
        super();
        this.youtube = google.youtube({
            version: 'v3',
            auth: key
        });
    }

    async getVideoInfo(video_id) {
        const response = await this.youtube.videos.list({
            part: "snippet,statistics",
            id: video_id
        });
        const data = response.data.items[0];
        const video_title = data.snippet.title;
        const channel_title = data.snippet.channelTitle;
        const thumbnail = data.snippet.thumbnails.medium.url;
        const view_count = data.statistics.viewCount;

        return {
            "video_title": video_title,
            "channel_title": channel_title,
            "thumbnail": thumbnail,
            "view_count": view_count,
        };
    }

    async getVideoComments(video_id) {
        const response = await this.youtube.commentThreads.list({
            part: "snippet,replies",
            videoId: video_id,
            maxResults: 30,
            order: "relevance",
            textFormat: "plainText",
        });

        const comments_count = response.data.pageInfo.totalResults;
        const comments_threads = response.data.items;
        const comments = [];

        for (let i = 0; i < comments_count; i++) {
            const comment = comments_threads[i].snippet.topLevelComment.snippet.textOriginal;
            comments.push(comment);
        }

        const coms = comments.join(";").trim().replace("\n", "");
        return coms;
    }
}

export default YoutubeAnalyzer;
