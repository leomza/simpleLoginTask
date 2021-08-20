"use strict";
exports.__esModule = true;
exports.adminPanel = exports.loginUser = exports.newUser = void 0;
function newUser(req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    res.send({ message: "A new User was added", username: username, password: password });
}
exports.newUser = newUser;
function loginUser(req, res) {
    //create a cookie Admin
    var _a = req.body, username = _a.username, password = _a.password;
    if (username && password) {
        res.cookie('role', { role: 'admin' }, { maxAge: 9939394949, httpOnly: true }).send({ message: "A User was logged", username: username, password: password });
    }
    res.send({ login: true });
}
exports.loginUser = loginUser;
exports.adminPanel = function (req, res) {
    res.send({ adminPanel: true, message: 'Salio todo perfecto' });
};
