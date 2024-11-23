export function towerOfHanoi(n, from, to, using) {
  if (n === 1) {
    console.log(`move disk 1 from ${from} to ${to}`);
    return;
  }

  towerOfHanoi(n - 1, from, using, to);

  console.log(`move disk ${n} from ${from} to ${to}`);
  towerOfHanoi(n - 1, using, to, from);
}