export class RepositoryDto {

  constructor(id: number, state: number) {
    this.id = id;
    this.state = state;
  }

  id: number;
  state: number;
}