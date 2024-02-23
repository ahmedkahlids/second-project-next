export default function reviewDetail({
    params,
}: {
    params: {
        postId: string
        reviewId: string
    };
}) {
    return <h1>
        Review {params.reviewId} for post {params.postId}
    </h1>
}