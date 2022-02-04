import { Module } from '@nestjs/common';
import { DiscordModule } from 'discord-nestjs';
import { DiscordConfigService } from '../config/discord-config.service';
import { QuoteService } from './quote.service';
import { QuoteGateway } from './quote.gateway';

@Module({
  imports: [
    /**
     * Nestjs modules
     */

    /**
     * 3rd party modules
     */
    DiscordModule.forRootAsync({
      useClass: DiscordConfigService,
    }),
  ],
  providers: [QuoteGateway, QuoteService],
})
export class QuoteModule {}
