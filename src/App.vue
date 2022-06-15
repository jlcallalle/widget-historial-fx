<template>
  <div
    id="app"
    class="wrapper-widget">
    <div class="widget-historial-fx">
      <h1 class="mb-4 title-widget">
        Historial de Operaciones FX
      </h1>
      <div class="container container-widget">
        <div class="row">
          <div class="box-consultar">
            <div class="form-row">
              <div class="form-group col-12 col-md-4 col-xl-2 col-producto">
                <label for="inputProducto">Producto</label>
                <select
                  id="inputProducto"
                  class="form-control">
                  <option selected>
                    FX Spot
                  </option>
                  <option>Forward</option>
                  <option>Swap</option>
                  <option>Block Trade</option>
                </select>
              </div>
              <div class="form-group col-12 col-md-4 col-xl-2 col-date">
                <label for="inputFecha">Año/Mes</label>
                <div class="wrap-fecha">
                  <input
                    id="seleccionFecha"
                    type="text"
                    autocomplete="off"
                    :value="dateCalendar"
                    class="form-control seleccionFecha"
                    placeholder="Seleccionar Fecha"
                    @click="isHidden = !isHidden">
                  <div class="icon-calendar">
                    <svg
                      width="18"
                      height="21"
                      viewBox="0 0 18 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13 11.5H10C9.45 11.5 9 11.95 9 12.5V15.5C9 16.05 9.45 16.5 10 16.5H13C13.55 16.5 14 16.05 14 15.5V12.5C14 11.95 13.55 11.5 13 11.5ZM13 1.5V2.5H5V1.5C5 0.95 4.55 0.5 4 0.5C3.45 0.5 3 0.95 3 1.5V2.5H2C0.89 2.5 0.00999999 3.4 0.00999999 4.5L0 18.5C0 19.6 0.89 20.5 2 20.5H16C17.1 20.5 18 19.6 18 18.5V4.5C18 3.4 17.1 2.5 16 2.5H15V1.5C15 0.95 14.55 0.5 14 0.5C13.45 0.5 13 0.95 13 1.5ZM15 18.5H3C2.45 18.5 2 18.05 2 17.5V7.5H16V17.5C16 18.05 15.55 18.5 15 18.5Z"
                        fill="#424242" />
                    </svg>
                  </div>
                </div>
                <div
                  v-show="isHidden"
                  class="wrapp-fecha-rango">
                  <div class="box-fecha-cal">
                    <div>{{ fechaStart }}</div>
                    <div>{{ fechaEnd }}</div>
                  </div>
                  <date-picker
                    v-model="range"
                    :masks="masks"
                    :min-date="anioAnterior"
                    :max-date="new Date()"
                    :columns="$screens({ default: 1, lg: 2 })"
                    :is-expanded="$screens({ default: true, lg: false })"
                    is-range />
                  <div class="row-accion-cal">
                    <button
                      class="link-red"
                      @click="borrarFecha">
                      Borrar
                    </button>
                    <button
                      class="link-red"
                      @click="aceptarFecha">
                      Aceptar
                    </button>
                  </div>
                </div>
              </div>
              <div class="form-group col-12 col-md-4 col-xl-2 col-status">
                <label for="inputEstatus">Estatus General</label>
                <select
                  id="inputEstatus"
                  class="form-control">
                  <option selected>
                    Liquidado
                  </option>
                  <option>No Liquidado</option>
                </select>
              </div>
              <div class="form-group col-12 col-md-4 col-xl-2">
                <label for="inputEstatus">Usuario</label>
                <select
                  id="inputEstatus"
                  class="form-control">
                  <option selected>
                    Nombre usuario
                  </option>
                </select>
              </div>
              <div class="form-group col-12 col-md-4 col-xl-2">
                <label for="inputEstatus">Estatus Pago</label>
                <select
                  id="inputEstatus"
                  class="form-control">
                  <option selected>
                    Pendiente Pago
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div class="form-group col-auto box-consulta-descarga">
                <button
                  type="submit"
                  class="btn btn-outline-operacion"
                  @click="getRecords">
                  Consultar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="box-filtrado">
            <div class="form-row">
              <div class="row-col">
                <button
                  class="btn btn-primary btn-columna"
                  type="submit"
                  @click="openModalColumns">
                  <i><svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3.18164 14.5909V9.5"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path
                      d="M3.18164 6.59091V1.5"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path
                      d="M9 14.5909V8.04541"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path
                      d="M9 5.13636V1.5"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path
                      d="M14.8184 14.591V10.9546"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path
                      d="M14.8184 8.04545V1.5"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path
                      d="M1 9.5H5.36364"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path
                      d="M6.81836 5.13623H11.182"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path
                      d="M12.6367 10.9546H17.0004"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                  </i><span>Personalizar columnas</span>
                </button>
              </div>
              <div class="row-btn-descarga">
                <a
                  href="#"
                  class="btn-descarga">
                  <i class="icon-descarga-info">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.94536V17H5V3H10.6163L15 6.94536Z"
                        stroke="#A41D36"
                        stroke-width="2" />
                      <rect
                        x="9"
                        y="2"
                        width="2"
                        height="6"
                        fill="#A41D36" />
                      <rect
                        x="9"
                        y="7"
                        width="7"
                        height="2"
                        fill="#A41D36" />
                    </svg>
                  </i><span>Descarga CSV</span></a>
                <a
                  href="#"
                  class="btn-descarga"><i class="icon-descarga-info">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.94536V17H5V3H10.6163L15 6.94536Z"
                        stroke="#A41D36"
                        stroke-width="2" />
                      <rect
                        x="9"
                        y="2"
                        width="2"
                        height="6"
                        fill="#A41D36" />
                      <rect
                        x="9"
                        y="7"
                        width="7"
                        height="2"
                        fill="#A41D36" />
                    </svg>
                  </i><span>Descargar XLS</span></a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="box-table-result">
            <div class="table-historial table-responsive mb-4">
              <thead class="draggable">
                <draggable
                  v-model="columns"
                  tag="tr">
                  <th
                    v-for="header in columns"
                    :key="header"
                    style="min-width: auto; width: auto"
                    :class="`th-custom sortable col-${ header.label } `"
                    scope="col"
                    aria-sort="descending">
                    <span>{{ header.label }}</span>
                  </th>
                </draggable>
              </thead>
              <vue-good-table
                :columns="columns"
                :rows="rows"
                :is-draggable="true"
                :pagination-options="{
                  enabled: true,
                  mode: 'records',
                  nextLabel: 'Siguiente',
                  prevLabel: 'Previo',
                  rowsPerPageLabel: 'Filas por página',
                  ofLabel: 'de',
                }">
                <div slot="emptystate">
                  No hay datos
                </div>
                <template
                  slot="table-row"
                  slot-scope="props">
                  <span v-if="props.column.field == 'tipoConfirmacion'">
                    <input
                      type="checkbox"
                      :checked="props.formattedRow[props.column.field]">
                  </span>
                  <span v-else-if="props.column.field == 'pdf'">
                    <button
                      class="btn btn-primary btn-columna"
                      type="submit"
                      @click="openModalPdf(pdfSelected)">
                      <i><svg
                        width="31"
                        height="24"
                        viewBox="0 0 31 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M17.9474 6.85714H0V10.2857H17.9474V6.85714ZM17.9474 0H0V3.42857H17.9474V0ZM24.4737 13.7143V6.85714H21.2105V13.7143H14.6842V17.1429H21.2105V24H24.4737V17.1429H31V13.7143H24.4737ZM0 17.1429H11.4211V13.7143H0V17.1429Z"
                          fill="white" />
                      </svg>
                      </i>
                    </button>
                  </span>
                  <span v-else>
                    {{ props.formattedRow[props.column.field] }}
                  </span>
                </template>
              </vue-good-table>
            </div>
          </div>
          <button
            class="d-none"
            @click="randomCols">
            Random
          </button>
        </div>
      </div>
    </div>
    <columns-modal
      v-if="openColumnsModal"
      :open="openColumnsModal"
      :columns="allColumns"
      :accept-fn="editColumns"
      :close-fn="closeModalColumns" />
    <pdf-modal
      v-if="openPdfModal"
      :open="openPdfModal"
      :pdf="pdfSelected"
      :close-fn="closeModalPdf" />
  </div>
