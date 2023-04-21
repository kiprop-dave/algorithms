function* fibGenerator(): Generator<number, any, number> {
  let first = 0,second = 1;
  yield first;
  yield second;

  while(true){
    let nextVal = first + second;
    yield nextVal;
    first = second;
    second = nextVal;
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
