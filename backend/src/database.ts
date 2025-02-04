import { connect } from "mongoose";

export const connectionMoongose = async (): Promise<void> => {
  try {
    // Usamos la URL de conexión local para MongoDB
    const db = await connect("mongodb://127.0.0.1/mevn-database");
    // Aquí 'mevn' es el nombre de la base de datos

    console.log("Conectado a la base de datos:", db.connection.name);
  } catch (error) {
    console.error("Error de base de datos mongoose:", error);
  }
};