</template>

<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd';
import draggable from 'vuedraggable';
import Repository from './repositories/RepositoryFactory';
import ColumnsModal from './components/ColumnsModal.vue';
import PdfModal from './components/PdfModal.vue';
import ColumnsMock from './locales/columns.json';
// import RowMock from './locales/rowmock.json';
import { pdfMock } from './locales/pdf';

// eslint-disable-next-line no-unused-vars
const InvexRepository = Repository.get('invex');

export default {
  name: 'App',
  components: {
    ColumnsModal,
    PdfModal,
    DatePicker,
    draggable,
  },
  data() {
    const date = new Date();
    // const month = date.getMonth();
    const year = date.getFullYear();
    return {
      dragging: false,
      isHidden: false,
      calendarSelected: null,
      masks: {
        input: 'DD-MM-YYYY',
      },
      range: {
        start: new Date(year, 4, 10),
        end: new Date(year, 5, 10),
      },
      date: new Date(),
      year: new Date().getFullYear(),
      openColumnsModal: false,
      allColumns: [],
      columns: [],
      rows: [],
      openPdfModal: false,
      pdfSelected: pdfMock,
    };
  },
  computed: {
    anioAnterior() {
      const d = new Date();
      d.setFullYear(d.getFullYear() - 1);
      return d.toDateString();
    },
    fechaStart() {
      const valorfecha = this.range.start.toDateString();
      const fechaFormat = valorfecha.split(' ').slice(1).join(' ');
      return fechaFormat;
    },
    fechaEnd() {
      const valorfecha = this.range.end.toDateString();
      const fechaFormat = valorfecha.split(' ').slice(1).join(' ');
      return fechaFormat;
    },
    dateCalendar() {
      const textoDefault = 'Seleccione Fecha';
      if (!this.calendarSelected) return textoDefault;
      const valorfechaStart = this.range.start.toDateString();
      const fechaFormat = valorfechaStart.split(' ').slice(1).join(' ');
      const valorfechaEnd = this.range.end.toDateString();
      const fechaFormat2 = valorfechaEnd.split(' ').slice(1).join(' ');
      return `${fechaFormat} - ${fechaFormat2}`;
    },
  },
  mounted() {
    this.allColumns = ColumnsMock;
    this.getColumns();
    // this.rows = RowMock;
  },
  created() {
    this.getPosts();
  },
  methods: {
    dateToFormatApi(date) {
      const formatDate = new Date(date);
      return formatDate.toISOString().split('T')[0];
    },
    dateToFormatShow(date) {
      let formatDate = new Date(date);
      // eslint-disable-next-line prefer-destructuring
      formatDate = formatDate.toISOString().split('T')[0];
      return `${formatDate.substr(8)}/${formatDate.substr(5, 2)}/${formatDate.substr(0, 4)}`;
    },
    numberToFormatShow(value, decimal) {
      return value.toFixed(decimal).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    },
    aceptarFecha() {
      this.isHidden = false;
      this.calendarSelected = this.range;
    },
    borrarFecha() {
      this.isHidden = false;
      this.calendarSelected = '';
    },
    validateStatusLiquidacion(record) {
      let statusLiquidacion = 'Asignadas';
      if (!record.settlement_bankID) statusLiquidacion = 'Pendientes';
      if (!record.settlement_bankName) statusLiquidacion = 'Pendientes';
      if (!record.settlement_beneficiary) statusLiquidacion = 'Pendientes';
      if (!record.settlement_rfccurp) statusLiquidacion = 'Pendientes';
      return statusLiquidacion;
    },
    validateStatusGeneral(record) {
      let statusGeneral = 'Liquidado';
      if (record.statusLiquidacion !== 'Asignadas') statusGeneral = 'Sin Liquidar';
      if (record.statusOrigen !== 'SI') statusGeneral = 'Sin Liquidar';
      if (record.statusDestino !== 'SI') statusGeneral = 'Sin Liquidar';
      return statusGeneral;
    },
    formatRecords(records) {
      const canales = {
        P: 'Portal',
        T: 'Telefonica',
        I: 'Invex',
        D: 'Default',
      };
      const ordenes = {
        D: 'Previously quoted',
        1: 'Market',
        2: 'Limit',
        Def: 'Desconocida',
      };
      return records.map((record) => {
        const newRecord = { ...record };
        newRecord.transactionDate = this.dateToFormatShow(newRecord.transactionDate);
        newRecord.entry_date = this.dateToFormatShow(newRecord.entry_date);
        newRecord.settlDate = this.dateToFormatShow(newRecord.settlDate);
        newRecord.orderQty = this.numberToFormatShow(newRecord.orderQty, 2);
        newRecord.lastPx = this.numberToFormatShow(newRecord.lastPx, 4);
        newRecord.statusOrigen = newRecord.debitAccount ? 'SI' : 'NO';
        newRecord.statusDestino = newRecord.creditAccount ? 'SI' : 'NO';
        newRecord.canal = canales.D;
        if (canales[newRecord.origin]) newRecord.canal = canales[newRecord.origin];
        newRecord.statusLiquidacion = this.validateStatusLiquidacion(newRecord);
        newRecord.statusGeneral = this.validateStatusGeneral(newRecord);
        newRecord.ordType = ordenes.Def;
        if (ordenes[record.ordType]) newRecord.ordType = ordenes[record.ordType];
        return newRecord;
      });
    },
    async getRecords() {
      const fromDate = this.dateToFormatApi(this.range.start);
      const toDate = this.dateToFormatApi(this.range.end);
      const options = {
        fromDate,
        toDate,
        user360T: 'INVEXCOMP1.TEST',
        trade_status: 'C',
        internetFolio: '9254',
        origin: 'P',
        product: 'SWAP',
        side: 'SELL',
      };
      try {
        const records = await InvexRepository.getRecords(options);
        if (records.code === 900) {
          this.rows = this.formatRecords(records.data.catalogList);
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log('records', e);
      }
    },
    getColumns() {
      this.columns = this.allColumns.filter((column) => column.show);
    },
    randomCols() {
      this.columns = this.allColumns.map((column) => ({
        ...column,
        show: Math.random() > 0.5,
      })).filter((column) => column.show);
    },
    openModalColumns() {
      this.openColumnsModal = true;
    },
    closeModalColumns() {
      this.openColumnsModal = false;
    },
    closeModalPdf() {
      this.openPdfModal = false;
    },
    openModalPdf(pdf) {
      this.pdfSelected = pdf || '';
      this.openPdfModal = true;
    },
    editColumns(columns) {
      this.columns = columns.filter((column) => column.show);
      this.closeModalColumns();
    },
    downloadPDF(pdf) {
      const linkSource = `data:application/pdf;base64,${pdf}`;
      const downloadLink = document.createElement('a');
      const fileName = 'abc.pdf';
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    },
  },
};
</script>

<style lang="scss">
img {
  max-width: 100%;
}
.draggable-list {
  background: #3f51b5;
  color: #fff;
  border: 1px solid;
  height: 50vh;
}
.list-item {
  margin: 10px;
  padding: 40px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
  background: #f44336;
  display: inline-block;
}
</style>
