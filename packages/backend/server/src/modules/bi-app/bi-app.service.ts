import { Injectable } from '@nestjs/common';

import { BiApp, Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class BiAppService {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    return this.prisma.biApp.findMany();
  }
  /**
   * 创建一个新的 BI 应用
   * @param data BI 应用的创建数据
   * @returns 创建的 BiApp 实例
   */
  createBiApp(app: Prisma.BiAppCreateInput) {
    return this.prisma.biApp.create({
      data: app
    });
  }

  /**
   * 根据 ID 查找 BI 应用及其关联的表
   * @param biAppId BI 应用的 ID
   * @returns 包含表的 BiApp 实例
   */
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
