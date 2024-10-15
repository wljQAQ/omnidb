import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

const a = 1;
@Injectable()
export class BiTableService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * 创建一个BiTable
   * @param name 表名
   * @param biAppId 所属BI应用的ID
   */
  createBiTable(name: string, biAppId: string) {
    return this.prisma.biTable.create({
      data: {
        name,
        biApp: {
          connect: { id: biAppId }
        }
      }
    });
  }
}
