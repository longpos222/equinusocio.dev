const axios = require('axios').default

axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.CDA}`

module.exports = async function() {
  try {
    const response = await axios.get(
      `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/${process.env.ENVIRONMENT}/entries?content_type=blogPost`
    )
    const allPosts = response.data.items.map((item) => {
      return {
        id: item.sys.id,
        date: item.fields.publishDate,
        title: item.fields.title,
        slug: item.fields.slug,
        body: item.fields.body
      };
    });
    return allPosts
  } catch (error) {
    throw new Error(error)
  }
}
