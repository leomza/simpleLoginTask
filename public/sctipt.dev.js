"use strict";

var user = [{
  nombre: 'Leonardo',
  apellido: 'Szejpiacki'
}];

function register(ev) {
  var _ev$target$elements, username, password, data;

  return regeneratorRuntime.async(function register$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ev.preventDefault();
          _ev$target$elements = ev.target.elements, username = _ev$target$elements.username, password = _ev$target$elements.password;
          username = username.value;
          password = password.value;
          _context.next = 6;
          return regeneratorRuntime.awrap(axios.post('/user/register', {
            username: username,
            password: password
          }));

        case 6:
          data = _context.sent;
          console.log('registro', data);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

function login(ev) {
  var _ev$target$elements2, username, password, data;

  return regeneratorRuntime.async(function login$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          ev.preventDefault();
          _ev$target$elements2 = ev.target.elements, username = _ev$target$elements2.username, password = _ev$target$elements2.password;
          username = username.value;
          password = password.value;
          _context2.next = 6;
          return regeneratorRuntime.awrap(axios.post('/user/login', {
            username: username,
            password: password
          }));

        case 6:
          data = _context2.sent;
          console.log('login', data);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function adminPanel() {
  var data;
  return regeneratorRuntime.async(function adminPanel$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(axios.get('/user/adminPanel'));

        case 2:
          data = _context3.sent;
          console.log(data.data.message);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}