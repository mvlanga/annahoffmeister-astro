export const getSpotifyIdFromUrl = (url: string) => {
  const spotifyId = url.split("/").pop();

  if (spotifyId === undefined) {
    throw new Error("spotify url is not valid");
  }

  return spotifyId.split("?")[0];
};
