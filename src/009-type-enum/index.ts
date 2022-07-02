enum Colors {
  RED, // 0
  BLUE, // 1
  YELLOW, // 2
  GREEN = 200,
  PURPLE = 'PURPLE',
  // since here, the next enum member must have a initializer
  BROWN = 666,
  BLACK, // 667
}

console.log(Colors.RED);
console.log(Colors[0]);

// Merging
enum Cars {
  BMW = 1,
  BUGATTI,
  FERRARI,
}

enum Cars {
  GOL,
  NISSAN,
  ONIX,
}

console.log(Cars);
