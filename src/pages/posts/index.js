//import { withRouter } from 'next/router';
//export default withRouter(PostsContainer);
import axios from 'axios';

const Comment = ({ email, body }) => {
  return (
    <>
      <h5>{email}</h5>
      <p>{body}</p>
    </>
  );
};

const PostsContainer = ({ comments, query }) => {
  return (
    <div>
      <h1>(Post Page): you are looking the post:{query.id}</h1>;
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment {...comment} />
          </li>
        ))}
      </ul>
    </div>
  );
};

PostsContainer.getInitialProps = async ({ query }) => {
  console.log(query);
  const res = await axios.get(
    'https://jsonplaceholder.typicode.com/comments?postId=3'
  );
  const { data } = res;
  return { query, comments: data };
};

export default PostsContainer;
