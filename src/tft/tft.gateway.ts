import { Injectable, Logger } from '@nestjs/common';
import {
  Once,
  DiscordClientProvider,
  OnCommand,
  Content,
  Context,
} from 'discord-nestjs';
import { Message } from 'discord.js';
import { SummonerService } from 'src/common/services/summoner.service';
import { TFTService } from './tft.service';

@Injectable()
export class TFTGateway {
  private readonly logger = new Logger(TFTGateway.name);

  constructor(
    private readonly discordProvider: DiscordClientProvider,
    private readonly tft: TFTService,
    private readonly summoners: SummonerService,
  ) {}

  @Once({ event: 'ready' })
  onReady(): void {
    this.logger.log(
      `Logged in as ${this.discordProvider.getClient().user.tag}!`,
    );
  }

  @OnCommand({ name: 'tft' })
  async getRankByUserName(
    @Content() content: string,
    @Context() [context]: [Message],
  ): Promise<void> {
    try {
      content = encodeURI(content);

      const summoner = await this.summoners.getUserIdByUserName(content);
      const userRank = (
        await this.tft.getUserRankByUserId(summoner.id)
      ).find((summonnerDetail) => summonnerDetail.queueType === 'RANKED_TFT');

      if (userRank) {
        await context.reply(
          `Ce gros noob est actuellement classé ${userRank.tier} ${userRank.rank} avec ${userRank.leaguePoints}lp`,
        );
      } else {
        await context.reply(`Ce gros noob n'a pas le level`);
      }
    } catch(e) {
      console.log(e);

      await context.reply(
        `Wesh retourne à l'école apprendre ton brechaile si tu sais pas écrire`,
      );
    }
  }
}
