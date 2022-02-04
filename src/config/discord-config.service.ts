import { Injectable } from '@nestjs/common';
import {
  DiscordModuleOption,
  DiscordOptionsFactory,
  TransformPipe,
  ValidationPipe,
} from 'discord-nestjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DiscordConfigService implements DiscordOptionsFactory {
  constructor(private readonly config: ConfigService) {}

  createDiscordOptions(): DiscordModuleOption {
    return {
      token: this.config.get('DISCORD_TOKEN'),
      commandPrefix: '!',
      allowGuilds: [this.config.get('DISCORD_GUILD')],
      usePipes: [TransformPipe, ValidationPipe],
    };
  }
}
