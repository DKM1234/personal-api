exports.generateCrudMethods = (Model) => {
    return {
      getAll: () => Model.find().select('-__v').exec(),
      getById: (id) => Model.findById(id).select('-__v').exec(),
      create: (record) => Model.create(record),
      update: (id, record) => Model.findByIdAndUpdate(id, record, { new: true }).select('-__v').exec(),
      delete: (id) => Model.findByIdAndDelete(id).select('-__v').exec()
    };
  };
  