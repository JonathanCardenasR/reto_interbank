import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'reserva' })
export class ReservaEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  userId: number;

  @Column()
  asientoId: number;

  @Column()
  busId: number;
}
