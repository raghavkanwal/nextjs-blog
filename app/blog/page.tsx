import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
// import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Masonry from 'react-masonry-component';
import { Badge } from '@/components/ui/badge';

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '' }

type Post = {
    title: string,
    subtitle: string,
    date: string,
    slug: string,
    banner: string,
    tag: string
}


const getPostMetadata = (): Post[] => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter(file => file.endsWith(".md"));
    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8');
        const matterResult = matter(fileContents);

        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: fileName.replace(".md", ""),
            banner: matterResult.data.banner,
            tag: matterResult.data.tag
        };
    });
    return posts;
}

export default function BlogPage() {
    const postsMetaData = getPostMetadata();
    const postsPreviews = postsMetaData.map((post: Post, postIdx: number) => {
        return (<div key={postIdx}>
            <Link href={`/posts/${post.slug}`}>
                <div className="max-w-lg border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
                    <Image className="rounded-lg" src={`/${post.banner}`} alt={post.title} width="600" height="300" />
                    <div className="card-meta bg-white absolute bottom-0 w-[100%] rounded-b-lg">
                        <div className="p-5 flex justify-between items-center">
                            <a href="#" className="display-block block">
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                            </a>
                            {post.tag && <Badge className="display-block block" variant="secondary">{post.tag}</Badge>}
                        </div>
                        <div className="p-5 pt-0">
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.subtitle}</p>
                            <div className="flex justify-between items-center">
                                <span>{post.date}</span>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

            {/* <h2>{postIdx + 1}. <Link href={`/posts/${post.slug}`}>{post.title}</Link></h2>
        <Image src={`/${post.banner}`} alt={post.title} width="300" height="300" />{post.banner} */}
        </div>)
    });


    return (
        <section className="container grid gap-6 pb-8 pt-6 md:py-10 h-screen overflow-auto">
            <div className="flex max-w-[980px] flex-col items-start gap-2">
                <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                    Blog
                </h1>
            </div>
            <div className="grid grid-cols-2">
                <div className="grid gap-4">
                    {postsPreviews.map((el, i) => i % 2 === 0 ? el : null)}
                </div>
                <div className="grid gap-4">
                    {postsPreviews.map((el, i) => i % 2 === 1 ? el : null)}
                </div>
            </div>
        </section>

    )
}