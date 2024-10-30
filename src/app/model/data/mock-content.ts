export interface Team {
  City: string;
  Team: string;
  HeadCoach: string;
}

export const TEAMS: Team[] = [
  { City: 'Pittsburgh', Team: 'Steelers', HeadCoach: 'Mike Tomlin' },
  { City: 'Cincinnati', Team: 'Bengals', HeadCoach: 'Zac Taylor' },
  { City: 'Baltimore', Team: 'Ravens', HeadCoach: 'John Harbaugh' },
  { City: 'Cleveland', Team: 'Browns', HeadCoach: 'Kevin Stefanski' }
];
