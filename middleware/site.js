import siteById from '~/apollo/queries/siteById'

export default async function({ isServer, req, app, store }) {
  await app.apolloProvider.clients.defaultClient
    .query({
      query: siteById,
      query: siteById,
      prefetch: () => ({
        id: process.env.CENTRSTAGE_SITE_ID
      }),
      variables: {
        id: process.env.CENTRSTAGE_SITE_ID
      }
    })
    .then(response => {
      store.commit('SET_SITE', response.data.site)
    })
    .catch(error => console.error(error))
}
