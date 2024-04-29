import moment from 'moment';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface IShow {
  id:number;
  foto: string;
  nombre: string;
  idConductores:number;
  duracion: number;
  horaInicio: string;
  horaFinal: string;
}


// **** Functions **** //

/**
 * Create new User.
 */
function new_(
  foto?: string,
  nombre?: string,
  idConductores?: number,
  duracion?: number,
  horaInicio?: string,
  horaFinal?: string,
  id?: number, // id last cause usually set by db
): IShow {
  return { // reemplazar esto por los datos de show y hacer esto tambien con conductores en otro .ts dentro de models
    id: (id ?? -1),
    foto: (foto ?? ''),
    nombre: (nombre ?? ''),
    idConductores: (idConductores ?? -1),
    duracion: (duracion ?? 1),
    horaInicio: (horaInicio ?? ''),
    horaFinal: (horaFinal ?? '')
  };
}

/**
 * Get user instance from object.
 */
function from(param: object): IShow {
  if (!isShow(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as IShow;
  return new_(p.foto, p.nombre, p.idConductores, p.duracion, p.horaInicio, p.horaFinal, p.id);
}

/**
 * See if the param meets criteria to be a user.
 */
function isShow(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' && 
    'foto' in arg && typeof arg.foto === 'string' &&
    'nombre' in arg && typeof arg.nombre === 'string' &&
    'idConductores' in arg && typeof arg.idConductores === 'number'&& //no sabemos como poner array aca, entonces pusimoos q sea 1 solo
    'duracion' in arg && typeof arg.duracion === 'number' && 
    'horaInicio' in arg && typeof arg.horaInicio === 'string' && 
    'horaFinal' in arg && typeof arg.horaFinal === 'string'
  );
}


// **** Export default **** //

export default {
  new: new_,
  from,
  isShow,
} as const;
