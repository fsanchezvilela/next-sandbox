import React from 'react'

function Index({stars}) {
  return (
    <div>
      <h1>Next stars: {stars}</h1>
    </div>
  )
}

Index.getInitialProps = async ({req}) => {
  console.log("inital props")
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json();
  return { starts: json.stargazers_count}
}

export default Index;