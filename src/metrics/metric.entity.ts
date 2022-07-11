import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Metric {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  coverage: number;

  @Column()
  bugs: number;

  @Column()
  vulnerabilities: number;

  @Column()
  hotspot: number;

  @Column()
  codeSmell: number;
}