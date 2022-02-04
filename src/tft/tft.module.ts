import { Module } from '@nestjs/common';
import { DiscordModule } from 'discord-nestjs';
import { DiscordConfigService } from '../config/discord-config.service';
import { TFTGateway } from './tft.gateway';
import { HttpModule } from '@nestjs/axios';
import { TFTService } from './tft.service';
import { SummonerService } from 'src/common/services/summoner.service';

@Module({
  imports: [
    /**
     * Nestjs modules
     */
    HttpModule,

    /**
     * 3rd party modules
     */
    DiscordModule.forRootAsync({
      useClass: DiscordConfigService,
    }),
  ],
  providers: [TFTGateway, TFTService, SummonerService],
})
export class TFTModule {}
