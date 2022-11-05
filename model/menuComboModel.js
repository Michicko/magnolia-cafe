const mongoose = require("mongoose");
const { Schema } = mongoose;
const slugify = require("slugify");

const menuComboSchema = new Schema({
  category: {
    type: String,
    required: [true, "A combo must have a category"],
  },
  name: {
    type: String,
    unique: true,
    required: [true, "A combo must have a name"],
  },
  image: {
    type: Schema.Types.Mixed,
    required: [true, "A combo must have an image"],
  },
  description: {
    type: String,
    trim: true,
    required: [true, "A combo must have a description"],
  },
  price: {
    type: Number,
    required: [true, "A  combo must have price"],
  },
  comboItems: {
    type: [Schema.Types.ObjectId],
    required: [true, "A  combo must have items"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  slug: {
    type: String,
    required: [true, "A combo must have a slug"],
  },
});

menuComboSchema.pre("save", function (next) {
  this.slug = slugify(this.name);
  next();
});

const menuCombo = mongoose.model("MenuCombo", menuComboSchema);
module.exports = menuCombo;
