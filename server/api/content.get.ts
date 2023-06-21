import protectRoute from "../protectRoute";
export default defineEventHandler( async(event) => {
    await protectRoute(event)
    console.log(getCookie(event, 'token'));
    return ['item 1','item2','item3']
  })