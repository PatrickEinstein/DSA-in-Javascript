// MAPS
const map = new Map([['a', 1],['b', 2]]);
map.set('c',3)
map.set('c',3)
map.set('c',4)
console.log(map.has('a'))
map.delete('a')
console.log(map.size)
map.clear()

for(const  [key,value] of map){
console.log(`${key} => ${value}`);
}