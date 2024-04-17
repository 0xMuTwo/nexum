import { Pinecone } from "@pinecone-database/pinecone";

export const getPineconeClient = () => {
  console.log(
    `Creating Pinecone Client... API:${process.env.PINECONE_API_KEY}`
  );
  const pc = new Pinecone({
    apiKey: "eff9a5e7-d274-4deb-85b8-9a7697bd1f85",
  });

  return pc;
};
