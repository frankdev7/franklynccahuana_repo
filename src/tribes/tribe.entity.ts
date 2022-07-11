import { Company } from "src/companies/company.entity";
import { Repo } from "src/repos/repos.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tribe {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Company, company => company.tribes)
  companyId: Company;
  
  @Column()
  name: string;

  @Column()
  status: number;

  @OneToMany(() => Repo, repo => repo.tribeId)
  repos: Repo[];
}