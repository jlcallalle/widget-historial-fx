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
            <div class="modal-body">
              <div class="container">
                <div class="col">
                  <iframe
                    width="100%"
                    style="min-height: 500px;"
                    :src="generatePdf()" />
                </div>
              </div>
              <div class="modal-footer justify-content-center">
                <button
                  type="button"
                  class="btn btn-descarga-pdf"
                  @click="downloadPDF">
                  Descargar
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
  name: 'PdfModal',
  props: {
    open: Boolean,
    pdf: {
      type: String,
      default: '',
    },
    pdfName: {
      type: String,
      default: 'abc.pdf',
    },
    closeFn: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {
    generatePdf() {
      const blobPdf = this.base64ToBlob(this.pdf, 'application/pdf');
      return URL.createObjectURL(blobPdf);
    },
    base64ToBlob(base64, type = 'application/octet-stream') {
      const binStr = atob(base64);
      const len = binStr.length;
      const arr = new Uint8Array(len);
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < len; i++) {
        arr[i] = binStr.charCodeAt(i);
      }
      return new Blob([arr], { type });
    },
    downloadPDF() {
      const linkSource = `data:application/pdf;base64,${this.pdf}`;
      const downloadLink = document.createElement('a');
      downloadLink.href = linkSource;
      downloadLink.download = this.pdfName;
      downloadLink.click();
    },
  },
};
</script>

<style scoped lang="scss">

</style>
