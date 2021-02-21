var leephoter = {
  name: 'Hangyeol Lee',
  food: function feed() {
    console.log('Pork cutlet !!');
  },
};
console.log(leephoter);
console.log(leephoter.name);
console.log(leephoter['name']);
console.log(leephoter.food);

var document = {
  이름: '이한결',
  키: 170,
  몸무게: 70,
  음식: function 먹다() {
    console.log('냠냠');
  },
};
console.log(document.이름);
console.log(document['키']);
console.log(document.음식);
