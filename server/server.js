const Hapi = require("@hapi/hapi");
const mysql = require("mysql2/promise");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
    routes: {
      cors: true,
    },
  });

  // Koneksi ke database
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "referensi_db",
  });

  // Rute untuk mengambil data landing pages
  server.route({
    method: "GET",
    path: "/landing-pages",
    handler: async (request, h) => {
      const [rows] = await db.execute("SELECT * FROM landing_pages");
      return rows;
    },
  });

  // Rute untuk mengambil data video ads
  server.route({
    method: "GET",
    path: "/video-ads",
    handler: async (request, h) => {
      const [rows] = await db.execute("SELECT * FROM video_ads");
      return rows;
    },
  });

  await server.start();
  console.log("Server berjalan pada %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
