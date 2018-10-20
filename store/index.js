export const state = () => {
  return {
    site: {}
  }
}

export const mutations = {
  SET_SITE(state, site) {
    state.site = site || null
  }
}

export const getters = {
  site(state) {
    return state.site
  },
  artist(state) {
    return state.site.artist
  },
  streams(state) {
    return state.site.artist.streams
  }
}
