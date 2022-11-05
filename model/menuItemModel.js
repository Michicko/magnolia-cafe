const mongoose = require("mongoose");
const { Schema } = mongoose;
const slugify = require("slugify");

const menuItemSchema = new Schema({
  category: {
    type: String,
    required: [true, "A menu item must have a category"],
  },
  name: {
    unique: true,
    type: String,
    required: [true, "A menu item must have a name"],
  },
  description: {
    type: String,
    trim: true,
    required: [true, "A menu item must have a description"],
  },
  price: {
    type: Number,
    required: [true, "A menu item must have price"],
  },
  image: {
    type: Schema.Types.Mixed,
    required: [true, "A menu item must have an image"],
  },
  availableMilks: {
    type: [String],
  },
  availableFlavors: {
    type: [String],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  slug: {
    type: String,
    required: [true, "A menu item must have a slug"],
  },
});

menuItemSchema.pre("save", function (next) {
  this.slug = slugify(this.name);
  next();
});

menuItemSchema.pre("findOneAndUpdate", async function () {
  const docToUpdate = await this.model.findOne(this.getQuery());
  console.log(docToUpdate); // The document that `findOneAndUpdate()` will modify
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);
module.exports = MenuItem;
