/*

You should not fetch an API Route from getStaticProps or getStaticPaths. 
Instead, write your server-side code directly in getStaticProps or getStaticPaths 
(or call a helper function).

A good use case for API Routes is handling form input. 
For example, you can create a form on your page and have it send a POST 
request to your API Route.

*/


export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' })
}