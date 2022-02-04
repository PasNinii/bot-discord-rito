import { Injectable } from '@nestjs/common';

@Injectable()
export class QuoteService {
  getAmonbofisMotivationalSpeech(): string {
    return `Une ouvriere : (Voyant Itineris chercher par terre) Qu'est ce que tu cherches ?
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
    Itineris : Il a raison !`;
  }
}
