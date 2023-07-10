// File: pages/api/youtube.js
import { NextResponse } from 'next/server'
import { fetchYoutubeSentiment } from "@/app/_utils/ApiCalls";

export async function POST(req, res) {
    // We'll only accept POST requests
    if (req.method !== 'POST') {
        return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
    }

    // Check if videoUrl is provided
    const body = await req.json();
    const { videoUrl } = body;
    if (!videoUrl) {
        return NextResponse.json({ message: 'Missing videoUrl parameter' }, { status: 400 });
    }

    try {
        const apiUrl = `${process.env.API_URL}/sentiment`;
        const data = await fetchYoutubeSentiment(videoUrl, apiUrl);

        // Send the sentiment analysis data as a response
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error('Error in /api/analyse:', error);

        // Respond with an error status and message
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
