const MenuCombo = require("../model/menuComboModel");

exports.getCombos = catchAsync(async (req, res, next) => {
  const combos = await MenuCombo.find({});
  res.status(200).json({
    result: combos.length,
    status: "success",
    data: {
      combos,
    },
  });
});

exports.getCombo = catchAsync(async (req, res, next) => {
  const { comboSlug } = req.params;
  const combo = await MenuCombo.findOne({ slug: comboSlug }).exec();

  if (!combo) {
    res.status(404).json({
      status: "eror",
      message: `No menuItem ${comboSlug} found`,
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      combo,
    },
  });
});

exports.createCombo = catchAsync(async (req, res, next) => {
  const combo = await MenuCombo.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      combo,
    },
  });
});

exports.updateCombo = catchAsync(async (req, res, next) => {
  const { comboSlug } = req.params;
  const combo = await MenuCombo.findOneAndUpdate(
    { slug: comboSlug },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!combo) {
    res.status(404).json({
      status: "eror",
      message: `No menuItem ${comboSlug} found`,
    });
  }

  res.status(201).json({
    status: "success",
    data: {
      combo,
    },
  });
});

exports.deleteCombo = catchAsync(async (req, res, next) => {
  const { comboSlug } = req.params;
  const combo = await MenuCombo.findOneAndDelete({ slug: comboSlug });

  if (!combo) {
    res.status(404).json({
      status: "eror",
      message: `No menuItem ${comboSlug} found`,
    });
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
