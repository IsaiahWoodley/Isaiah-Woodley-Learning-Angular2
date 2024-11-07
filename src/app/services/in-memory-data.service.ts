import { InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import {Team} from '../model/data/mock-content';
import {Observable} from 'rxjs';

export class InMemoryDataService implements InMemoryDbService {
  createDb():{TEAMS: Team[]} {

    const TEAMS: Team[] = [
      {Id: 1., City: 'Pittsburgh', Team: 'Steelers', HeadCoach: 'Mike Tomlin' },
      {Id: 2, City: 'Cincinnati', Team: 'Bengals', HeadCoach: 'Zac Taylor' },
      {Id: 3, City: 'Baltimore', Team: 'Ravens', HeadCoach: 'John Harbaugh' },
      {Id: 4, City: 'Cleveland', Team: 'Browns', HeadCoach: 'Kevin Stefanski' }
    ];
    return { TEAMS }
  }
}
