const sequelize = require('../config/connection');
const seedMilestones = require('./milestonesData');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });

    await seedMilestones();

    process.exit();
  } catch (err) {
    if (err) {
      throw err;
    }
  }
};

seedAll();
