"use strict";

const feedbacks = [
  { id: 1, candidate: "1", interview_type: "technical", date: new Date() },
  { id: 2, candidate: "2", interview_type: "initial", date: new Date() },
  { id: 3, candidate: "2", interview_type: "technical", date: new Date() },
  { id: 4, candidate: "1", interview_type: "behavioral", date: new Date() },
  { id: 5, candidate: "3", date: new Date() },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed data.
     */
    await queryInterface.bulkInsert("Feedbacks", feedbacks, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Remove data.
     */
    await queryInterface.bulkDelete("Feedbacks", null, {});
  },
};
