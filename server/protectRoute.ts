export default async (event:any) => {
    const user = await getCookie(event,'token');
    if (!user) {
      throw createError({
        statusCode: 401,
        message: 'Unauthorized',
      });
    }
  };