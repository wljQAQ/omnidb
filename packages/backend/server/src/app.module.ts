// import { Module } from '@nestjs/common';

// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { PrismaService } from './prisma.service';
// import { UserService } from './user.service';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService, UserService, PrismaService]
// })
// export class AppModule {}

import { join } from 'path';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { PrismaModule } from 'nestjs-prisma';

import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    PrismaModule.forRoot({
      isGlobal: true
    }),
    UserModule
  ]
})
export class AppModule {}
