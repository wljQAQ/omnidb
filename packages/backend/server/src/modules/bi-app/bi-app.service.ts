import { Injectable } from '@nestjs/common';

import { BiApp } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class BiAppService {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    return this.prisma.biApp.findMany();
  }

  async findBiAppWithTables(biAppId: string) {
    const biApp = await this.prisma.biApp.findUnique({
      where: { id: biAppId },
      include: {
        tables: true
      }
    });
    return biApp;
  }
}
