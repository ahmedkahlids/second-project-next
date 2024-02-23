import Link from "next/link"

export default function SinglePost({params}: {params:{postId: string}}):JSX.Element{
    return (
        <div>
           <h1>{params.postId} post</h1> 
            <Link href="/">← Back to home</Link>
        </div>
        );

}

    