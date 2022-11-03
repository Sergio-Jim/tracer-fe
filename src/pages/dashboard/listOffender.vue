<template>
  <div style="padding: 20px 30px; height: 100%; overflow-y: scroll">
    <div style="display: flex; flex-direction: row; justify-content: center">
      <div style="display: flex; flex-direction: row">
        <span style="padding: 10px; font-size: xx-large">List Offender</span>
      </div>
    </div>

    <div style="display: flex; flex-direction: column; align-items: center">
      <div
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 2px solid;
        "
      >
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 50px;
          "
        >
          <div style="font-size: 20px; margin: 20px 0">Offender Profile</div>
          <form action="">
            <!-- client info -->
            <div style="display: flex; flex-direction: row">
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  border: 2px solid;
                  width: 150px;
                  height: 150px;
                  justify-content: space-between;
                  align-items: center;
                "
                onclick="document.getElementById('files_profile_picture').click()"
                @mouseover="showText = 1"
                @mouseleave="showText = 0"
              >
                <img
                  :src="picture"
                  alt="user"
                  style="height: 150px; width: 150px"
                />
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    border: 1px solid;
                    border-radius: 5px;
                    background-color: gray;
                  "
                >
                  <span
                    style="
                      display: flex;
                      flex-direction: column;
                      color: white;
                      font-size: 10px;
                      cursor: pointer;
                    "
                    v-if="showText === 1"
                    >Upload Profile Picture</span
                  >
                  <input
                    type="file"
                    id="files_profile_picture"
                    class="hidden"
                    @change="uploadPhoto"
                  />
                </div>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                "
              >
                <div style="display: flex; flex-direction: row">
                  <div
                    :class="{ error: v$.fullName.$errors.length }"
                    class="py-1 px-3 mb-1 ml-3"
                  >
                    <input
                      type="text"
                      v-model="fullName"
                      placeholder="FULL NAME"
                      class="
                        shadow
                        appearance-none
                        w-56
                        text-gray-700
                        leading-tight
                        text-xs
                      "
                    />
                    <div
                      class="input-errors text-sm px-1"
                      v-for="error of v$.fullName.$errors"
                      :key="error.$uid"
                    >
                      <div class="error-msg">Full names required</div>
                    </div>
                  </div>
                </div>

                <div style="display: flex; flex-direction: row">
                  <div
                    :class="{ error: v$.idNumber.$errors.length }"
                    class="py-1 px-3 mb-1 ml-3"
                  >
                    <input
                      type="text"
                      v-model="idNumber"
                      placeholder="ID NUMBER"
                      class="
                        shadow
                        appearance-none
                        w-56
                        text-gray-700
                        leading-tight
                        text-xs
                      "
                    />
                    <div
                      class="input-errors text-sm px-1"
                      v-for="error of v$.idNumber.$errors"
                      :key="error.$uid"
                    >
                      <div class="error-msg">ID Number required</div>
                    </div>
                  </div>
                </div>

                <div style="display: flex; flex-direction: row">
                  <div
                    :class="{ error: v$.idNumber.$errors.length }"
                    class="py-1 px-3 mb-1 ml-3"
                  >
                    <input
                      type="text"
                      v-model="drivingLicenseNo"
                      placeholder="DRIVING LICENSE NUMBER"
                      class="
                        shadow
                        appearance-none
                        w-56
                        text-gray-700
                        leading-tight
                        text-xs
                      "
                    />
                    <div
                      class="input-errors text-sm px-1"
                      v-for="error of v$.drivingLicenseNo.$errors"
                      :key="error.$uid"
                    >
                      <div class="error-msg">
                        Drivers License Number required
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- offense -->
            <div style="display: flex; flex-direction: column; margin: 20px 0">
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                "
              >
                <span style="margin-bottom: 10px">Offense</span>
              </div>

              <div
                style="display: flex; flex-direction: column; margin: 10px 0"
              >
                <div style="display: flex; flex-direction: row">
                  <label
                    for="is_overspeeding"
                    class="block text-gray-500 font-bold"
                  >
                    <input
                      class="mr-2"
                      type="checkbox"
                      id="is_overspeeding"
                      name="is_overspeeding"
                      v-model="is_overspeeding"
                      value="overspeeding"
                      v-on:click="clearOverspeedingComment"
                    />
                    <span class="text-sm">OVERSPEEDING</span>
                  </label>
                </div>

                <input
                  :disabled="!is_overspeeding"
                  type="text"
                  v-model="overspeeding_comments"
                  placeholder="Comments"
                  class="
                    shadow
                    appearance-none
                    w-full
                    py-2
                    px-3
                    text-gray-700
                    mb-3
                    leading-tight
                    text-xs
                  "
                />
              </div>

              <div
                style="display: flex; flex-direction: column; margin: 10px 0"
              >
                <div style="display: flex; flex-direction: row">
                  <label
                    for="is_mismangement"
                    class="block text-gray-500 font-bold"
                  >
                    <input
                      class="mr-2"
                      type="checkbox"
                      id="is_mismangement"
                      name="is_mismangement"
                      v-model="is_mismangement"
                      value="mismangement"
                      v-on:click="clearMismanageComment"
                    />
                    <span class="text-sm">MISMANAGEMENT OF VEHICLE</span>
                  </label>
                </div>

                <input
                  :disabled="!is_mismangement"
                  type="text"
                  v-model="mismangement_comments"
                  placeholder="Comments"
                  class="
                    shadow
                    appearance-none
                    w-full
                    py-2
                    px-3
                    text-gray-700
                    mb-3
                    leading-tight
                    text-xs
                  "
                />
              </div>

              <div
                style="display: flex; flex-direction: column; margin: 10px 0"
              >
                <div style="display: flex; flex-direction: row">
                  <label
                    for="is_unlawful"
                    class="block text-gray-500 font-bold"
                  >
                    <input
                      class="mr-2"
                      type="checkbox"
                      id="is_unlawful"
                      name="is_unlawful"
                      v-model="is_unlawful"
                      value="unlawful"
                      v-on:click="clearUnlawfulComment"
                    />
                    <span class="text-sm">UNLAWFUL USE OF VEHICLE</span>
                  </label>
                </div>

                <input
                  :disabled="!is_unlawful"
                  type="text"
                  v-model="unlawfulness_comments"
                  placeholder="Comments"
                  class="
                    shadow
                    appearance-none
                    w-full
                    py-2
                    px-3
                    text-gray-700
                    mb-3
                    leading-tight
                    text-xs
                  "
                />
              </div>

              <!-- approximate date of offence -->
              <div>
                <span class="text-xs">APPROXIMATE DATE OF OFFENSE</span>
                <div style="display: flex; flex-direction: row">
                  <div :class="{ error: v$.dateValue.$errors.length }">
                    <div class="w-full">
                      <litepie-datepicker
                        :formatter="formatter"
                        :auto-apply="false"
                        as-single
                        v-model="dateValue"
                        :disable-date="disableDate"
                      ></litepie-datepicker>
                      <div
                        class="input-errors text-sm px-2"
                        v-for="error of v$.dateValue.$errors"
                        :key="error.$uid"
                      >
                        <div class="error-msg">Date Required</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Documents -->
            <div style="display: flex; flex-direction: column; margin: 20px 0">
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                "
              >
                <span style="margin-bottom: 10px">Documents</span>
              </div>

              <div style="display: flex; flex-direction: column">
                <div style="display: flex; flex-direction: row">
                  <div
                    style="
                      display: flex;
                      flex-direction: column;
                      margin: 0 20px;
                    "
                  >
                    <span class="text-xs">ID COPY | DRIVERS LICENSE</span>
                    <span class="text-xs">OTHER DOCUMENTS</span>
                  </div>
                  <div style="display: flex; flex-direction: column">
                    <div class="flex items-center justify-between">
                      <button
                        class="
                          transition-color
                          duration-700
                          transform
                          hover:bg-tracergrey
                          border border-black
                          text-black
                          px-4
                          w-full
                        "
                        style="height: 40px"
                        type="button"
                        onclick="document.getElementById('files').click()"
                      >
                        <div class="text-xs">
                          <input
                            type="file"
                            id="files"
                            class="hidden"
                            @change="uploadDocument"
                          />
                          UPLOAD DOCUMENTS
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- upload button -->
            <div
              :style="{
                margin: '10px 0',
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
                <button
                  style="height: 40px"
                  v-on:click="sendOtp"
                  type="button"
                >
                  <vue-loaders
                    v-if="this.isLoading"
                    name="ball-clip-rotate-pulse"
                    color="red"
                    scale="1"
                  ></vue-loaders>
                  <div class="py-2 text-red-800" v-else>LIST CLIENT</div>
                </button>
              </div>
            </div>
          </form>
          <div>
            <span style="font-size: 10px"
              >BY LISTING THE CLIENT, YOU AGREE THAT ALL THE INFORMATION
              PROVIDED IS TRUE</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <otpmodal v-bind:showModal="showModal" @hide-modal="showModal = false" />
