import { Request, Response } from 'express';
import { getMongoRepository, getMongoManager } from 'typeorm';
import Orphanage from '../models/Orphanage';
import Images from '../models/Images';
import orphanageView from '../views/orphanages_view';

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

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
      return new Images(image.filename);
    });

    const orphanagesRepository = getMongoRepository(Orphanage);

    const orphanage = new Orphanage();

    orphanage.name = name;
    orphanage.latitude = latitude;
    orphanage.longitude = longitude;
    orphanage.about = about;
    orphanage.instructions = instructions;
    orphanage.opening_hours = opening_hours;
    orphanage.open_on_weekends = open_on_weekends;
    orphanage.images = images;

    const manager = getMongoManager();
    await manager.save(orphanage);
    return response.status(201).json(orphanageView.render(orphanage));
  },

  async index(request: Request, response: Response): Promise<Response> {
    const orphanagesRepository = getMongoRepository(Orphanage);

    const orphanages = await orphanagesRepository.find();
    return response.status(201).json(orphanageView.renderMany(orphanages));
  },

  async show(request: Request, response: Response): Promise<Response> {
    const { _id } = request.params;
    const orphanagesRepository = getMongoRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail(_id);
    return response.status(201).json(orphanageView.render(orphanage));
  },
};
