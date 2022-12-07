import { createRange, sumDigits, getScreentimeAlertList, hexToRGB, findWinner } from '../challenges/exercise007';

describe('createRange', () => {
  test('returns a range of numbers as an array', () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
  });

  test('returns a range of numbers with step 1 if it is not provided', () => {
    expect(createRange(5, 10)).toEqual([5, 6, 7, 8, 9, 10]);
  });
});

describe('sumDigits', () => {
  test('returns the sum of all its digits', () => {
    expect(sumDigits(444)).toEqual(12);
    expect(sumDigits(123)).toEqual(6);
    expect(sumDigits(1210487)).toEqual(23);
  });
});

describe('getScreentimeAlertList', () => {
  test('returns array of users, who used over 100 minutes of screentime on that date', () => {
    expect(sumDigits(444)).toEqual(12);
    const users = [
      {
        username: 'beth_1234',
        name: 'Beth Smith',
        screenTime: [
          { date: '2019-05-01', usage: { twitter: 34, instagram: 22, facebook: 40 } },
          { date: '2019-05-02', usage: { twitter: 56, instagram: 40, facebook: 31 } },
          { date: '2019-05-03', usage: { twitter: 12, instagram: 15, facebook: 19 } },
          { date: '2019-05-04', usage: { twitter: 10, instagram: 56, facebook: 61 } },
        ],
      },
      {
        username: 'sam_j_1989',
        name: 'Sam Jones',
        screenTime: [
          { date: '2019-06-11', usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
          { date: '2019-06-13', usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
          { date: '2019-06-14', usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
          { date: '2019-05-04', usage: { mapMyRun: 10, whatsApp: 56, facebook: 61, safari: 29 } },
        ],
      },
    ];
    expect(getScreentimeAlertList(users, '2019-05-02')).toEqual(['beth_1234']);
    expect(getScreentimeAlertList(users, '2019-05-04')).toEqual(['beth_1234', 'sam_j_1989']);
    expect(getScreentimeAlertList(users, '2019-06-13')).toEqual([]);
  });
});

describe('hexToRGB', () => {
  test('returns the sum of all its digits', () => {
    expect(hexToRGB('#FF1133')).toEqual('rgb(255,17,51)');
    expect(hexToRGB('#FFFFFF')).toEqual('rgb(255,255,255)');
  });
});

describe('findWinner', () => {
  test('return X if player X has won, 0 if the player 0 has won, and null if there is currently no winner', () => {
    const board = [
      ['X', null, '0'],
      ['0', '0', '0'],
      ['X', null, 'X'],
    ];
    expect(findWinner(board)).toEqual('0');
    const board2 = [
      ['0', '0', 'X'],
      ['0', 'X', '0'],
      ['X', null, '0'],
    ];
    expect(findWinner(board2)).toEqual('X');
    const board3 = [
      ['X', '0', null],
      ['X', null, '0'],
      ['X', null, '0'],
    ];
    expect(findWinner(board3)).toEqual('X');
    const board4 = [
      ['0', '0', null],
      ['X', null, '0'],
      ['X', null, '0'],
    ];
    expect(findWinner(board4)).toEqual(null);
  });
});
