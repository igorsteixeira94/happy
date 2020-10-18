import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity('images')
export default class Images {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  path: string;

  constructor(path: string) {
    this.path = path;
  }
}
