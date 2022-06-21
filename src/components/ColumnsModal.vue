<template>
  <transition
    name="fade">
    <div
      :class="open ? 'modal-mask' : ''">
      <div
        class="modal-wrapper"
        :class="open ? 'slide': ''">
        <div
          class="modal-dialog modal-dialog-centered"
          role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                @click="closeFn">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body d-flex flex-column">
              <h5
                class="modal-title">
                Personalizar columnas
              </h5>
              <div class="container">
                <p>Selecciona las columnas que deseas visualiza en la tabla:</p>
                <div class="dragContainer">
                  <draggable
                    v-model="auxColumns"
                    ghost-class="dragContainer">
                    <div
                      v-for="(column, index) in auxColumns"
                      :key="index"
                      class="dragCol">
                      <div class="form-check">
                        <input
                          :id="column.field"
                          class="form-check-input"
                          type="checkbox"
                          :disabled="!column.editable"
                          :checked="column.show"
                          :value="column.show"
                          @change="toggleColumn(index)">
                        <label
                          class="form-check-label"
                          :for="column.field">
                          {{ column.label }}
                        </label>
                      </div>
                    </div>
                  </draggable>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-center">
              <button
                type="button"
                class="btn btn-solicita"
                @click="changeColumns">
                Agregar columnas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: 'ColumnsModal',
  components: {
    draggable,
  },
  props: {
    open: Boolean,
    closeFn: {
      type: Function,
      default: () => {},
    },
    acceptFn: {
      type: Function,
      default: () => {},
    },
    columns: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      auxColumns: [],
    };
  },
  mounted() {
    this.auxColumns = this.columns;
  },
  methods: {
    toggleColumn(index) {
      this.auxColumns[index].show = !this.auxColumns[index].show;
    },
    changeColumns() {
      this.acceptFn(this.auxColumns);
    },
  },
};
</script>

<style scoped lang="scss">
  .dragCol {
    width: 50%;
  }
  .dragContainer > div{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
