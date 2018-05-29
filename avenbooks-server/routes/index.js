import sell from './sell';
import buy from './buy';
import user from './user';
import course from './course';

const addRoutes = function addRoutesToApp(app) {
  app.use('/api', sell, buy, user, course);
};

export default addRoutes;
