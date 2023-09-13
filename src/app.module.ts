import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [PrismaModule, ArticlesModule, CacheModule.register()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
