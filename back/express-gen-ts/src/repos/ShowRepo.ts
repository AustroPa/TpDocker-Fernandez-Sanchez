import { IShow } from '@src/models/Show';
import Conductor, { IConductor } from '@src/models/Conductor';

import { getRandomInt } from '@src/util/misc';
import orm from './MockOrm';


// **** Functions **** //

/**
 * Get one user.
 
async function getOne(id: number): Promise<IUser | null> {
  const db = await orm.openDb();
  for (const user of db.users) {
    if (user.id === id) {
      return user;
    }
  }
  return null;
}
*//*

 * Get all users.
 
async function getAll(): Promise<IUser[]> {
  const db = await orm.openDb();
  return db.users;
}*/

/**
 * See if a user with the given id exists.
 */
async function getAllShows(): Promise<IShow[]> {
  const db = await orm.openDb();
  return db.shows;
}
async function getShow(id: number): Promise<IShow | null> {
  const db = await orm.openDb();
  for (const show of db.shows) {
    if (show.id === id) {
      return show;
    }
  }
  return null;
}

async function getAllConductores(): Promise<IConductor[]> {
  const db = await orm.openDb();
  return db.conductores;
}
async function getConductor(id: number): Promise<IConductor | null> {
  const db = await orm.openDb();
  for (const conductor of db.conductores) {
    if (conductor.id === id) {
      return conductor;
    }
  }
  return null;
}

async function persistsShow(id: number): Promise<boolean> {
  const db = await orm.openDb();
  for (const show of db.shows) {
    if (show.id === id) {
      return true;
    }
  }
  return false;
}
async function persistsConductor(id: number): Promise<boolean> {
  const db = await orm.openDb();
  for (const conductor of db.conductores) {
    if (conductor.id === id) {
      return true;
    }
  }
  return false;
}


async function addShow(show: IShow): Promise<void> {
  const db = await orm.openDb();
  db.shows.push(show);
  return orm.saveDb(db);
}

async function addConductor(conductor: IConductor): Promise<void> {
  const db = await orm.openDb();
  db.conductores.push(conductor);
  return orm.saveDb(db);
}



async function updateShow(shows: IShow): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.shows.length; i++) {
    if (db.shows[i].id === shows.id) {
      const dbShow = db.shows[i];
      db.shows[i] = {
        ...dbShow,
        foto: shows.foto,
        nombre: shows.nombre,
        idConductores: shows.idConductores,
        duracion: shows.duracion,
        horaInicio: shows.horaInicio,
        horaFinal: shows.horaFinal
      };
      return orm.saveDb(db);
    }
  }
}

async function updateConductor(conductores: IConductor): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.conductores.length; i++) {
    if (db.conductores[i].id === conductores.id) {
      const dbConductor = db.conductores[i];
      db.conductores[i] = {
        ...dbConductor,
        nombre: conductores.nombre,
        apellido: conductores.apellido,
        edad: conductores.edad
      };
      return orm.saveDb(db);
    }
  }
}

async function deleteShow(id: number): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.shows.length; i++) {
    if (db.shows[i].id === id) {
      db.shows.splice(i, 1);
      return orm.saveDb(db);
    }
  }
}

async function deleteConductor(id: number): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.conductores.length; i++) {
    if (db.conductores[i].id === id) {
      db.conductores.splice(i, 1);
      return orm.saveDb(db);
    }
  }
}
export default {
  getAllShows,
  getShow,
  getAllConductores,
  getConductor,
  addShow,
  addConductor,
  updateConductor,
  updateShow,
  persistsShow,
  persistsConductor,
  deleteShow,
  deleteConductor,


  //delete: delete_,
} as const;
