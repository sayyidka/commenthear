import { authOptions } from "../auth/[...nextauth]/route"
import { getServerSession } from "next-auth/next"
import { NextResponse } from 'next/server'
import { fetchMediaSentiment } from "@/app/api/analyse/MediaSentiment";

export async function POST(req, res) {
    const session = await getServerSession(authOptions)

    if (!session) {
        NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        return;
    }

    // Only accept POST requests
    if (req.method !== 'POST') {
        return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
    }

    // Check if videoUrl is provided
    const body = await req.json();
    const { videoUrl, language, platform } = body;
    if (!videoUrl) {
        return NextResponse.json({ message: 'Missing videoUrl parameter' }, { status: 400 });
    }

    // Get sentiment analysis
    try {
        const data = await fetchMediaSentiment(videoUrl, language, platform);

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error('Error in /api/analyse:', error);

        // Error status and message
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
