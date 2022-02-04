import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LeagueService {
  private readonly riotHeader = {
    headers: {
      'X-Riot-Token': this.config.get('RIOT_API_KEY'),
    },
  };

  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
  ) {}
}
