let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
      break;
  }

  if (count <= 0) {
    return `${count} Hold`;
  }
  else {
    return `${count} Bet`;
  }

}

cc(2); cc(3); cc(7); cc('K'); cc('A');
// 0 Hold