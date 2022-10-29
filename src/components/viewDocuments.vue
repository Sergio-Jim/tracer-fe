<template>
  <div
    class="
      fixed
      overflow-x-hidden overflow-y-hidden
      inset-0
      flex
      justify-center
      items-center
      z-50
    "
    v-if="viewModal"
  >
    <div class="relative wx-auto w-auto max-w-5xl">
      <div class="bg-white w-full rounded shadow-2xl flex flex-col">
        <!-- header -->
        <div style="padding: 5px 20px" class="flex flex-row border-2">
          <div>
            <span>Client Name: </span>
            <span> {{ fullName }}</span>
          </div>
         
        </div>

        <!-- body -->
        <div style="padding: 5px 20px" v-for="dc in document"  :key="dc.id">
          <a :href=" dc.document_name " target="_blank" >  {{ dc.document_name.split('/').pop() }} </a> <hr />

        </div>

        <!-- footer -->
        <div
          style="padding: 5px 20px"
          class="flex flex-row border-2 justify-end"
        >
          <div class="flex flex-row justify-end mt-4">
            <button
              class="
                bg-white
                transition-colors
                duration-700
                transform
                hover:bg-red-600
                text-black
                px-4
                mx-1
                border border-gray-400
                rounded-lg
                w-2/12
                mb-3
              "
              style="height: 50px"
              v-on:click="$emit('hide-modal')"
            >
              Close
            </button>
            <button
              class="
                bg-black
                text-white
                transition-colors
                duration-700
                transform
                hover:bg-yellow-300 hover:text-black
                px-4
                mx-1
                border border-gray-400
                rounded-lg
                w-2/12
                mb-3
              "
              style="height: 50px"
              v-on:click="saveUpload"
            >
              <vue-loaders
                v-if="this.loading"
                name="line-scale"
                color="white"
                scale="0.5"
              >
              </vue-loaders>
              <div class="py-2" v-else>Save</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="viewModal"
    class="fixed h-screen w-screen inset-0 z-40 opacity-70 bg-black"
  ></div>
</template>

<script>
export default {
  name: "viewDocuments",
  props: { viewModal: { type: Boolean } , 
           document: { type: Object } ,
           fullName: { type: String }
          },
  data() {
    return {};
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>
