const baseUrl = '/api/video';

//get all videos with the comments (see url)
export const getAllVideos = () => {
  return fetch(`${baseUrl}/GetWithComments`)
    .then((res) => res.json())
};

export const addVideo = (video) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
};

// Call one video
export const getVideo = (id) => {
    return fetch(`${baseUrl}/${id}`).then((res) => res.json());
};