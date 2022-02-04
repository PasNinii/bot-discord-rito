import { Injectable, Logger } from '@nestjs/common';
import { Once, DiscordClientProvider } from 'discord-nestjs';
import { SummonerService } from '../common/services/summoner.service';
import { LeagueService } from './league.service';

@Injectable()
export class LeagueGateway {
  private readonly logger = new Logger(LeagueGateway.name);

  constructor(
    private readonly discordProvider: DiscordClientProvider,
    private readonly league: LeagueService,
    private readonly summoners: SummonerService,
  ) {}

  @Once({ event: 'ready' })
  onReady(): void {
    this.logger.log(
      `Logged in as ${this.discordProvider.getClient().user.tag}!`,
    );
  }
}
