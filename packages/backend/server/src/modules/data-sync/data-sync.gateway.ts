import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { DataSyncService } from './data-sync.service';
import { CreateDataSyncDto } from './dto/create-data-sync.dto';
import { UpdateDataSyncDto } from './dto/update-data-sync.dto';

@WebSocketGateway()
export class DataSyncGateway {
  constructor(private readonly dataSyncService: DataSyncService) {}

  @SubscribeMessage('createDataSync')
  create(@MessageBody() createDataSyncDto: CreateDataSyncDto) {
    return this.dataSyncService.create(createDataSyncDto);
  }

  @SubscribeMessage('findAllDataSync')
  findAll() {
    return this.dataSyncService.findAll();
  }

  @SubscribeMessage('findOneDataSync')
  findOne(@MessageBody() id: number) {
    return this.dataSyncService.findOne(id);
  }

  @SubscribeMessage('updateDataSync')
  update(@MessageBody() updateDataSyncDto: UpdateDataSyncDto) {
    return this.dataSyncService.update(updateDataSyncDto.id, updateDataSyncDto);
  }

  @SubscribeMessage('removeDataSync')
  remove(@MessageBody() id: number) {
    return this.dataSyncService.remove(id);
  }
}
