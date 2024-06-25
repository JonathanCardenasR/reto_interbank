import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bus' })
export class BusEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  placa: string;

  @Column()
  operador: string;
}
