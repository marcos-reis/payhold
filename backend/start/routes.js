/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use("Route");
const Helpers = use("Helpers");
//const Drive = use("Drive");


Route.get("/", () => {
  return { message: process.env.NODE_ENV };
});
Route.get("/files/:thumbnail", ({ request, response }) => {
  const thumbnail = request.params.thumbnail;
  response.download(Helpers.resourcesPath(`../uploads/${thumbnail}`));
});

Route.post("/sessions", "SessionController.store").validator("Session");
Route.post("/users", "UserController.store");




Route.group(() => {
  Route.post("/bankaccounts", "BankAccountController.store");
  Route.get("/bankaccounts/:id", "BankAccountController.show");

  Route.post("/financials", "FinancialController.store");
  Route.get("/financials/:id", "FinancialController.show");

  Route.get("/users", "UserController.index");
  Route.get("/users/:id", "UserController.show");
  Route.delete("/users/:id", "UserController.delete");


  Route.post("/cashbacks","CashbackController.store")
  Route.get("/cashbacks/:id", "CashbackController.show");


  Route.post("/transfers","TransferController.store")
  Route.get("/transfers/:id", "TransferController.show");


  Route.post("/request-transfers","RequestTransferController.store")
  Route.get("/request-transfers/:id", "RequestTransferController.show");

  Route.post("/partners", "PartnerController.store");
  Route.get("/partners", "PartnerController.index");
  Route.get("/partners/:id", "PartnerController.show");

  Route.post("/category-partners", "CategorypartnerController.store");
  Route.get("/category-partners", "categorypartnerController.index");

}).middleware("auth");



