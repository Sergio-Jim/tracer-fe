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
    v-if="showModal"
  >
    <div class="relative wx-auto w-auto max-w-5xl">
      <div
        class="bg-white w-full rounded shadow-2xl flex flex-col"
        style="padding: 50px 50px"
      >
        <div class="flex flex-row justify-center content-center">
          <div class="flex flex-col">
            <img
              src="../assets/TRACER_LOGO.png"
              style="height: 100%; width: 200px; margin: 5px"
            />
            <span style="font-size: 10px"
              >CREATING SAFE BUSINESS ENVIRONMENTS</span
            >
          </div>
        </div>
        <div class="flex flex-col justify-center content-center">
          <form>
            <div style="margin: 30px">
              <input
                placeholder="PIN"
                v-model="otp"
                type="text"
                maxlength="6"
                oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');"
                onKeyPress="if(this.value.length==6) return false;"
                required
                class="
                  focus:outline-none focus:ring focus:ring-white
                  border-black border-b-4 border-t-0 border-r-0 border-l-0
                  w-full
                  py-2
                  px-3
                  text-gray-700 text-center
                "
              />
            </div>

            <div style="margin: 5px 0" class="flex items-center justify-center">
              <button
                class="
                  transition-color
                  duration-700
                  transform
                  hover:bg-tracergrey
                  border border-black
                  text-black
                  px-4
                "
                style="height: 40px"
                v-on:click="verifyOtp"
                type="button"
              >
                <vue-loaders
                  v-if="this.isLoading"
                  name="line-scale"
                  color="black"
                  scale="0.5"
                ></vue-loaders>
                <div class="py-2" v-else>Verify</div>
              </button>
            </div>

            <div
              style="
                display: flex;
                flex-direction: row;
                width: 100%;
                justify-content: center;
                align-items: center;
              "
            >
              <span @click="reloadPage"> Can't get PIN? </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="showModal"
    class="fixed h-screen w-screen inset-0 z-40 opacity-70 bg-black"
  ></div>
</template>

<script>
import gql from "graphql-tag";
import { useToast } from "vue-toastification";

export default {
  name: "otpmodal_edit",
  props: { showModal: { type: Boolean } },
  setup() {
    // Get toast interface
    const toast = useToast();

    // Make it available inside methods
    return { toast };
  },
  data() {
    return {
      isLoading: false,
      otp: "",
    };
  },
  created() {
    // this.$apollo
    //   .query({
    //     // Query
    //     query: gql`
    //       query requestOtp {
    //         requestOtp
    //       }
    //     `,
    //   })
    //   .then(({ data }) => {
    //     this.isLoading = false;
    //     this.toast.success(
    //       "OTP sent to " + localStorage.getItem("phone_number"),
    //       {
    //         timeout: 2000,
    //       }
    //     );
    //   })
    //   .catch((err) => {
    //     this.isLoading = false;
    //     this.toast.error(err.message || "Something went wrong", {
    //       timeout: 2000,
    //     });
    //   });
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
    async verifyOtp() {
      this.isLoading = true;
      this.$apollo
        .mutate({
          // Query
          mutation: gql`
            mutation verifyOtp($phone_number: String!, $code: String!) {
              verifyOtp(phone_number: $phone_number, code: $code) {
                token
                status
                message
                username
                phone_number
              }
            }
          `,
          // Parameters
          variables: {
            phone_number: localStorage.getItem("phone_number"),
            code: this.otp,
          },
        })
        .then(({ data }) => {
          return data.verifyOtp;
        })
        .then(({ status, message }) => {
          this.isLoading = false;
          if (status) {
            this.$parent.updateClient();
          } else {
            this.toast.error(
              "Failed to verify. PIN incorrect. Please try again!"
            );
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.toast.error(
            "Something went wrong. Refresh the page and try again!"
          );
        });
    },
  },
};
</script>

<style scoped>
</style>