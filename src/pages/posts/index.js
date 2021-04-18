const PostsContainer = ({query}) => {
    return (
        <h1>
            (Post Page): you are looking the post:{query.id}
        </h1>
    )
}

PostsContainer.getInitialProps =   async ({query}) => {
    console.log(query)
    return {query}
}

export default PostsContainer;