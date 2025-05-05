import { defineAction } from "astro:actions";
import { getAllJournalismWorkSamples } from "@/lib/contentful/utils.ts";

export const server = {
  getAllJournalismWorkSamples: defineAction({
    handler: async () => getAllJournalismWorkSamples(),
  }),
};