</template>

<script>
import { ref } from "vue";
import gql from "graphql-tag";
import { useToast } from "vue-toastification";
import LitepieDatepicker from "litepie-datepicker";
import otpmodal from "@/components/otpmodal.vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  name: "ListOffender",
  data() {
    return {
      isLoading: false,
      showText: 0,
      showModal: false,
      fullName: "",
      idNumber: "",
      drivingLicenseNo: "",
      is_overspeeding: "",
      overspeeding_comments: "",
      is_mismangement: "",
      mismangement_comments: "",
      is_unlawful: "",
      unlawfulness_comments: "",
      picture:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
      documents: [],
      profile_picture: [],
    };
  },
  components: {
    LitepieDatepicker,
    otpmodal,
  },
  setup() {
    const toast = useToast();

    const dateValue = ref([]);
    const formatter = ref({
      date: "DD MMMM YYYY",
      month: "MMMM",
    });
    const disableDate = (date) => {
      return date > new Date();
    };

    return {
      dateValue,
      formatter,
      toast,
      disableDate,
      v$: useVuelidate(),
    };
  },
  methods: {
    async createClient() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
      this.isLoading = true;
      this.$apollo
        .mutate({
          // Query
          mutation: gql`
            mutation createOffence(
              $fullname: String!
              $idnumber: String!
              $profile_picture: Upload!
              $driving_licence_number: String!
              $offenses: [offense]
              $documents: [document]
            ) {
              createOffence(
                fullname: $fullname
                idnumber: $idnumber
                profile_picture: $profile_picture
                driving_licence_number: $driving_licence_number
                offenses: $offenses
                documents: $documents
              )
            }
          `,
          // Parameters
          variables: {
            fullname: this.fullName,
            idnumber: this.idNumber,
            profile_picture: this.profile_picture[0],
            driving_licence_number: this.drivingLicenseNo,
            offenses: [
              {
                date_of_offense: this.dateValue[0],
                offense_type: "overspeeding",
                comment: this.overspeeding_comments,
              },
              {
                date_of_offense: this.dateValue[0],
                offense_type: "mismanagement",
                comment: this.mismangement_comments,
              },
              {
                date_of_offense: this.dateValue[0],
                offense_type: "unlawfulness",
                comment: this.unlawfulness_comments,
              },
            ],
            documents: this.documents,
          },
        })
        .then(({ data }) => {
          this.toast.success(this.fullName + " created succesfully.");
          this.$router.push("/dashboard/search");
          return data.createOffence;
        })
        .catch((err) => {
          this.isLoading = false;
          this.toast.error("Oops! network error refresh page and try again.");
        });
    },
    async sendOtp() {
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
        this.showModal = true;
        this.toast.success(
          "OTP sent to " + localStorage.getItem("phone_number"),
          {
            timeout: 2000,
          }
        );
      })
      .catch((err) => {
        this.isLoading = false;
        this.toast.error(err.message || "Something went wrong", {
          timeout: 2000,
        });
      });
    },
    async uploadDocument({ target }) {
      this.documents.push({ file: target.files[0] });
    },
    async uploadPhoto({ target }) {
      this.picture = URL.createObjectURL(target.files[0]);
      this.profile_picture.push(target.files[0]);
    },
    clearOverspeedingComment() {
      this.overspeeding_comments = "";
    },
    clearMismanageComment() {
      this.mismangement_comments = "";
    },
    clearUnlawfulComment() {
      this.unlawfulness_comments = "";
    },
  },
  validations() {
    return {
      fullName: {
        required,
      },
      idNumber: {
        required,
      },
      drivingLicenseNo: {
        required,
      },
      dateValue: {
        required,
      },
    };
  },
};
</script>

<style scoped>
</style>
