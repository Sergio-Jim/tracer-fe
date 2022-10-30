<template>
  <main>
    <div style="margin: 50px">
      <div id="enter_credentials">
        <form>
          <div style="margin-top: 5px">
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
              type="email"
              v-model="email"
              placeholder="Email"
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
              type="companyName"
              v-model="companyName"
              placeholder="Company Name"
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
              type="phoneNumber"
              v-model="phoneNumber"
              placeholder="Phone Number"
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

          <div style="margin-top: 5px">
            <input
              type="retypePassword"
              v-model="password"
              placeholder="Retype-Password"
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

          <div style="margin-top: 5px" class="flex items-center justify-center">
            <div style="margin: 5px 0" class="flex items-center justify-center">
              <button
                class="
                  bg-tracergrey
                  transition-color
                  duration-700
                  hover:bg-tracergray
                  border border-black
                  text-black
                  px-4
                  rounded-lg
                  w-full
                "
                v-on:click="createUser"
                style="height: 40px"
                type="button"

              >
                <vue-loaders
                  v-if="this.isLoading"
                  name="line-scale"
                  color="black"
                  scale="0.5"
                ></vue-loaders>
                <div class="py-2" v-else>Register User</div>
              </button>
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
            margin: 5px 0;
            cursor: pointer;
          "
        >
          <router-link to="/login">
            <span>Already a Registered</span>
          </router-link>
          <span>wow.co.na | +264 81 455 5528</span>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import gql from "graphql-tag";
import { useToast } from "vue-toastification";

export default {
  name: "RegistrationProcess",
  setup() {
    // Get toast interface
    const toast = useToast();

    // Make it available inside methods
    return { toast };
  },

  data() {
    return {
      isLoading: false,
      username: "",
      email: "",
      password: "",
      companyName: "",
      phoneNumber: "",
    };
  },
  methods: {
   async createUser() {
    const PNF = require('google-libphonenumber').PhoneNumberFormat;
    const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
    const number = phoneUtil.parseAndKeepRawInput( this.phoneNumber, 'NA');
    this.isLoading = true;
      this.$apollo
        .mutate({
          // Query
          mutation: gql`
            mutation createUser(
                       $username: String!,
                       $email: String!,
                       $company_name:  String!
                       $phone_number: String!
                    ) {
                      createUser(
                      username: $username,
                      email: $email,
                      company_name: $company_name,
                      phone_number: $phone_number,
                    ) 
                  }
          `,
          // Parameters
          variables: {
              username: this.username,
              email: this.email,
              company_name: this.companyName,
              phone_number: `+${number.getCountryCode()}${number.getNationalNumber()}`
          },
        })
        .then(({ data }) => {
          return data.createUser;
        })
        .then(({ message }) => {
          this.toast.success( this.username + " created succesfully.");
          this.$router.push("/login");
          
        })
        .catch((err) => {
          this.isLoading = false;
          this.toast.error( "Oops! network error refresh page and try again.");
        });

   }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
