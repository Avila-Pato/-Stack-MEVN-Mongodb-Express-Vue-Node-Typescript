const app = require("./app").default;
import { connectionMoongose } from "./database";

// conectando base de datos
connectionMoongose();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
