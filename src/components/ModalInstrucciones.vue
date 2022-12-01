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
          <div class="modal-content modal-instrucciones">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                @click="$emit('close')">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body d-flex flex-column">
              <div class="box-asignacion">
                <div class="title-sec">
                  <h2 class="mb-4 title-widget text-center">
                    Asignación de instrucciones de liquidación
                  </h2>
                </div>
                <div class="box-cuentas">
                  <div class="subtitle-cuenta">
                    Seleccionar cuentas
                  </div>
                  <div class="form-row mt-2">
                    <div class="form-group col-12 col-md-10">
                      <label
                        for="tipoCuentalSelect">Cuenta de Origen:</label>
                      <select
                        id="tipoCuentalSelect"
                        class="form-control">
                        <option
                          v-for="(origen, index) in listadoOrigen"
                          :id="index"
                          :key="index"
                          :selected="origenSelected === origen.customerAccount"
                          :value="origen.customerAccount">
                          {{ origenTxt(origen) }}
                        </option>
                      </select>
                    </div>
                    <div class="form-group col-12 col-md-10">
                      <label for="inputFecha">Cuenta Destino</label>
                      <select
                        id="tipoCuentalSelect"
                        class="form-control"
                        :disabled="origenSelected === null">
                        <option
                          v-for="(destino, index) in listadoDestino"
                          :id="index"
                          :key="index"
                          :selected="destinoSelected === destino.BeneficiaryAccount"
                          :value="destino.BeneficiaryAccount">
                          {{ destinoTxt(destino) }}
                        </option>
                      </select>
                    </div>
                    <div class="form-group col-12 col-md-10">
                      <a
                        href=""
                        class="box-alta">
                        <i class="icon-cruz">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M15 8.57143H8.57143V15H6.42857V8.57143H0V6.42857H6.42857V0H8.57143V6.42857H15V8.57143Z"
                              fill="#A41D36" />
                          </svg>
                        </i>
                        <span>Dar de alta nueva cuenta destino</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-center">
              <div class="box-two-btn">
                <button
                  type="button"
                  class="btn btn-close-white"
                  @click="$emit('close')">
                  Cancelar
                </button>
                <button
                  type="button"
                  class="btn btn-solicita"
                  @click="$emit('close')">
                  Asignar Instrucciones
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalInstrucciones',
  props: {
    open: Boolean,
    listadoOrigen: {
      type: Array,
      default: () => [],
    },
    listadoDestino: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {

    };
  },
  methods: {
    origenTxt(origen) {
      if (!origen) return '';
      return `${origen.currency}
                        ${origen.type} - **********${origen.customerAccount.slice(origen.customerAccount.length - 4)}`;
    },
    destinoTxt(destino) {
      if (!destino) return '';
      const destinoAux = JSON.parse(JSON.stringify(destino));
      if (!destinoAux.BeneficiaryAccount) return '';
      return `USD ${destinoAux.BeneficiaryBank} - **********${destinoAux.BeneficiaryAccount.toString()
        .slice(destinoAux.BeneficiaryAccount.toString().length - 4)}`;
    },
  },
};
</script>

<style scoped lang="scss">
.modal-body {
    max-width: 500px;
    margin: 0 auto;
}
.modal-mask {
    z-index: 9999;
}
</style>
