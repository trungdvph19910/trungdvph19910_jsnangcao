const ordersSet = new Set(['pasta','pizza','risotto']);
console.log(ordersSet);


console.log(new Set(['Jonas']));
console.log(ordersSet.size);
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('risotto');
// ordersSet.clear();
console.log(ordersSet);


for (const order of ordersSet) console.log(order);

//exemple
const staff= ['wauter','chef','waiter','manager','chef','waiter'];
const staffUnique= [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['wauter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size);
console.log(new Set('jonasschmedtman').size)

