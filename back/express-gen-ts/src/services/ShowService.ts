import ShowRepo from '@src/repos/ShowRepo';
import { IShow } from '@src/models/Show';
import { IConductor } from '@src/models/Conductor';

import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import { IInsertCodeOptions } from 'ts-command-line-args';


// **** Variables **** //

export const SHOW_NOT_FOUND_ERR = 'Show not found';
export const CONDUCTOR_NOT_FOUND_ERR = 'Conductor not found';



function getAllShows(): Promise<IShow[]> {
  return ShowRepo.getAllShows();
}
async function getShow(id:number):Promise <IShow|null>{
  const persists = await ShowRepo.persistsShow(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      SHOW_NOT_FOUND_ERR,
    );
  }
  return ShowRepo.getShow(id);
}


function getAllConductores(): Promise<IConductor[]> {
  return ShowRepo.getAllConductores();
}
async function getConductor(id:number):Promise <IConductor|null>{
  const persists = await ShowRepo.persistsConductor(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      CONDUCTOR_NOT_FOUND_ERR,
    );
  }
  return ShowRepo.getConductor(id);
}
 
function addShow(show: IShow): Promise<void> {
  return ShowRepo.addShow(show);
}

function addConductor(conductor: IConductor): Promise<void> {
  return ShowRepo.addConductor(conductor);
}


async function updateShow(id:number, shows: IShow): Promise<void> {
  const persists = await ShowRepo.persistsShow(shows.id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      SHOW_NOT_FOUND_ERR,
    );
  }
  // Return user
  return ShowRepo.updateShow(shows);
}

async function updateConductor(id:number, conductores: IConductor): Promise<void> {
  const persists = await ShowRepo.persistsConductor(conductores.id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      CONDUCTOR_NOT_FOUND_ERR,
    );
  }
  // Return user
  return ShowRepo.updateConductor(conductores);
}

async function deleteShow(id: number): Promise<void> {
  const persists = await ShowRepo.persistsShow(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      SHOW_NOT_FOUND_ERR,
    );
  }
  // Delete user
  return ShowRepo.deleteShow(id);
}

async function deleteConductor(id: number): Promise<void> {
  const persists = await ShowRepo.persistsConductor(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      CONDUCTOR_NOT_FOUND_ERR,
    );
  }
  return ShowRepo.deleteConductor(id);
}
export default {
  getAllShows,
  getAllConductores,
  getShow,
  getConductor,
  addShow,
  addConductor,
  updateShow,
  updateConductor,
  deleteShow,
  deleteConductor,

} as const;
