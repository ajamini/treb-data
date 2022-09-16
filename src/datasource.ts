import { connectionSource } from '../ormconfig';

export const appConnection = connectionSource;

appConnection
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  });