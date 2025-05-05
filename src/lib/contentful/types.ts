import { type EntryFieldTypes } from "contentful";

export type SocialLink = {
  contentTypeId: "socialLink";
  fields: {
    title: EntryFieldTypes.Text;
    link: EntryFieldTypes.Text;
  };
};

export type HomePage = {
  contentTypeId: "homePage";
  fields: {
    seoTitle: EntryFieldTypes.Text;
    seoDescription: EntryFieldTypes.Text;
    heroTitle: EntryFieldTypes.Text;
    heroSubline: EntryFieldTypes.RichText;
    heroImage: EntryFieldTypes.AssetLink;
    journalismTitle: EntryFieldTypes.Text;
    journalismDescription: EntryFieldTypes.RichText;
    journalismImage: EntryFieldTypes.AssetLink;
    journalismWorkSamplesTitle: EntryFieldTypes.Text;
    journalismClientsTitle: EntryFieldTypes.Text;
    journalismWorkSamplesLoadMoreText: EntryFieldTypes.Text;
    moderationTitle: EntryFieldTypes.Text;
    moderationDescription: EntryFieldTypes.RichText;
    moderationImage: EntryFieldTypes.AssetLink;
    moderationWorkSamplesTitle: EntryFieldTypes.Text;
    moderationClientsTitle: EntryFieldTypes.Text;
    resumeTitle: EntryFieldTypes.Text;
  };
};

export type LegalPage = {
  contentTypeId: "legalPage";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
  };
};

export type JournalismWorkSamples = {
  contentTypeId: "journalismWorkSamples";
  fields: {
    title: EntryFieldTypes.Text;
    description: EntryFieldTypes.RichText;
    client: EntryFieldTypes.Text;
    link: EntryFieldTypes.Text;
    createdAt: EntryFieldTypes.Date;
  };
};

export type ModerationWorkSamples = {
  contentTypeId: "moderationWorkSamples";
  fields: {
    title: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
    client: EntryFieldTypes.Text;
    createdAt: EntryFieldTypes.Date;
  };
};

export type PodcastSample = {
  contentTypeId: "podcastSample";
  fields: {
    title: EntryFieldTypes.Text;
    spotifyShareUrl: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
  };
};

export type ResumeEntry = {
  contentTypeId: "resumeEntry";
  fields: {
    title: EntryFieldTypes.Text;
    timeRange: EntryFieldTypes.Text;
    order: EntryFieldTypes.Number;
  };
};

export type ClientTypeOfWork = "journalism" | "moderation";

export type Client = {
  contentTypeId: "client";
  fields: {
    title: EntryFieldTypes.Text;
    typeOfWork: EntryFieldTypes.Text;
    order: EntryFieldTypes.Number;
  };
};
