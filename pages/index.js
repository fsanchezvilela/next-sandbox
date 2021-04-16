import React from 'react';
import axios from 'axios';

function Index({ data }) {
  return (
    <h1>
      <li>Article: {data.title}</li>
    </h1>
  );
}

Index.getInitialProps = async ({ req }) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const { data } = res;
  console.log(data);
  return { data: data };
};

export default Index;
