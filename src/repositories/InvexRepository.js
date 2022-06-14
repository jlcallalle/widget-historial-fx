import InvexClient from './clients/InvexClient';

const prefixUrl = '/portal/1.0.0';

export default {
  getRecords(options) {
    return InvexClient.post(`${prefixUrl}/consultaHistorial`, options);
  },
};
