import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideos, searchVideo } from "../modules/videoManager";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState([]);


  const getVideos = () => {
    getAllVideos().then((videos) => {
        setVideos(videos)});
  };

  const handleSearch = (event) => {
    event.preventDefault()
    console.log(event)

    let searchInput = event.target.value
    let searchVideos = {}

    searchVideos[event.target.id] = searchInput
    searchVideo(searchInput)
        .then(videos => setVideos(videos))
    }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="container">
        <form>
           <input class="search" type="text" required placeholder="Search by title:"
            onChange={handleSearch} />
        </form>
      <div className="row justify-content-center">
        {videos.map((video) => (
          <Video video={video} key={video.id} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
