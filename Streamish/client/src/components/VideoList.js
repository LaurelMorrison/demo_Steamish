import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideos, searchVideo } from "../modules/videoManager";

const VideoList = () => {
    // Set state for the videos
  const [videos, setVideos] = useState([]);

    // Pulling a list of all videos, which we can map through in the return
  const getVideos = () => {
    getAllVideos().then((videos) => {
        setVideos(videos)});
  };

  // Adding a search event to handle input changed in return form below
  const handleSearch = (event) => {
      // prevent default to get valid information
    event.preventDefault()
    // console log the input
    console.log(event)

    // setting entered details to then compare to the video list
    let searchInput = event.target.value
    let filterVideos = {}

    // search database and filter potential responses
    // show a list of matches if the filteration match is true
    filterVideos[event.target.id] = searchInput
    searchVideo(searchInput, true)
        .then(videos => setVideos(videos))
    }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="container">
        <form>
           <input className="search" type="text" required placeholder="Search by title:"
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
