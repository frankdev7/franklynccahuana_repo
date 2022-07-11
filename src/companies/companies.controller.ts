import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompanyCreateDto } from './dto/company.create.dto';
import { CompanyDto } from './dto/company.dto';

@Controller('companies')
export class CompaniesController {
  constructor(
    private readonly companiesService: CompaniesService,
  ) { }

  @Get('')
  async getAll(): Promise<CompanyDto[]> {
    return this.companiesService.getAll();
  }

  @Post('')
  async create(@Body() companyCreateDto: CompanyCreateDto): Promise<CompanyDto> {
    return this.companiesService.create(companyCreateDto);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() companyCreateDto: CompanyCreateDto): Promise<CompanyDto> {
    return this.companiesService.update(id, companyCreateDto);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.companiesService.delete(id);
  }
}
