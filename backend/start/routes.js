"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

Route.post("/session", "SessionController.store");
Route.post("/user", "UserController.store");
Route.post("/bankaccount", "BankAccountController.store");
Route.post("/partner", "PartnerController.store");

Route.get("/partner", "PartnerController.index");
Route.get("/partner/:id", "PartnerController.show");
Route.get("/bankaccount/:id", "BankAccountController.show");
