// const express = require("express");
// const cors = require("cors");

// const app = express();
// const PORT = process.env.PORT || 5000;

// const whitelist = [
//   "http://127.0.0.1:3000",
//   "http://localhost:3000",
//   "https://localhost:3000",
//   "http://localhost:5000",
//   "https://localhost:5000",
//   "https://runroom-ui-app.netlify.app",
// ];
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (!origin || whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   optionsSuccessStatus: 200,
// };

// // Middleware
// app.use(express.json({ extended: false }));
// app.use(express.static("./api/public"));
// app.use(cors(corsOptions));

// app.get("/", (req, res) => res.send("API running"));
// app.use("/api/ui", require("./api/routes/ui"));

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

'use strict';

const app = require('./server2');

app.listen(3000, () => console.log('Local app listening on port 3000!'));


// https://github.com/neverendingqs/netlify-express
// https://www.netlify.com/blog/2018/09/13/how-to-run-express.js-apps-with-netlify-functions/
