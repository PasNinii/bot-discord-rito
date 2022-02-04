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
    } catch {
      await context.reply(
        `Wesh retourne à l'école apprendre ton brechaile si tu sais pas écrire`,
      );
    }
  }

  @OnCommand({ name: 'laGazelle' })
  async laGazelle(message: Message): Promise<void> {
    await message.reply(
      `Une ouvriere : (Voyant Itineris chercher par terre) Qu'est ce que tu cherches ?
      Itineris : J'ai perdu ma lentille.
      Amonbofils : Ouvrières, ouvriers, camarades, sommes nous revenus au temps des pharaons, à trimer sous les coups de fouets ? Et pour qui ? Pour César !
      Les ouvriers : Oh ! Ah !
      Amonbofils : Hum ! Qu'il aille se le faire construire à ROME son palais ! Chacun chez soi et les hippopotames seront bien gardés !
      Itineris et les autres ouvriers : (levant le poing) Ouais c'est vrai ça !
      Amonbofils : Ipagou oupou, Irrroutchèèn ioutchènémi aoutchép! [r roulé]
      Itineris et les autres ouvriers : … Ouaaaaaaaaaaaaaaaaaiiiiis (pas sûrs d'avoir compris le sens de la phrase d'Amonbofils)
      Amonbofils : Camarades on vous exploite, on vous crève à la tâche ! Et… Franchement…
      Itineris : (attendant la suite avec beaucoup d'attention) …
      Amonbofils : Voilà !
      Itineris : Il a raison !`,
    );
  }
}
