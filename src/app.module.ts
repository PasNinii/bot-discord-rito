import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LeagueModule } from './league/league.module';
import { QuoteModule } from './quote/quote.module';
import { TFTModule } from './tft/tft.module';

@Module({
  imports: [
    /**
     * Internals Modules
     */
    LeagueModule,
    TFTModule,
    QuoteModule,

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
