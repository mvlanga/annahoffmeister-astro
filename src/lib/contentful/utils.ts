import type {
  Client,
  ClientTypeOfWork,
  HomePage,
  JournalismWorkSamples,
  ModerationWorkSamples,
  PodcastSample,
  ResumeEntry,
} from "@/lib/contentful/types.ts";
import { contentfulClient } from "@/lib/contentful/client.ts";

export const getAllJournalismWorkSamples = async () => {
  const journalismWorkSamples =
    await contentfulClient.getEntries<JournalismWorkSamples>({
      content_type: "journalismWorkSamples",
      order: ["-fields.createdAt"],
    });

  return journalismWorkSamples.items;
};

export const getAllModerationWorkSamples = async () => {
  const moderationWorkSamples =
    await contentfulClient.getEntries<ModerationWorkSamples>({
      content_type: "moderationWorkSamples",
      order: ["-fields.createdAt"],
    });

  return moderationWorkSamples.items;
};

export const getAllResumeEntries = async () => {
  const moderationWorkSamples = await contentfulClient.getEntries<ResumeEntry>({
    content_type: "resumeEntry",
    order: ["fields.order"],
  });

  return moderationWorkSamples.items;
};

export const getClientsByTypeOfWork = async (typeOfWork: ClientTypeOfWork) => {
  const moderationWorkSamples = await contentfulClient.getEntries<Client>({
    content_type: "client",
    order: ["fields.order"],
  });

  return moderationWorkSamples.items.filter(
    (item) => item.fields.typeOfWork === typeOfWork,
  );
};

export const getHomePageEntry = async () => {
  const homePage =
    await contentfulClient.withoutUnresolvableLinks.getEntry<HomePage>(
      "5uanwBjyBfbJGwLamfmZQ6",
    );

  return homePage.fields;
};

export const getPodcastSample = async () => {
  const podcastSample =
    await contentfulClient.withoutUnresolvableLinks.getEntry<PodcastSample>(
      "2MkAPEH7lGIhqdLz3xfEXq",
    );

  return podcastSample.fields;
};
