import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import ShowService from '@src/services/ShowService';
import { IShow } from '@src/models/Show';
import { IConductor } from '@src/models/Conductor';

import { IReq, IRes } from './types/express/misc';


async function getAllShows(_: IReq, res: IRes) {
  const shows = await ShowService.getAllShows();
  return res.status(HttpStatusCodes.OK).json({ shows });
}
async function getShow(req:IReq, res: IRes){
  const id = +req.params.id;
  const shows =await ShowService.getShow(id)
  return res.status(HttpStatusCodes.OK).json({ shows });
}

async function getAllConductores(_: IReq, res: IRes) {
  const conductores = await ShowService.getAllConductores();
  return res.status(HttpStatusCodes.OK).json({ conductores });
}
async function getConductor(req:IReq, res: IRes){
  const id = +req.params.id;
  const conductores =await ShowService.getConductor(id)
  return res.status(HttpStatusCodes.OK).json({ conductores });
} 



async function addShow(req: IReq<{shows: IShow}>, res: IRes) {
  const { shows } = req.body;
  await ShowService.addShow(shows);
  return res.status(HttpStatusCodes.CREATED).end();
}

async function addConductor(req: IReq<{conductores: IConductor}>, res: IRes) {
  const { conductores } = req.body;
  await ShowService.addConductor(conductores);
  return res.status(HttpStatusCodes.CREATED).end();
}

async function updateShow(req: IReq<{shows: IShow}>, res: IRes) {
  const id = +req.params.id;
  const { shows } = req.body;
  await ShowService.updateShow(id, shows);
  return res.status(HttpStatusCodes.OK).end();
}

async function updateConductor(req: IReq<{conductores: IConductor}>, res: IRes) {
  const id = +req.params.id;
  const { conductores } = req.body;
  console.log(conductores);
  await ShowService.updateConductor(id, conductores);
  return res.status(HttpStatusCodes.OK).end();
}

async function deleteShow(req: IReq, res: IRes) {
  const id = +req.params.id;
  await ShowService.deleteShow(id);
  return res.status(HttpStatusCodes.OK).end();
}

async function deleteConductor(req: IReq, res: IRes) {
  const id = +req.params.id;
  await ShowService.deleteConductor(id);
  return res.status(HttpStatusCodes.OK).end();
}
export default {
  getAllShows,
  getShow,
  getAllConductores,
  getConductor,
  addShow,
  addConductor,
  updateShow,
  updateConductor,
  deleteShow,
  deleteConductor,

} as const;
