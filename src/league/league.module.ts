import { Module } from '@nestjs/common';
import { DiscordModule } from 'discord-nestjs';
import { DiscordConfigService } from '../config/discord-config.service';
import { HttpModule } from '@nestjs/axios';
import { SummonerService } from '../common/services/summoner.service';
import { LeagueService } from './league.service';
import { LeagueGateway } from './league.gateway';

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
  providers: [LeagueGateway, LeagueService, SummonerService],
})
export class LeagueModule {}
