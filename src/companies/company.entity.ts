import { Tribe } from "src/tribes/tribe.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;
  
  @Column()
  status: number;

  @OneToMany(() => Tribe, tribe => tribe.companyId)
  tribes: Tribe[];
}