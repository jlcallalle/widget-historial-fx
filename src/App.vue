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
              <div class="form-group col-6 col-md-4 col-xl-2">
                <label for="inputProducto">Producto</label>
                <select
                  id="inputProducto"
                  class="form-control">
                  <option selected>
                    FX Spot
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div class="form-group col-6 col-md-4 col-xl-2">
                <label for="inputFecha">Año/Mes</label>
                <select
                  id="inputFecha"
                  class="form-control">
                  <option selected>
                    2021 - Febrero
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div class="form-group col-6 col-md-4 col-xl-2">
                <label for="inputEstatus">Estatus General</label>
                <select
                  id="inputEstatus"
                  class="form-control">
                  <option selected>
                    FX Spot
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div class="form-group col-6 col-md-4 col-xl-2">
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
              <div class="form-group col-6 col-md-4 col-xl-2">
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
              <div class="form-group col-6 col-md-2 box-consulta-descarga">
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
              <div class="row-col mt-4 mt-md-0">
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
            <div class="table-historial table-responsive">
              <vue-good-table
                :columns="columns"
                :rows="rows"
                :pagination-options="{
                  enabled: true,
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
          <button @click="randomCols">
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
import ColumnsModal from './components/ColumnsModal.vue';
import ColumnsMock from './locales/columns.json';
import RowMock from './locales/rowmock.json';

export default {
  name: 'App',
  components: {
    ColumnsModal,
  },
  data() {
    return {
      year: new Date().getFullYear(),
      openColumnsModal: false,
      allColumns: [],
      columns: [],
      rows: [],
    };
  },
  computed: {
    ...mapState(['posts']),
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

</style>
