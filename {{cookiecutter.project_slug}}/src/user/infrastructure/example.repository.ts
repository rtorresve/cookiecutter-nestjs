// Example repository for user infrastructure layer
import { UserExampleEntity } from '../domain/example.entity';

export class UserExampleRepository {
  private data: UserExampleEntity[] = [];

  add(entity: UserExampleEntity) {
    this.data.push(entity);
  }

  findAll(): UserExampleEntity[] {
    return this.data;
  }
}
