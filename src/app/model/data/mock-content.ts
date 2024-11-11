export interface Team {
  Id: number;
  City: string;
  Team: string;
  HeadCoach: string;
  firstWin : string;
  winPercent : string;
}

export let TEAMS: Team[] = [
  {Id: 1., City: 'Pittsburgh', Team: 'Steelers', HeadCoach: 'Mike Tomlin', firstWin: 'Sept. 27, 1933',winPercent : '0.77' },
  {Id: 2, City: 'Cincinnati', Team: 'Bengals', HeadCoach: 'Zac Taylor', firstWin: 'Aug. 25, 1968',winPercent : '0.40'},
  {Id: 3, City: 'Baltimore', Team: 'Ravens', HeadCoach: 'John Harbaugh', firstWin: 'Sept. 1, 1996',winPercent : '0.70'},
  {Id: 4, City: 'Cleveland', Team: 'Browns', HeadCoach: 'Kevin Stefanski', firstWin: 'Sept. 6, 1946',winPercent : '0.22'}
];
