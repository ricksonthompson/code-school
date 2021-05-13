import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';

import {
  Container,
  Video,
  UpperTitle,
  FlexboxLeft,
  FlexboxRight,
  NextVideos,
  NextVideoTitle,
} from './styles';
import api from '../../../services/api';
import Loading from '../../../components/Loading';

interface LocationState {
  courseName: string;
  playlistId: string;
  slidesLink: string;
}

interface Video {
  snippet: {
    title: string;
    mediumTitle: string;
    shortTitle: string;
    position: number;
    description: string;
    resourceId: {
      videoId: string;
    };
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

const VideoPlayer: React.FC = () => {
  const { state } = useLocation<LocationState>();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video>(() => {
    const lastVideoWatched = localStorage.getItem(
      `@CodeSchoolPlayer:${state.playlistId}`,
    );

    if (!lastVideoWatched) {
      return {
        snippet: { position: 0 },
      } as Video;
    }

    return JSON.parse(lastVideoWatched);
  });

  useEffect(() => {
    api
      .get('/playlistItems', {
        params: {
          part: 'snippet',
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
          maxResults: 50,
          playlistId: state.playlistId,
        },
      })
      .then((response) => {
        const filteredData: Video[] = response.data.items.filter(
          (video: Video) => video.snippet.title !== 'Private video',
        );

        if (filteredData[0].snippet.title.includes('-')) {
          filteredData.forEach((element: Video) => {
            const { title } = element.snippet;
            const splitTitle = title.split('- ')[1];
            const splitSplitTitle = splitTitle.split(':')[0];

            element.snippet.mediumTitle = splitTitle;
            element.snippet.shortTitle = splitSplitTitle;
          });
        }

        setData(filteredData);

        if (!selectedVideo.snippet.resourceId) {
          setSelectedVideo(response.data.items[0]);
        }

        setLoading(false);
      });
  }, [state.playlistId, selectedVideo.snippet.resourceId]);

  const changeVideo = useCallback(
    (id: number) => {
      setSelectedVideo(data[id]);
      localStorage.setItem(
        `@CodeSchoolPlayer:${state.playlistId}`,
        JSON.stringify(data[id]),
      );
    },
    [data, state.playlistId],
  );

  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <Container>
          <FlexboxLeft>
            <p>{state.courseName}</p>
            <UpperTitle>
              <strong>
                {selectedVideo.snippet.mediumTitle ||
                  selectedVideo.snippet.title}
              </strong>
              {state.slidesLink !== '' && (
                <a
                  href={state.slidesLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                </a>
              )}
            </UpperTitle>
            <iframe
              title="videoPlayer"
              src={`https://www.youtube.com/embed/${selectedVideo.snippet.resourceId.videoId}?rel=0`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <span>{selectedVideo.snippet.description}</span>
          </FlexboxLeft>
          <FlexboxRight>
            <NextVideoTitle>
              <strong>Próximas aulas</strong>
            </NextVideoTitle>
            <NextVideos id="next-videos">
              <PerfectScrollbar>
                {data.map((video) => {
                  const {
                    position,
                    thumbnails,
                    shortTitle,
                    mediumTitle,
                  } = video.snippet;
                  return (
                    <Video
                      key={String(position)}
                      onClick={(): void => changeVideo(position)}
                    >
                      <img src={thumbnails.medium.url} alt="" />
                      <span>{shortTitle}</span>
                      <small>{mediumTitle}</small>
                    </Video>
                  );
                })}
              </PerfectScrollbar>
            </NextVideos>
          </FlexboxRight>
        </Container>
      )}
    </>
  );
};

export default VideoPlayer;
