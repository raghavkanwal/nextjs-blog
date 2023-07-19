import AboutPageSection from "../page-modules/about/AboutPageSection";

import fs from 'fs';

const getPostMetadata = () => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter(file => file.endsWith(".md"));
    const slugs = markdownPosts.map(file => file.replace(".md", ''));

    return slugs;
}

export default function BlogPage({ allPostsData }: { allPostsData:any}) {
    const postsMetaData = getPostMetadata();
    const postsPreviews = postsMetaData.map((slug: string, slugIdx: number) => {
        return (<div key={slugIdx}><h2>{slugIdx + 1}. {slug}</h2></div>)
    });


    return (
        <section className="container grid gap-6 pb-8 pt-6 md:py-10 h-screen">
            <div className="flex max-w-[980px] flex-col items-start gap-2">
                <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                   Blog
                </h1>
            </div>
            { postsPreviews.length} Posts found.
           {postsPreviews}
        </section>

    )
}