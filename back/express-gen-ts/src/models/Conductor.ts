import moment from 'moment';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface IConductor {
  id:number;
  nombre: string;
  apellido:string;
  edad: number;
}


// **** Functions **** //

/**
 * Create new User.
 */
function new_(
  nombre?: string,
  apellido?: string,
  edad?: number,
  id?: number, // id last cause usually set by db
): IConductor {
  return {
    id: (id ?? -1),
    nombre: (nombre ?? ''),
    apellido: (apellido ?? ''),
    edad: (edad ?? 1)
  };
}

/**
 * Get user instance from object.
 */
function from(param: object): IConductor {
  if (!isConductor(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as IConductor;
  return new_(p.nombre, p.apellido, p.edad, p.id);
}

/**
 * See if the param meets criteria to be a user.
 */
function isConductor(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' && 
    'nombre' in arg && typeof arg.nombre === 'string' && 
    'apellido' in arg && typeof arg.apellido === 'string' &&
    'edad' in arg && typeof arg.edad === 'number'
  );
}


// **** Export default **** //

export default {
  new: new_,
  from,
  isConductor,
} as const;
