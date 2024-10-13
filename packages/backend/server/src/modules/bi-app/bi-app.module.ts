import { Module } from '@nestjs/common';
import { BiAppService } from './bi-app.service';
import { BiAppResolver } from './bi-app.resolver';

@Module({
  providers: [BiAppResolver, BiAppService],
})
export class BiAppModule {}
