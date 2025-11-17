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
  const homePageEntries =
    await contentfulClient.withoutUnresolvableLinks.getEntries<HomePage>(
      {
        content_type: "homePage",
        order: ["-sys.updatedAt"],
      }
    );

  const latestHomePage = homePageEntries.items[0];

  if (!latestHomePage) {
    throw new Error("Could not load home page entry")
  }

  return latestHomePage.fields;
};

export const getPodcastSample = async () => {
  const podcastSampleEntries =
    await contentfulClient.withoutUnresolvableLinks.getEntries<PodcastSample>({
      content_type: "podcastSample",
      order: ["-sys.updatedAt"],
    });

  const latestPodcastSample = podcastSampleEntries.items[0];

  if (!latestPodcastSample) {
    throw new Error("Could not fetch podcast entry")
  }

  return latestPodcastSample.fields;
};
