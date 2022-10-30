<template>
  <main>
    <div style="margin: 50px">
      <div id="enter_credentials">
        <form>
          <div style="margin-top: 50px">
            <input
              type="text"
              v-model="username"
              placeholder="Username"
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

          <div style="margin-top: 5px">
            <input
              type="password"
              v-model="password"
              placeholder="Password"
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
                    name="line-scale"
                    color="black"
                    scale="0.5"
                  ></vue-loaders>
                  <div class="py-2 text-red-800" v-else>Authenticate</div>
                </button>
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
          <span>Unable to login? Contact Us</span>
          <span>wow.co.na | +264 81 455 5528</span>
        </div>
      </div>

      <div id="enter_otp" style="display: none">
        <form>
          <span>OTP has been sent to {{ this.phone_number }}</span>

          <div style="margin-top: 50px">
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

          <div style="margin: 50px 0" class="flex items-center justify-between">
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

export default {
  name: "LoginProcess",
  setup() {
    // Get toast interface
    const toast = useToast();

    // Make it available inside methods
    return { toast };
  },

  data() {
    return {
      active: false,
      username: "",
      password: "",
      phone_number: "",
      otp: 0,
    };
  },
  methods: {
    showDiv() {
      document.getElementById("enter_otp").style.display = "block";
      document.getElementById("enter_credentials").style.display = "none";
    },
    reloadPage() {
      window.location.reload();
    },
    async login() {
      //alert('het');
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
          console.log(data);
          return data.verifyOtp;
        })
        .then(({ username , token , status, message }) => {
          this.isLoading = false;
          if (status) {
            localStorage.setItem("username", username);
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
