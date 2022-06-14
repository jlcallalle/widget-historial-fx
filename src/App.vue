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
                  class="wrapp-fecha">
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
                  <option>2</option>
                  <option>3</option>
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
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
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
              <div class="form-group col-12 col-md-4 col-xl-2 box-consulta-descarga">
                <button
                  type="submit"
                  class="btn btn-outline-operacion">
                  Consultar
                </button>
                <div class="icon-descarga">
                  <svg
                    width="24"
                    height="30"
                    viewBox="0 0 24 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23.9998 10.8333H17.3332V0.833252H7.33317V10.8333H0.666504L12.3332 22.4999L23.9998 10.8333ZM0.666504 25.8333V29.1666H23.9998V25.8333H0.666504Z"
                      fill="#A41D36" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="box-filtrado">
            <div class="form-row">
              <div class="row-pills">
                <div class="btn btn-pill">
                  Producto
                  <button
                    type="button"
                    class="close"
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="btn btn-pill">
                  Cliente
                  <button
                    type="button"
                    class="close"
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="btn btn-pill">
                  Operador
                  <button
                    type="button"
                    class="close"
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="btn btn-pill">
                  #Ref/Folio
                  <button
                    type="button"
                    class="close"
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
              <div class="row-col">
                <button
                  class="btn btn-primary btn-columna"
                  type="submit"
                  @click="openModalColumns">
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
                  </i><span>Agregar Columnas</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4">
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
                <template
                  slot="table-row"
                  slot-scope="props">
                  <span v-if="props.column.field == 'tipoConfirmacion'">
                    <input
                      type="checkbox"
                      :checked="props.formattedRow[props.column.field]">
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
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import DatePicker from 'v-calendar/lib/components/date-picker.umd';
import draggable from 'vuedraggable';
import ColumnsModal from './components/ColumnsModal.vue';
import ColumnsMock from './locales/columns.json';
import RowMock from './locales/rowmock.json';

export default {
  name: 'App',
  components: {
    ColumnsModal,
    DatePicker,
    draggable,
  },
  data() {
    const date = new Date();
    // const month = date.getMonth();
    const year = date.getFullYear();
    return {
      headers: [
        'id',
        'name',
        'sport',
        'testColum',
      ],
      list: [
        {
          id: 1, name: 'Abby', sport: 'basket', testColum: 'prueba1',
        },
        {
          id: 2, name: 'Brooke', sport: 'foot', testColum: 'prueba2',
        },
        {
          id: 3, name: 'Courtenay', sport: 'volley', testColum: 'prueba 3',
        },
        {
          id: 4, name: 'David', sport: 'rugby', testColum: 'prueba4',
        },
      ],
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
    };
  },
  computed: {
    ...mapState(['posts']),
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
    this.rows = RowMock;
  },
  created() {
    this.getPosts();
  },
  methods: {
    ...mapActions(['getPosts']),
    aceptarFecha() {
      this.isHidden = false;
      this.calendarSelected = this.range;
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
    editColumns(columns) {
      this.columns = columns.filter((column) => column.show);
      this.closeModalColumns();
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
