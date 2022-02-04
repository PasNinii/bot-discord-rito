import { Injectable, Logger } from '@nestjs/common';
import { Once, DiscordClientProvider, OnCommand } from 'discord-nestjs';
import { Message } from 'discord.js';
import { QuoteService } from './quote.service';

@Injectable()
export class QuoteGateway {
  private readonly logger = new Logger(QuoteGateway.name);

  constructor(
    private readonly discordProvider: DiscordClientProvider,
    private readonly quote: QuoteService,
  ) {}

  @Once({ event: 'ready' })
  onReady(): void {
    this.logger.log(
      `Logged in as ${this.discordProvider.getClient().user.tag}!`,
    );
  }

  @OnCommand({ name: 'laGazelle' })
  async laGazelle(message: Message): Promise<void> {
    await message.reply(this.quote.getAmonbofisMotivationalSpeech());
  }
}
