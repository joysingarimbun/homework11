const app = require("../index");
const request = require("supertest");

describe("Todo Unit Test", () => {
  test("Add Todo Successfully", (done) => {
    const Todo = {
      title: "Todo",
    };

    request(app)
      .post("/todo/create")
      .send(Todo)
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.body.message).toBe("Todo created!");
        done();
      })
      .catch(done);
  });

  test("Get all list", (done) => {
    request(app)
      .get("/todo/all")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data.length).toBe(3);
        done();
      })
      .catch(done);
  });

  test("Get Detail Todo", (done) => {
    request(app)
      .get(`/todo/1`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data.title).toBe("Todo 1");
        done();
      })
      .catch(done);
  });

  test("Delete Todo", (done) => {
    const id = 100;

    request(app)
      .delete(`/todo/${id}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe("Todo deleted!");
        done();
      })
      .catch(done);
  });
});
