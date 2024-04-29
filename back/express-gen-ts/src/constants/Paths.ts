/**
 * Express router paths go here.
 */


export default {
  Base: '/',
  Shows: {
    Base: '/',
    GetAllShows: '/show',
    GetShow: '/show/:id',
    AddShow: '/show',
    UpdateShow: '/show/:id',
    DeleteShow: '/show/:id',
    GetAllConductores: '/conductor',
    GetConductor: '/conductor/:id',
    AddConductor: '/conductor',
    UpdateConductor: '/conductor/:id',
    DeleteConductor: '/conductor/:id'
  },
} as const;
