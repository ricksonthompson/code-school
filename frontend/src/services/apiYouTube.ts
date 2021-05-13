import axios from 'axios';

const apiYouTube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});

export default apiYouTube;
