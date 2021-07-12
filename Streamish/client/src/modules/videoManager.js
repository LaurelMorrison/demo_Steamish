//Setting Relative URL to connect to API. The handling of CORS is in package.json since react it on 3000 port and API is on 5001, so we need to forge the connection
const baseUrl = '/api/video';

//get all videos with the comments (see url)
export const getAllVideos = () => {
  return fetch(`${baseUrl}/GetWithComments`)
    .then((res) => res.json())
};

// POST method to add to the database. 
export const addVideo = (video) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
};

// Call one video, allowing us to view detail pages
export const getVideo = (id) => {
    return fetch(`${baseUrl}/${id}`).then((res) => res.json());
};

//searching the database to parse through data
export const searchVideo = (searchTerms) => {
    return fetch(`${baseUrl}/search?=${searchTerms}`)
        .then((res) => res.json())
};