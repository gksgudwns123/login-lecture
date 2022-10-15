"use strict";

const home = async (req, res) => {
  res.render("home/index");
};

const login = async (req, res) => {
  res.render("home/login");
};

module.exports = {
  home,
  login,
};
