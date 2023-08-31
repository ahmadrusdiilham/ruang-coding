/**
 * npx sequelize-cli model:generate --name User --attributes email:string,password:string,role:string
 *
 * npx sequelize-cli seed:generate --name data-user
 *
 * npx sequelize-cli model:generate --name StudentProfil --attributes name:string,dateOfBirth:date,city:string,school:string,photoUrl:string
 *
 * npx sequelize-cli migration:generate --name add-UserId-to-StudentProfiles-FK
 * npx sequelize-cli seed:generate --name data-StudentProfil
 *
 * npx sequelize-cli model:generate --name Category --attributes name:string
 * 
 * npx sequelize-cli seed:generate --name data-category
 * npx sequelize-cli model:generate --name Course --attributes name:string,description:text,duration:integer,price:integer
 * 
 * npx sequelize-cli migration:generate --name add-categoryId-to-courses-FK
 * npx sequelize-cli seed:generate --name data-cours
 * 
 * npx sequelize-cli model:generate --name StudentCourse --attributes status:string
 * 
 * npx sequelize-cli migration:generate --name add-UserId-to-studentcourses-FK
 * npx sequelize-cli migration:generate --name add-CourseId-to-studentcourses-FK
 
 */

const express = require("express");
const app = express();
const port = 3000;
const session = require("express-session");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "rahasia bwang",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      sameSite: true,
    },
  })
);

app.use(require("./router/index"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
