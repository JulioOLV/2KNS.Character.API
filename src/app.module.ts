import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterModule } from './character/character.module';

@Module({
  imports: [CharacterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
