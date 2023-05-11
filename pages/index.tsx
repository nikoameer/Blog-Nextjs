import Head from "next/head";
import { GetStaticPropsResult } from "next";
import { DrupalBlock, DrupalNode } from "next-drupal";

import { drupal } from "lib/drupal";
import { Layout } from "components/layout";
import { NodeArticleTeaser } from "components/node--article--teaser";

interface IndexPageProps {
  nodes: DrupalNode[];
  aboutMeBlock: DrupalBlock;
}

export default function IndexPage({ nodes, aboutMeBlock }: IndexPageProps) {
  console.log(aboutMeBlock);
  return (
    <Layout>
      <Head>
        <title>Nikolas Kapali</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>
      <div>
        {/* <h1 className="mb-10 text-6xl font-black">Latest Articles.</h1>
        {nodes?.length ? (
          nodes.map((node) => (
            <div key={node.id}>
              <NodeArticleTeaser node={node} />
              <hr className="my-20" />
            </div>
          ))
        ) : (
          <p className="py-4">No nodes found</p>
        )} */}
      </div>
      {/* About me block */}
      <h2 className="uppercase">About me</h2>
      <div dangerouslySetInnerHTML={{ __html: aboutMeBlock.body.value }}></div>
    </Layout>
  );
}

// Fetch data from context
export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<IndexPageProps>> {
  // Fetch articles
  const nodes = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "node--article",
    context,
    {
      params: {
        "filter[status]": 1,
        "fields[node--article]":
          "title,path,field_description,field_image,uid,created",
        include: "field_image,uid",
        sort: "-created",
      },
    }
  );

  // Fetch block by id
  const aboutMeBlock = await drupal.getResource<DrupalBlock>(
    "block_content--basic",
    "bb067f12-4099-4d79-9c93-706dcc5c83c5"
  );

  return {
    props: {
      nodes,
      aboutMeBlock,
    },
  };
}
