import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';
import { CompanyCreateDto } from './dto/company.create.dto';
import { CompanyDto } from './dto/company.dto';

@Injectable()
export class CompaniesService {

  constructor(@InjectRepository(Company) private companyRepository: Repository<Company>) { }

  async getAll(): Promise<CompanyDto[]> {
    let companiesDto = [];
    let companies = await this.companyRepository.find();
    companies.forEach(company =>
      companiesDto.push(new CompanyDto(company.name, company.status))
    );
    return companiesDto;
  }

  async create(companyCreateDto: CompanyCreateDto): Promise<CompanyDto> {
    let { name, status } = companyCreateDto;
    let companyTemp = new Company();
    companyTemp.name = name;
    companyTemp.status = status;
    let company = await this.companyRepository.save(companyTemp);

    return new CompanyDto(company.name, company.status);
  }

  async update(id: number, companyCreateDto: CompanyCreateDto): Promise<CompanyDto> {
    let { name, status } = companyCreateDto;
    let company = await this.companyRepository.findOneBy({ id });
    if(company === null)
      throw new NotFoundException(`Company with id ${id} not found`);
    company.name = name;
    company.status = status;
    let companyUpdated = await this.companyRepository.save(company);
    return new CompanyDto(companyUpdated.name, companyUpdated.status);
  }

  async delete(id: number): Promise<void> {
    await this.companyRepository.delete(id);
  }
}
