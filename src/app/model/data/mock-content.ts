export interface Team {
  Id: number;
  City: string;
  Team: string;
  HeadCoach: string;
}

export let TEAMS: Team[] = [
  {Id: 1., City: 'Pittsburgh', Team: 'Steelers', HeadCoach: 'Mike Tomlin' },
  {Id: 2, City: 'Cincinnati', Team: 'Bengals', HeadCoach: 'Zac Taylor' },
  {Id: 3, City: 'Baltimore', Team: 'Ravens', HeadCoach: 'John Harbaugh' },
  {Id: 4, City: 'Cleveland', Team: 'Browns', HeadCoach: 'Kevin Stefanski' }
];
