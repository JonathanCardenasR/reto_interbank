import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'asiento' })
export class AsientoEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  type: string;

  @Column()
  value: number;

  @Column()
  description: string;
}
