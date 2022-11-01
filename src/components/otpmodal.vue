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
      <div
        class="bg-white w-full rounded shadow-2xl flex flex-col"
        style="padding: 5px 20px"
      >
        <div class="flex flex-col justify-center content-center">
          <img
            src="../assets/TRACER_LOGO.png"
            style="height: 100%; width: 200px; margin: 5px"
          />
        </div>
        <div class="flex flex-col justify-center content-center">
          <form>
            <div style="margin-top: 20px">
              <input
                type="text"
                v-model="otp"
                placeholder="OTP"
                class="
                  shadow
                  appearance-none
                  border
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  mb-3
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
              />
            </div>

            <div
              style="margin: 5px 0"
              class="flex items-center justify-between"
            >
              <button
                class="
                  bg-tracergrey
                  transition-color
                  duration-700
                  transform
                  hover:bg-tracergray
                  border border-black
                  text-black
                  px-4
                  rounded-lg
                  w-full
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
    v-if="viewModal"
    class="fixed h-screen w-screen inset-0 z-40 opacity-70 bg-black"
  ></div>
</template>

<script>
import gql from "graphql-tag";
import { useToast } from "vue-toastification";

export default {
  name: "otpmodal",
  props: { viewModal: { type: Boolean } },
  setup() {
    // Get toast interface
    const toast = useToast();

    // Make it available inside methods
    return { toast };
  },
  data() {
    return {
      otp: "",
    };
  },
  created() {
    this.$apollo
        .query({
          // Query
          query: gql`
          query requestOtp {
              requestOtp
            }
          `,
        })
        .then(({ data }) => {
          this.isLoading = false;
          this.toast.success( "OTP sent to " + localStorage.getItem( 'phone_number' ) , {
            timeout: 2000,
          });
        })
        .catch((err) => {
          this.isLoading = false;
          this.toast.error(err.message || "Something went wrong", {
            timeout: 2000,
          });
        });
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
            phone_number:  localStorage.getItem("phone_number"),
            code: this.otp,
          },
        })
        .then(({ data }) => {

          return data.verifyOtp;
        })
        .then(({  status, message }) => {
          this.isLoading = false;
          if (status) {
            this.$parent.createClient();
          } else {
           // this.toast.error(message);
          }
        })
        .catch((err) => {
          this.isLoading = false;
         // this.toast.error(err.message || "Something went wrong.");
        });
    }, 
  },
};
</script>
