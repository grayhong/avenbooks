import board from './board';
import note from './note';
import user from './user';

const addRoutes = function addRoutesToApp(app) {
  app.use('/api', board, note, user);
};

export default addRoutes;
