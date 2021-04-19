module.exports = (temp, product) => {
  let output = temp.replace(/{PRODUCTNAME}/g, product.productName);
  output = output.replace(/{IMAGE}/g, product.image);
  output = output.replace(/{COLOR}/g, product.colors);
  output = output.replace(/{STAR}/g, product.stars);
  output = output.replace(/{PRICE}/g, product.price);
  output = output.replace(/{DESCRIPTION}/g, product.description);
  output = output.replace(/{ID}/g, product.id);

  return output;
};
