import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../constants/Paths';
import Show from '@src/models/Show';
import Conductor from '@src/models/Conductor';

import ShowRoutes from './ShowRoutes';


// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();


// ** Add showRouter ** //

const showRouter = Router();

// Get all users
showRouter.get(
  Paths.Shows.GetConductor,
  ShowRoutes.getConductor,
);
showRouter.get(
  Paths.Shows.GetShow,
  ShowRoutes.getShow,
);
showRouter.get(
  Paths.Shows.GetAllConductores,
  ShowRoutes.getAllConductores,
);
showRouter.get(
  Paths.Shows.GetAllShows,
  ShowRoutes.getAllShows,
);

showRouter.post(
  Paths.Shows.AddShow,
  ShowRoutes.addShow,
);

showRouter.post(
  Paths.Shows.AddConductor,
  ShowRoutes.addConductor,
);

showRouter.put(
  Paths.Shows.UpdateShow,
  ShowRoutes.updateShow,
);

showRouter.put(
  Paths.Shows.UpdateConductor,
  ShowRoutes.updateConductor,
);
showRouter.delete(
  Paths.Shows.DeleteShow,
  ShowRoutes.deleteShow,
);
showRouter.delete(
  Paths.Shows.DeleteConductor,
  ShowRoutes.deleteConductor,
);
apiRouter.use(Paths.Shows.Base, showRouter);



export default apiRouter;
