import { join } from 'path';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { PrismaModule } from 'nestjs-prisma';

import { BiAppModule } from './modules/bi-app/bi-app.module';
import { BiTableModule } from './modules/bi-table/bi-table.module';
import { DataSyncModule } from './modules/data-sync/data-sync.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: {
        path: join(process.cwd(), 'src/schema.gql')
      }
    }),
    PrismaModule.forRoot({
      isGlobal: true
    }),
    BiAppModule,
    BiTableModule,
    DataSyncModule
  ]
})
export class AppModule {}
