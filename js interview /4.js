// ? Memorization
const memo = () => {
  let cache = {};
  return (value) => {
    if (value in cache) {
      console.log("value returned from cache");
      return cache[value];
    } else {
      console.log("value is calculated");
      let res = value + value;
      cache[value] = res;
      return cache[value];
    }
  };
};

const add = memo();
console.log(add(10));
console.log(add(1000));
console.log(add(1000));
