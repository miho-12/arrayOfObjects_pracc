function line(start, end) {
  let left,
    right,
    up,
    down = 0;
  let arrayOfCoordinates = [];
  arrayOfCoordinates.push({ x: start.x, y: start.y });
  let tempCoordinate = { x: start.x, y: start.y };
  //If we can go diagonal(so for example 1,1 --> 3,3 where end.x-start.x == end.y-start.y)
  //look for the direction(2 options: increasing or decreasing, otherwise it stays at the starting point)
  if (end.x - start.x == end.y - start.y) {
    if (end.x - start.x > 0) {
      while (end.x != tempCoordinate.x) {
        tempCoordinate.x = tempCoordinate.x + 1;
        tempCoordinate.y = tempCoordinate.y + 1;
        let temporary = { x: tempCoordinate.x, y: tempCoordinate.y };
        arrayOfCoordinates.push(temporary);
      }
    } else {
      while (end.x != tempCoordinate.x) {
        tempCoordinate.x = tempCoordinate.x - 1;
        tempCoordinate.y = tempCoordinate.y - 1;
        let temporary = { x: tempCoordinate.x, y: tempCoordinate.y };
        arrayOfCoordinates.push(temporary);
      }
    }
  }

  //If end.x-start.x != end.y-start.y (e.g.: 5,5 --> 7,8 ; 5,5--> -7,4)
  while (tempCoordinate.x != end.x || tempCoordinate.y != end.y) {
    if (end.x - tempCoordinate.x > 0) {
      right = end.x - start.x;
      //console.log(right);
      while (right != 0) {
        //console.log("belso");
        tempCoordinate.x = tempCoordinate.x + 1;
        tempCoordinate.y = tempCoordinate.y;
        //console.log(tempCoordinate);
        let temporary = { x: tempCoordinate.x, y: tempCoordinate.y };
        arrayOfCoordinates.push(temporary);
        right--;
      }
      // console.log(tempCoordinate);
      //console.log(end);
      //if (tempCoordinate === end) console.log("halo");
    } else if (end.x - tempCoordinate.x < 0) {
      left = end.x - start.x;
      while (left != 0) {
        tempCoordinate.x = tempCoordinate.x - 1;
        tempCoordinate.y = tempCoordinate.y;
        let temporary = { x: tempCoordinate.x, y: tempCoordinate.y };
        arrayOfCoordinates.push(temporary);

        left++;
      }
    } else if (end.y - tempCoordinate.y > 0) {
      up = end.y - start.y;
      while (up != 0) {
        tempCoordinate.x = tempCoordinate.x;
        tempCoordinate.y = tempCoordinate.y + 1;
        let temporary = {
          x: tempCoordinate.x,
          y: tempCoordinate.y,
        };
        arrayOfCoordinates.push(temporary);
        up--;
      }
    } else if (end.y - tempCoordinate.y < 0) {
      down = end.y - start.y;
      while (down != 0) {
        tempCoordinate.x = tempCoordinate.x;
        tempCoordinate.y = tempCoordinate.y - 1;
        let temporary = {
          x: tempCoordinate.x,
          y: tempCoordinate.y,
        };
        arrayOfCoordinates.push(temporary);
        down++;
      }
    }
  }

  return arrayOfCoordinates;
}

let start = { x: 6, y: 5 };
let end = { x: 7, y: 8 };
//
console.log(line(start, end));
