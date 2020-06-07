
import {filterUsers} from '.';

describe('filterUsers', () => {
  it('should filter users based on the searched term', () => {
    let users = [{id:1, name: "Leanne"},{id:2, name: "mark"}], searchedTerm = 'lean'
    expect(JSON.stringify(filterUsers(users, searchedTerm))).toBe(JSON.stringify([ { id: 1, name: 'Leanne' } ]))
  });
});

