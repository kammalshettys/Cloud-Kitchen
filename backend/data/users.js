import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@socialkitchen.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Shikha Singh",
    email: "shikha@socialkitchen.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Sumanth Sai",
    email: "sumanth@socialkitchen.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Janani",
    email: "janani@socialkitchen.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Deepa",
    email: "deepa@socialkitchen.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Ravindra",
    email: "ravindra@socialkitchen.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "kaushik",
    email: "kaushik@socialkitchen.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
