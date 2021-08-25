const ids = new Set([1,2,3,'hi']);
ids.add(2); 
if(ids.has('hi')){
ids.delete('hi');
}

for(const entry of ids.values ()){
  console.log(entry);
}
console.log(ids);