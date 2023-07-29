const express = require('express');
const Account = require('../models/schema');

const loginGET = (req, res) => {
  res.render('login');
};
const registerGET = (req, res) => {
  res.render('register');
};
const home = (req, res) => {
  res.render('home');
};

const registerPOST = async (req, res) => {
  try {
    const existingUser = await Account.findOne({ username: req.body.username });

    if (existingUser) {
      res.render('userExists');
      return;
    }
    const newAccount = await Account.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.render('registered', {
      accNAME: newAccount.username,
      registerDATE: newAccount.registered_on,
    });
  } catch (error) {
    console.log(error);
  }
};

const loginPOST = async (req, res) => {
  const { username, password } = req.body;

  try {
    const Found = await Account.findOne({ username: username });

    if (!Found) {
      res.render('noUser');
      return;
    } else if (Found.password === password) {
      Found.last_login = new Date();
      await Found.save(); // saves  the new lastlogin

      res.render('loggedIn', {
        accNAME: Found.username,
        registerDATE: Found.registered_on,
        lastLogin: Found.last_login,
      });
    } else {
      res.render('noUser');
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  home,
  loginGET,
  registerGET,
  registerPOST,
  loginPOST,
};
