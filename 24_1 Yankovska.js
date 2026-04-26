use qauto

//1. Знайти користувачів, у яких country = Ukraine:

db.UserProfile.find({ country: "Ukraine" })

//2. Знайти користувачів, у яких country не має значення:

db.UserProfile.find({
  $or: [
    { country: { $exists: false } },
    { country: null },
    { country: "" }
  ]
})

//3. Знайти користувачів, у яких name не починається з літери a, використати $where:

db.UserProfile.find({
  $where: function () {
    return !this.name.toLowerCase().startsWith("a");
  }
})

//4. Додати колекцію car:

db.createCollection("car")

//5. Додати 10 автівок:

db.car.insertMany([
  {
    carBrandId: ObjectId("665000000000000000000201"),
    carModelId: ObjectId("665000000000000000000301"),
    userId: ObjectId("665000000000000000000001"),
    mileage: 120,
    initialMileage: 50,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    carBrandId: ObjectId("665000000000000000000202"),
    carModelId: ObjectId("665000000000000000000302"),
    userId: ObjectId("665000000000000000000002"),
    mileage: 90,
    initialMileage: 20,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    carBrandId: ObjectId("665000000000000000000201"),
    carModelId: ObjectId("665000000000000000000301"),
    userId: ObjectId("665000000000000000000003"),
    mileage: 200,
    initialMileage: 100,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    carBrandId: ObjectId("665000000000000000000203"),
    carModelId: ObjectId("665000000000000000000303"),
    userId: ObjectId("665000000000000000000004"),
    mileage: 150,
    initialMileage: 70,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    carBrandId: ObjectId("665000000000000000000202"),
    carModelId: ObjectId("665000000000000000000302"),
    userId: ObjectId("665000000000000000000005"),
    mileage: 300,
    initialMileage: 150,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    carBrandId: ObjectId("665000000000000000000204"),
    carModelId: ObjectId("665000000000000000000304"),
    userId: ObjectId("665000000000000000000001"),
    mileage: 80,
    initialMileage: 30,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    carBrandId: ObjectId("665000000000000000000205"),
    carModelId: ObjectId("665000000000000000000305"),
    userId: ObjectId("665000000000000000000002"),
    mileage: 110,
    initialMileage: 60,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    carBrandId: ObjectId("665000000000000000000201"),
    carModelId: ObjectId("665000000000000000000301"),
    userId: ObjectId("665000000000000000000004"),
    mileage: 500,
    initialMileage: 200,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    carBrandId: ObjectId("665000000000000000000202"),
    carModelId: ObjectId("665000000000000000000302"),
    userId: ObjectId("665000000000000000000003"),
    mileage: 130,
    initialMileage: 40,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    carBrandId: ObjectId("665000000000000000000203"),
    carModelId: ObjectId("665000000000000000000303"),
    userId: ObjectId("665000000000000000000005"),
    mileage: 70,
    initialMileage: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  }
])

db.car.insertMany([
  {
    carBrandId: ObjectId("665000000000000000000201"),
    carModelId: ObjectId("665000000000000000000301"),
    userId: ObjectId("665000000000000000000001"),
    mileage: 120,
    initialMileage: 50,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    carBrandId: ObjectId("665000000000000000000202"),
    carModelId: ObjectId("665000000000000000000302"),
    userId: ObjectId("665000000000000000000002"),
    mileage: 90,
    initialMileage: 20,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    carBrandId: ObjectId("665000000000000000000201"),
    carModelId: ObjectId("665000000000000000000301"),
    userId: ObjectId("665000000000000000000003"),
    mileage: 200,
    initialMileage: 100,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    carBrandId: ObjectId("665000000000000000000203"),
    carModelId: ObjectId("665000000000000000000303"),
    userId: ObjectId("665000000000000000000004"),
    mileage: 150,
    initialMileage: 70,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    carBrandId: ObjectId("665000000000000000000202"),
    carModelId: ObjectId("665000000000000000000302"),
    userId: ObjectId("665000000000000000000005"),
    mileage: 300,
    initialMileage: 150,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    carBrandId: ObjectId("665000000000000000000204"),
    carModelId: ObjectId("665000000000000000000304"),
    userId: ObjectId("665000000000000000000001"),
    mileage: 80,
    initialMileage: 30,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    carBrandId: ObjectId("665000000000000000000205"),
    carModelId: ObjectId("665000000000000000000305"),
    userId: ObjectId("665000000000000000000002"),
    mileage: 110,
    initialMileage: 60,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    carBrandId: ObjectId("665000000000000000000201"),
    carModelId: ObjectId("665000000000000000000301"),
    userId: ObjectId("665000000000000000000004"),
    mileage: 500,
    initialMileage: 200,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    carBrandId: ObjectId("665000000000000000000202"),
    carModelId: ObjectId("665000000000000000000302"),
    userId: ObjectId("665000000000000000000003"),
    mileage: 130,
    initialMileage: 40,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    carBrandId: ObjectId("665000000000000000000203"),
    carModelId: ObjectId("665000000000000000000303"),
    userId: ObjectId("665000000000000000000005"),
    mileage: 70,
    initialMileage: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  }
])

//6. $lookup: машини та власники, де mileage >= 100 і бренд Audi:

db.car.aggregate([
  {
    $lookup: {
      from: "Users",
      localField: "userId",
      foreignField: "_id",
      as: "owner"
    }
  },
  {
    $lookup: {
      from: "CarBrands",
      localField: "carBrandId",
      foreignField: "_id",
      as: "brand"
    }
  },
  {
    $lookup: {
      from: "CarsModels",
      localField: "carModelId",
      foreignField: "_id",
      as: "model"
    }
  },
  { $unwind: "$owner" },
  { $unwind: "$brand" },
  { $unwind: "$model" },
  {
    $match: {
      mileage: { $gte: 100 },
      "brand.title": "Audi"
    }
  }
])

//7. Знайти cars, у яких бренд BMW або Audi:

db.car.aggregate([
  {
    $lookup: {
      from: "CarBrands",
      localField: "carBrandId",
      foreignField: "_id",
      as: "brand"
    }
  },
  { $unwind: "$brand" },
  {
    $match: {
      "brand.title": { $in: ["BMW", "Audi"] }
    }
  }
])