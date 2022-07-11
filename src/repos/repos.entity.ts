import { Metric } from "src/metrics/metric.entity";
import { Tribe } from "src/tribes/tribe.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Repo {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Tribe, tribe => tribe.repos)
  tribeId: Tribe;

  @Column()
  name: string;

  @Column()
  state: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @Column()
  status: string;

  @OneToOne(() => Metric)
  @JoinColumn()
  metricId: Metric;

}