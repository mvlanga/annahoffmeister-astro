import satori from "satori";
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";
import { getHomePageEntry } from "@/lib/contentful/utils.ts";

export const GET = async () => {
  const interData = await fs.readFile(
    path.resolve(
      "./node_modules/@fontsource/inter/files/inter-latin-500-normal.woff",
    ),
  );

  const { heroImage } = await getHomePageEntry();

  if (heroImage?.fields.file?.url === undefined) {
    return;
  }

  const imageResponse = await fetch(
    heroImage.fields.file.url.replace("//", "https://"),
  );
  const imageBuffer = await imageResponse.arrayBuffer();

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          color: "black",
          padding: "80px",
          gap: "80px",
        },
        children: [
          {
            type: "img",
            props: {
              src: imageBuffer,
              style: {
                width: "400px",
                height: "100%",
                objectFit: "cover",
              },
            },
          },
          {
            type: "div",
            props: {
              style: {
                width: "600px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              },
              children: [
                {
                  type: "h1",
                  props: {
                    children: "Anna Hoffmeister",
                    tw: "text-8xl leading-[1]",
                  },
                },
                {
                  type: "p",
                  props: {
                    children: "Freie Journalistin und Moderatorin aus Leipzig",
                    tw: "text-5xl text-neutral-900 leading-[1.2]",
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      debug: false,
      fonts: [
        {
          name: "Inter",
          data: interData,
          weight: 400,
          style: "normal",
        },
      ],
    },
  );

  const jpeg = await sharp(Buffer.from(svg))
    .jpeg({
      quality: 60,
    })
    .toBuffer();

  return new Response(new Uint8Array(jpeg), {
    headers: {
      "Content-Type": "image/jpeg",
    },
  });
};
