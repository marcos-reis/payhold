const { test, trait, ...suite } = use("Test/Suite")("Partners");
const Factory = use("Factory");
const Helpers = use("Helpers");

trait("Test/ApiClient");
trait("DatabaseTransactions");

test("It should register a new partner", async ({ assert, client }) => {
  const partner = await Factory.model("App/Models/Partner").make();

  const response = await client
    .post("/partner")
    .field('name', partner.name)
      .field('category', partner.category)
      .field('percentage', partner.percentage)
    .attach('thumbnail', Helpers.tmpPath('../uploads/Payhold.png'))
    .end();
  response.assertStatus(200);
  assert.exists(response.body.partner);
})

test("It should list all partners", async ({ assert, client }) => {
  await Factory.model("App/Models/Partner").createMany(2);

  const response = await client.get("/partner").end();
  response.assertStatus(200);
  assert.exists(response.body.partners);
});

test("It should list a only partner, specified by ID", async ({
  assert,
  client
}) => {
  const partner = await Factory.model("App/Models/Partner").create();

  const response = await client.get(`/partner/${partner.id}`).end();

  response.assertStatus(200);
  assert.exists(response.body.partner);
});
