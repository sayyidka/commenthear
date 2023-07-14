import { Configuration, OpenAIApi } from "openai";

class SentimentAnalyzer {
    constructor(key) {
        // Initialize OpenAI API client
        const configuration = new Configuration({
            apiKey: key,
        });
        this.openai = new OpenAIApi(configuration);
    }

    #buildPrompt(language, comments) {
        let systemMessage = `
        You are an expert marketer and youtuber who worked for 20 years in the marketing field and you know human psychology very well. 
        Your task is to help me understand the followers of youtube channels, by analyzing their comments. 
        From the provided comments, give the most detailed insights in a JSON following this format. Always say something different in the sections:
        [{
        "Overall Sentiment": "explain the detailed overall sentiment of the viewers",
        "Sentiment Score" : "Give a number between 0 and 100",
        "Viewer Preferences": What the followers like the best in the video",
        "Areas for Improvement": "What they dislike the most and provide advices to improve the quality of my videos",   
        "Keyword Analysis: give the 6 frequently mentioned keywords within the comments to understand the topics viewers are most interested in",
        }]  
        `;
        if (language) {
            systemMessage = systemMessage + ` Provide the answers in ${language}.`;
        }
        const humanMessage = `Comments : ${comments}`;
        return [
            { "role": "system", "content": `${systemMessage}` },
            { "role": "user", "content": `${humanMessage}` }]
    }

    async getSentimentFromComments(comments, language = null) {
        // Build prompt
        const prompts = this.#buildPrompt(language, comments);

        // Call ChatGPT API
        const completion = await this.openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: prompts,
            temperature: 0.2,
            max_tokens: 700,
        });
        return completion.data.choices[0].message;
    }
}

export default SentimentAnalyzer;
