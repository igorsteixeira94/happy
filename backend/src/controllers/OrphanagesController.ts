import { Request, Response } from 'express';
import { getMongoRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

export default {
  async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const orphanagesRepository = getMongoRepository(Orphanage);

    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    });

    await orphanagesRepository.save(orphanage);

    return response.status(201).json(orphanage);
  },
  async index(request: Request, response: Response): Promise<Response> {
    const orphanagesRepository = getMongoRepository(Orphanage);

    const orphanages = await orphanagesRepository.find();
    return response.status(201).json(orphanages);
  },

  async show(request: Request, response: Response): Promise<Response> {
    const { _id } = request.params;
    const orphanagesRepository = getMongoRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail(_id);
    return response.status(201).json(orphanage);
  },
};
