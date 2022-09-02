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
  Mutation: {
    addProduct: async (parent, args) => {
      const newProduct = new product({
        title: args.title,
        desc: args.desc,
        status: args.status,
        languages: args.languages,
      });
      await newProduct.save();
      return newProduct;
    },
    deleteProduct: async (parent, args) => {
      const deletedProduct = await product.findByIdAndDelete(args.id);
      return deletedProduct;
    },
    updateProduct: async (parent, args) => {
      const { id, title, desc, status, languages } = args;
      const updates = { title, desc, status, languages };
      const updatedProduct = await product.findByIdAndUpdate(id, updates, {
        new: true,
      });
      return updatedProduct;
    },
  },
};
module.exports = resolvers;
