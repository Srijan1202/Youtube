
const google_api_key=process.env.REACT_APP_YOUTUBE_API_KEY;

export const youtube = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${google_api_key}`;

export const youtube_content_serch = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=";

export const youtube_serch = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
