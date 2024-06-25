import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'itinerario' })
export class ItinerarioEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  ciudadOrigen: string;

  @Column()
  ciudadDestino: string;

  @Column()
  horaSalida: string;

  @Column()
  horaLlegada: string;

  @Column()
  precio: number;

  @Column()
  busId: number;
}
