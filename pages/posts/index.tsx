import type { GetStaticProps, NextPage } from "next";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";

interface PostsProps {
  posts: Array<MDXFrontMatter>;
}

const Posts: NextPage<PostsProps> = ({ posts }) => {
  return (
    <>
      <Page
        title="Posts"
        description="Explore the latest insights, trends, and solutions in the digital world with Hyaena Digital. Our blog posts cover a wide range of topics, from cybersecurity best practices to server management tips and digital marketing strategies. Stay informed, engaged, and inspired as you delve into our articles crafted to empower you in the digital realm."
      >
        <PostList posts={posts} />
      </Page>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    props: {
      posts: mdxFiles,
    },
  };
};

export default Posts;
