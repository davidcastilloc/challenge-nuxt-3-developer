import stores from './stores.json'
export default defineEventHandler(async (event) => {
  return stores
})
