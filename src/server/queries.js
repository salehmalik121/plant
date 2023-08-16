import HttpError from '@wasp/core/HttpError.js'

export const getPlants = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.Plant.findMany({
    where: {
      userId: context.user.id
    }
  });
}