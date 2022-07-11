export class RepositoryDto {
  constructor(
    id: number,
    name: string,
    tribe: string,
    organization: string,
    coverage: string,
    codeSmells: number,
    bugs: number,
    vulnerabilities: number,
    hotspots: number,
    state: string
  ) {
    this.id = id;
    this.name = name;
    this.tribe = tribe;
    this.organization = organization;
    this.coverage = coverage;
    this.codeSmells = codeSmells;
    this.bugs = bugs;
    this.vulnerabilities = vulnerabilities;
    this.hotspots = hotspots;
    this.state = state;
  }

  id: number;
  name: string;
  tribe: string;
  organization: string;
  coverage: string;
  codeSmells: number;
  bugs: number;
  vulnerabilities: number;
  hotspots: number;
  verificationState: string;
  state: string;
}