"use strict";

module.exports = (sequelize, DataTypes) => {
  const todo = sequelize.define(
    "Todo",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      freezeTableName: true,
      tableName: "todo",
    }
  );
  return todo;
};
