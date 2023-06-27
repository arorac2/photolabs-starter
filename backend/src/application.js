const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

const db = require("./db")

const photos = require("./routes/photos");
const topics = require("./routes/topics");

function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: "utf-8"
      },
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  });
}

module.exports = function application(
  ENV,
) {
  app.use(cors());
  app.use(helmet());
  app.use(bodyparser.json());
  app.use(express.static(path.join(__dirname, 'public')));

  let photosData = [];
  let topicsData = [];

  
  app.use("/api", photos(db));
  app.use("/api", topics(db));

   // Fetch photos data
   app.get("/api/photos", (request, response) => {
    return response.json();
    
    
  });

  // Fetch topics data
  app.get("/api/topics", (request, response) => {
   return response.json();
    
  });


  app.get("/api/topics/photos/:topic_id", (req, res) => {
    const { topic_id } = req.params;
    // Fetch photos for the specific topic_id
    db.query("SELECT * FROM photos WHERE topic_id = $1", [topic_id])
      .then(result => {
        res.json(result.rows);
      })
      .catch(error => {
        console.log(`Error fetching photos for topic ${topic_id}: ${error}`);
        res.status(500).json({ error: "An error occurred while fetching photos." });
      });
  });

  if (ENV === "development" || ENV === "test") {
    Promise.all([
      read(path.resolve(__dirname, `db/schema/create.sql`)),
      read(path.resolve(__dirname, `db/schema/${ENV}.sql`))
    ])
      .then(([create, seed]) => {
        app.get("/api/debug/reset", (request, response) => {
          db.query(create)
            .then(() => db.query(seed))
            .then(() => {
              console.log("Database Reset");
              response.status(200).send("Database Reset");
            });
        });
      })
      .catch(error => {
        console.log(`Error setting up the reset route: ${error}`);
      });
  }

  app.close = function() {
    return db.end();
  };

  // Set the photos data
  db.query("SELECT * FROM photos")  
    .then(result => {
      photosData = result.rows;
    })
    .catch(error => {
      console.log(`Error fetching photos data: ${error}`);
    });

  // Set the topics data
  db.query("SELECT * FROM topics")
    .then(result => {
      topicsData = result.rows;
    })
    .catch(error => {
      console.log(`Error fetching topics data: ${error}`);
    });

  return app;
};

