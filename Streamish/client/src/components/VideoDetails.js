import React, { useEffect, useState } from "react";
import React, {useEffect, useState} from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import Video from './Video';
import { getAllVideos } from "../modules/videoManager";

const VideoDetails = () => {
  const [video, setVideo] = useState([]);

  const getVideos = () => {
    getAllVideos().then((video) => setVideo(video));
  };

  useEffect(() => {
    getVideos();
  }, []);

//   if (!videos) {
//     return null;
//     }

  return (
    <div className="container">
        <h1>BlockBuster</h1>
      <div className="row justify-content-center">
      <Video video={video} />
      <ListGroup>
          {video.comments?.map((c) => (
           <ListGroupItem>{c.message}</ListGroupItem> ))}
         </ListGroup>
      </div>
    </div>
  );
};

export default VideoDetails;