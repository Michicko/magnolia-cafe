const MenuItem = require("../model/menuItemModel");
const catchAsync = require("../utils/catchAsync");

exports.getMenuItems = catchAsync(async (req, res, next) => {
  const menuItems = await MenuItem.find({});
  res.status(200).json({
    result: menuItems.length,
    status: "success",
    data: {
      menuItems,
    },
  });
});

exports.getMenuItem = catchAsync(async (req, res, next) => {
  const { menuItemSlug } = req.params;
  const menuItem = await MenuItem.findOne({ slug: menuItemSlug }).exec();

  if (!menuItem) {
    res.status(404).json({
      status: "eror",
      message: `No menuItem ${menuItemSlug} found`,
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      menuItem,
    },
  });
});

exports.createMenuItem = catchAsync(async (req, res, next) => {
  const menuItem = await MenuItem.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      menuItem,
    },
  });
});

exports.updateMenuItem = catchAsync(async (req, res, next) => {
  const { menuItemSlug } = req.params;
  const menuItem = await MenuItem.findOneAndUpdate(
    { slug: menuItemSlug },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!menuItem) {
    res.status(404).json({
      status: "eror",
      message: `No menuItem ${menuItemSlug} found`,
    });
  }

  res.status(201).json({
    status: "success",
    data: {
      menuItem,
    },
  });
});

exports.deleteMenuItem = catchAsync(async (req, res, next) => {
  const { menuItemSlug } = req.params;
  const menuItem = await MenuItem.findOneAndDelete({ slug: menuItemSlug });

  if (!menuItem) {
    res.status(404).json({
      status: "eror",
      message: `No menuItem ${menuItemSlug} found`,
    });
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
