/* eslint-disable camelcase */
import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import Images from './Images';

@Entity('orphanages')
export default class Orphanage {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  open_on_weekends: boolean;

  @Column(type => Images)
  images: Images[];

  @CreateDateColumn({ name: 'created_at', default: new Date(), type: 'date' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', default: new Date(), type: 'date' })
  updated_at: Date;
}
