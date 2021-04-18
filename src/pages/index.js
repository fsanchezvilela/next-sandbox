import React from 'react';
import axios from 'axios';
import Link from 'next/link';

function Index({ posts }) {
  return (
    <div>
      <h1> Our index page!!!</h1>
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/posts?id=${id}`}>
              <a>Article: {title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

Index.getInitialProps = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const { data } = res;
  console.log(data);
  return { posts: data };
};

export default Index;
