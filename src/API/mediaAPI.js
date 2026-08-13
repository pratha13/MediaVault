import axios from 'axios'

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY

export async function fetchPhotos(query = 'nature', page = 1, per_page = 20) {
  const searchTerm = (query ?? '').trim()

  if (!searchTerm) {
    throw new Error('Please provide a search query.')
  }

  const res = await axios.get('https://api.unsplash.com/search/photos', {
    params: { query: searchTerm, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  })

  return res.data
}

export default fetchPhotos

export async function fetchVideos(query = 'nature', page = 1, per_page = 20) {
  const searchTerm = (query ?? '').trim()

  if (!searchTerm) {
    throw new Error('Please provide a search query.')
  }

  const res = await axios.get('https://api.pexels.com/v1/videos/search', {
    params: { query: searchTerm, page, per_page },
    headers: { Authorization: PEXELS_KEY },
  })

  return res.data
}
