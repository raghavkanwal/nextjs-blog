import fs from 'fs';
import MarkDown from 'markdown-to-jsx'

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, 'utf8');
    return content;
}

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const content = getPostContent(slug);
    return (<article><h1>{ slug }</h1>
    <MarkDown>{content}</MarkDown></article>)
}

export default PostPage;