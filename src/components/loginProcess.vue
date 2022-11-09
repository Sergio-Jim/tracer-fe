<template>
  <main>
    <div style="margin: 30px">
      <div id="enter_credentials">
        <form>
          <div style="margin: 80px 0">
            <div style="margin: 20px 0">
              <div :class="{ error: v$.username.$errors.length }">
                <input
                  type="text"
                  v-model="username"
                  placeholder="Username"
                  class="
                    focus:outline-none focus:ring focus:ring-white
                    border-black border-b-4 border-t-0 border-r-0 border-l-0
                    w-full
                    py-2
                    px-3
                    text-gray-700 text-center
                  "
                />
                <div
                  class="input-errors text-sm px-1"
                  v-for="error of v$.username.$errors"
                  :key="error.$uid"
                >
                  <div class="error-msg">Username Required</div>
                </div>
              </div>
            </div>

            <div style="margin: 20px 0">
              <div :class="{ error: v$.password.$errors.length }">
                <input
                  type="password"
                  v-model="password"
                  placeholder="Password"
                  class="
                    focus:outline-none focus:ring focus:ring-white
                    border-black border-b-4 border-t-0 border-r-0 border-l-0
                    w-full
                    py-2
                    px-3
                    text-gray-700 text-center
                  "
                />
                <div
                  class="input-errors text-sm px-1"
                  v-for="error of v$.password.$errors"
                  :key="error.$uid"
                >
                  <div class="error-msg">Password Required</div>
                </div>
              </div>
            </div>
          </div>

          <div style="margin: 60px 0">
            <div
              style="margin-top: 10px"
              class="flex items-center justify-between"
            >
              <div
                :style="{
                  height: '50px',
                  width: '100%',
                  display: 'flex',
                  'background-image': `url(${require('@/assets/fingerprint.png')})`,
                  'background-repeat': `no-repeat`,
                  'background-position': `center center`,
                }"
              >
                <div
                  style="
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  <button style="height: 40px" v-on:click="login" type="button">
                    <vue-loaders
                      v-if="this.isLoading"
                      name="ball-clip-rotate-pulse"
                      color="red"
                      scale="1"
                    ></vue-loaders>
                    <div class="py-2 text-red-800" v-else>Authenticate</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div
          style="
            display: flex;
            flex-direction: column;
            width: 100%;
            justify-content: center;
            align-items: center;
            margin: 10px 0;
          "
        >
          <span class="text-sm text-gray-700">Unable to login? Contact Us</span>
          <span class="text-sm text-gray-700"
            >wow.co.na | +264 81 455 5528</span
          >
        </div>
      </div>

      <div id="enter_otp" style="display: none">
        <form form v-on:submit.prevent="verifyOtp">
          <div class="flex flex-col items-center text-center justify-center">
            <span>A PIN has been sent to {{ this.phone_number }}</span>
            <span>Please enter that PIN to login</span>
          </div>
          <div style="margin: 30px 0">
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
                tracking-widest
              "
            />
          </div>

          <div style="margin: 10px 0" class="flex items-center justify-center">
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
              type="submit"
            >
              <vue-loaders
                v-if="this.isLoading"
                name="line-scale"
                color="black"
                scale="0.5"
              ></vue-loaders>
              <div class="py-2" v-else>Log in</div>
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
  </main>
</template>
<script>
import gql from "graphql-tag";
import { useToast } from "vue-toastification";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  name: "LoginProcess",
  setup() {
    // Get toast interface
    const toast = useToast();

    // Make it available inside methods
    return { toast, v$: useVuelidate() };
  },

  data() {
    return {
      isLoading: false,
      active: false,
      username: "",
      password: "",
      phone_number: "",
      otp: "",
    };
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
    async login() {
      const isForm = await this.v$.$validate();
      console.log(isForm);
      if (!isForm) return;
      this.isLoading = true;
      this.$apollo
        .mutate({
          // Query
          mutation: gql`
            mutation loginUser($username: String!, $password: String!) {
              loginUser(username: $username, password: $password) {
                status
                message
              }
            }
          `,
          // Parameters
          variables: {
            username: this.username,
            password: this.password,
          },
        })
        .then(({ data }) => {
          console.log(data);
          return data.loginUser;
        })
        .then(({ status, message }) => {
          this.isLoading = false;
          if (status) {
            document.getElementById("enter_otp").style.display = "block";
            document.getElementById("enter_credentials").style.display = "none";
            this.phone_number = message;
          } else {
            this.toast.error(message);
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.toast.error(err.message || "Something went wrong.");
        });
    },
    async verifyOtp() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
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
            phone_number: this.phone_number,
            code: this.otp,
          },
        })
        .then(({ data }) => {
          return data.verifyOtp;
        })
        .then(({ phone_number, username, token, status, message }) => {
          this.isLoading = false;
          if (status) {
            localStorage.setItem("username", username);
            localStorage.setItem("phone_number", phone_number);
            localStorage.setItem("token", token);
            this.$router.push("/dashboard");
          } else {
            this.toast.error(message);
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.toast.error(err.message || "Something went wrong.");
        });
    },
  },
  validations() {
    return {
      username: {
        required,
      },
      password: {
        required,
      },
    };
  },
};
</script>

<style scoped>
</style>