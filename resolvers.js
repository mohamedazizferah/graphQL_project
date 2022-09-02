const product = require("./models");
const resolvers = {
  Query: {
    getProducts: async () => {
      const products = await product.find({});
      return products;
    },
    getProduct: async (parent, args) => {
      const oneProduct = await product.findById(args.id);
      return oneProduct;
    },
  },
};
module.exports = resolvers;
