import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import { LeagueEntryDto } from './dto/league-entry.dto';

@Injectable()
export class TFTService {
  private readonly riotHeader = {
    headers: {
      'X-Riot-Token': this.config.get('RIOT_API_KEY'),
    },
  };

  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
  ) {}

  async getUserRankByUserId(userId: string): Promise<LeagueEntryDto[]> {
    const response = await lastValueFrom(
      this.http.get(
        `${this.config.get(
          'RIOT_API_URI',
        )}/tft/league/v1/entries/by-summoner/${userId}`,
        this.riotHeader,
      ),
    );

    return response.data;
  }
}
