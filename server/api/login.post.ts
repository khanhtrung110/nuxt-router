export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    setCookie(event, 'token', '1111111')
    return true
  })