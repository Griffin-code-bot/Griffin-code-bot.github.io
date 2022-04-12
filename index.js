const getCount = async () => {
  const result = await countapi.get(myNamespace, MY_KEY);
  console.log(result);
  displayCount(result.value);
};

const incrementCount = async () => {
  const result = await countapi.hit(myNamespace, MY_KEY);
  console.log(result);
  displayCount(result.value);
};

const displayCount = (count) => {
  let initialFormat = count.toString().padStart(6, "0");
  counterElement.forEach((span, index) => {
    span.innerHTML = initialFormat[index];
  });
};

if (!localStorage.getItem("repeatVisitor")) {
  console.log("key not created yet");
  incrementCount();
  localStorage.setItem("repeatVisitor", true);
} else {
  console.log("existing viewer, displaying w/o incrementing");
  getCount();
}
