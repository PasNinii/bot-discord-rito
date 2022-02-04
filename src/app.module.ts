import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TFTModule } from './tft/tft.module';

@Module({
  imports: [
    /**
     * Internals Modules
     */
    TFTModule,

    /**
     * Nestjs Modules
     */
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
