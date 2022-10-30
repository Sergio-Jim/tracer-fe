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
        <div style="padding: 5px 20px">
          <div
            style="
              margin-top: 20px;
              margin-left: 20px;
              flex-basis: 100%;
              border: 1px solid;
              border-color: gray;
              max-height: 300px;
              overflow-y: scroll;
            "
          >
            <table
              class="
                w-full
                text-sm text-left text-gray-500
                dark:text-gray-400
                table-auto
                overflow-scroll
              "
            >
              <thead
                class="
                  text-xs text-gray-700
                  uppercase
                  bg-gray-50
                  dark:bg-gray-700 dark:text-gray-400
                "
              >
                <tr>
                  <th scope="col" class="px-6 py-4">File Name</th>
                  <th scope="col" class="px-6 py-4">File Type</th>
                  <th scope="col" class="px-2 py-4">Date Uploaded</th>
                  <th scope="col" class="px-2 py-4"></th>
                  <th scope="col" class="px-2 py-4">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody   v-for="dc in document"  :key="dc.id" >
                <tr
                  class="
                    bg-white
                    border-b
                    dark:bg-gray-800 dark:border-gray-700
                  "
                >
                  <th
                    scope="row"
                    class="
                      px-6
                      py-4
                      font-medium
                      text-gray-900
                      dark:text-white
                      whitespace-nowrap
                    "
                  >
                  <a :href=" dc.document_name " target="_blank" >  {{ dc.document_name.split('/').pop() }} </a> 
                  </th>
                  <td class="px-6 py-4">{{ dc.document_name.split('.').pop() }}</td>
                  <td class="px-2 py-4">{{ dc.created }}</td>
                  <td class="px-2 py-4">
                    <!-- <img
                      src="@/assets/cancel_icon.svg"
                      class="cursor-pointer"
                    /> -->
                  </td>
                  <td class="px-6 py-4 text-right"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            style="
              border: 1px solid;
              border-top: 0px;
              border-color: gray;
              margin-left: 20px;
              margin-bottom: 10px;
            "
          >
            <div
              class="
                flex flex-row
                justify-center
                w-full
                text-sm text-left text-gray-500
                dark:text-gray-400
                table-auto
              "
            >
              <span style="font-size: 10px">Last Uploaded By: username232</span>
            </div>
          </div>
        </div>

        <!-- footer -->
        <div style="padding: 5px 20px" class="flex flex-row">
          <div class="flex flex-row">
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
                w-full
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
                w-full
                mb-3
              "
              onclick="document.getElementById('files').click()"
            >
              <div>
                <input type="file" id="files" class="hidden"  @change="uploadDocuments" />
                
                Upload Documents</div>
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
import gql from "graphql-tag";

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
    async uploadDocuments({ target }) {

      this.loading = true;
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation uploadDocument(
                 $file: Upload!
                 $id: String
                 ) {
              uploadDocument(file: $file, 
              id:$id)
            }
          `,
          variables: {
            file: target.files[0],
            id:  this.$route.query.id
          },
        })
        .then(({ data }) => {
          this.loading = false;

          this.toast.success("File added Successfully.");
          this.$router.go();
        })
        .catch((err) => {
          this.loading = false;
          this.toast.error(err.message || "Something went wrong.");
        });
    },
  },
};
</script>
