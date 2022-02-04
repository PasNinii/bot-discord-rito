import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import { SummonerDTO } from '../dto/summoner.dto';

@Injectable()
export class SummonerService {
  private readonly riotHeader = {
    headers: {
      'X-Riot-Token': this.config.get('RIOT_API_KEY'),
    },
  };

  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
  ) {}

  async getUserIdByUserName(username: string): Promise<SummonerDTO> {
    const response = await lastValueFrom(
      this.http.get(
        `${this.config.get(
          'RIOT_API_URI',
        )}/lol/summoner/v4/summoners/by-name/${username}`,
        this.riotHeader,
      ),
    );

    return response.data;
  }
}
