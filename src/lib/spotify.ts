import { SpotifyApi } from "@spotify/web-api-ts-sdk";

export const getSpotifyEpisode = async (spotifyShareUrl: string) => {
  const api = SpotifyApi.withClientCredentials(
    import.meta.env.SPOTIFY_CLIENT_ID,
    import.meta.env.SPOTIFY_CLIENT_SECRET,
  );

  try {
    const episode = await api.episodes.get(
      getSpotifyIdFromUrl(spotifyShareUrl),
      "DE",
    );

    const thumbnail = episode.images[0];

    return {
      ...episode,
      thumbnail,
    };
  } catch (err) {
    throw new Error(`Could not fetch spotify entry ${spotifyShareUrl}: ${err}`)
  }
};

const getSpotifyIdFromUrl = (url: string) => {
  const spotifyId = url.split("/").pop();

  if (spotifyId === undefined) {
    throw new Error("spotify url is not valid");
  }

  return spotifyId.split("?")[0];
};
