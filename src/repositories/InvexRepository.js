import InvexClient from './clients/InvexClient';

const prefixUrl = '/portal/1.0.0';

export default {
  getRecords(options) {
    return InvexClient.post(`${prefixUrl}/consultaHistorial`, options);
  },
  getOperations() {
    return InvexClient.get(`${prefixUrl}/lista-operaciones`);
  },
  validarToken(body) {
    return InvexClient.post(`${prefixUrl}/validarToken`, body);
  },
  getDocument(body) {
    return InvexClient.post(`${prefixUrl}/getDocumentContent`, body);
  },
  downloadPdf(body) {
    return InvexClient.post(`${prefixUrl}/descargarPDF`, body);
  },
  downloadXml(body) {
    return InvexClient.post(`${prefixUrl}/descargarXML`, body);
  },
  getStatus() {
    return InvexClient.get(`${prefixUrl}/estatus-operacion`);
  },
  listaCuentasOrigen(body) {
    return InvexClient.post(`${prefixUrl}/lista_cuentas_origen`, body);
  },
  listaCuentasDestino(body) {
    return InvexClient.post(`${prefixUrl}/listaCuentasDestino`, body);
  },
};
