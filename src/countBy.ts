export interface countList {
  [key: string]: number;
}

export default function countBy(arr: (string | number)[]) {
  return arr.reduce((acc: countList, item) => {
    if (acc[item]) acc[item]++;
    else acc[item] = 1;
    return acc;
  }, {});
}
