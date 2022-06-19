import InvexClient from './clients/InvexClient';

const prefixUrl = '/portal/1.0.0';

export default {
  getRecords(options) {
    return InvexClient.post(`${prefixUrl}/consultaHistorial`, options);
  },
  getOperations(network = 'FX') {
    return InvexClient.get(`${prefixUrl}/lista-operaciones?network=${network}`);
  },
  validarToken(body) {
    return InvexClient.post(`${prefixUrl}/validarToken`, body);
  },
  getDocument(body) {
    return InvexClient.post(`${prefixUrl}/getDocumentContent`, body);
  },
};
