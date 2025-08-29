// Example repository for maintenance infrastructure layer
import { MaintenanceExampleEntity } from '../domain/example.entity';

export class MaintenanceExampleRepository {
  private data: MaintenanceExampleEntity[] = [];

  add(entity: MaintenanceExampleEntity) {
    this.data.push(entity);
  }

  findAll(): MaintenanceExampleEntity[] {
    return this.data;
  }
}
