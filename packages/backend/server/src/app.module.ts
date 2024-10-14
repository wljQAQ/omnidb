import { join } from 'path';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { PrismaModule } from 'nestjs-prisma';

import { BiAppModule } from './modules/bi-app/bi-app.module';

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
    BiAppModule
  ]
})
export class AppModule {}
