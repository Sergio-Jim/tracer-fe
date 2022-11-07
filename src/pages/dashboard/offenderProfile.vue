<template>
  <div style="height: 100%">
    <div style="display: flex; flex-direction: row; justify-content: center">
      <div
        style="
          flex-grow: 1;
          display: flex;
          flex-direction: row;
          margin: 10px;
          justify-content: space-between;
        "
      >
        <img
          style="width: 68px; height: 48px; cursor: pointer"
          src="@/assets/back-button.svg"
          alt=""
          onclick="history.back()"
        />
        <div style="display: flex; flex-direction: column; align-items: center">
          <img
            src="@/assets/TRACER_LOGO_ICON.png"
            alt=""
            style="width: 50px; height: 50px"
          />
          <span>TRACER</span>
        </div>
      </div>
    </div>

    <div style="display: flex; flex-direction: column; align-items: center">
      <div
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 2px solid;
          margin-bottom: 20px;
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
                  background-color: #c9c9c9;
                  justify-content: space-between;
                  align-items: center;
                "
                @mouseover="showText = 1"
                @mouseleave="showText = 0"
              >
                <img
                  :src="profile_picture"
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
                      oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');"
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
                      oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');"
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
                  <div :class="{ error: v$.date.$errors.length }">
                    <div class="w-full">
                      <input type="date" v-model="date" />
                      <div
                        class="input-errors text-sm px-2"
                        v-for="error of v$.date.$errors"
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
              <div style="display: flex; flex-direction: column">
                <div
                  style="
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                  "
                >
                  <span
                    class="cursor-pointer"
                    v-on:click="viewModal = !viewModal"
                    >View Documents</span
                  >
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
                <button style="height: 40px" v-on:click="sendOtp" type="button">
                  <vue-loaders
                    v-if="this.isLoading"
                    name="ball-clip-rotate-pulse"
                    color="red"
                    scale="1"
                  ></vue-loaders>
                  <div class="py-2 text-red-800" v-else>EDIT CLIENT</div>
                </button>
              </div>
            </div>
          </form>
          <div>
            <span style="font-size: 10px"
              >BY EDITING THE CLIENT, YOU AGREE THAT ALL THE INFORMATION
              PROVIDED IS TRUE</span
            >
          </div>
          <div>
            <span style="font-size: 10px">Last Edit By: {{ username }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <viewDocuments
    v-bind:fullName="fullName"
    v-bind:document="document"
    v-bind:viewModal="viewModal"
    @hide-modal="viewModal = false"
  />
  <otpmodal
    v-bind:type="type"
    v-bind:showModal="showModal"
    @hide-modal="showModal = false"
  />
</template>

<script>
import { ref } from "vue";
import gql from "graphql-tag";
import { useToast } from "vue-toastification";
import ViewDocuments from "@/components/viewDocuments.vue";
import otpmodal from "@/components/otpmodal.vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  name: "ClientProfile",

  data() {
    return {
      isLoading: false,
      showText: 0,
      viewModal: false,
      showModal: false,
      type: "update",
      fullName: "",
      idNumber: "",
      username: "",
      drivingLicenseNo: "",
      is_overspeeding: "",
      overspeeding_comments: "",
      is_mismangement: "",
      mismangement_comments: "",
      is_unlawful: "",
      unlawfulness_comments: "",
      idoffense: [],
      date: "",
      profile_picture: "",
      document: [],
    };
  },
  components: {
    // LitepieDatepicker,
    ViewDocuments,
    otpmodal,
  },
  setup() {
    // Get toast interface
    const toast = useToast();

    var date = ref([]);
    var formatter = ref({
      date: "DD MMMM YYYY",
      month: "MMMM",
    });
    const disableDate = (date) => {
      return date > new Date();
    };

    return {
      formatter,
      toast,
      disableDate,
      v$: useVuelidate(),
    };
  },
  created() {
    this.$apollo
      .query({
        // Query
        query: gql`
          query getOffenseUpdateUser($id: String) {
            getOffenseUpdateUser(id: $id) {
              client_id
              user {
                username
              }
            }
          }
        `,
        // Parameters
        variables: {
          id: this.$route.query.id,
        },
      })
      .then(({ data }) => {
        this.isLoading = false;
        var user = data.getOffenseUpdateUser;
        this.username =
          user.user.username != null ? user.user.username : "no user";
      })
      .catch((err) => {
        this.isLoading = false;
        this.toast.error(err + "Oops! network error ", {
          timeout: 2000,
        });
      });
    this.$apollo
      .query({
        // Query
        query: gql`
          query getOffenseById($id: String) {
            getOffenseById(id: $id) {
              fullname
              idnumber
              profile_picture
              driving_licence_number
              offense {
                idoffense
                date_of_offense
                offense_type
                comment
              }
              documents {
                document_name
                created
              }
            }
          }
        `,
        // Parameters
        variables: {
          id: this.$route.query.id,
        },
      })
      .then(({ data }) => {
        this.isLoading = false;
        var client = data.getOffenseById;
        this.fullName = client.fullname;
        this.idNumber = client.idnumber;
        this.profile_picture = client.profile_picture;
        this.drivingLicenseNo = client.driving_licence_number;
        this.date =
          client.offense[0].date_of_offense != null
            ? client.offense[0].date_of_offense
            : this.date;
        this.document = client.documents;

        client.offense.map((offense) => {
          this.idoffense.push(offense.idoffense);

          if (offense.comment !== "") {
            if (offense.offense_type === "overspeeding") {
              this.is_overspeeding = true;
              this.overspeeding_comments = offense.comment;
            }

            if (offense.offense_type === "mismanagement") {
              this.is_mismangement = true;
              this.mismangement_comments = offense.comment;
            }

            if (offense.offense_type === "unlawfulness") {
              this.is_unlawful = true;
              this.unlawfulness_comments = offense.comment;
            }
          }
        });
      })
      .catch((err) => {
        this.isLoading = false;
        this.toast.error("Oops! network error ", {
          timeout: 2000,
        });
      });
  },
  methods: {
    async updateClient() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
      this.isLoading = true;
      this.$apollo
        .mutate({
          // Query
          mutation: gql`
            mutation updateOffence(
              $idclients: String!
              $fullname: String!
              $idnumber: String!
              $profile_picture: String!
              $driving_licence_number: String!
              $offenses: [offense]
              $documents: [document]
            ) {
              updateOffence(
                fullname: $fullname
                idnumber: $idnumber
                profile_picture: $profile_picture
                driving_licence_number: $driving_licence_number
                offenses: $offenses
                documents: $documents
                idclients: $idclients
              )
            }
          `,
          // Parameters
          variables: {
            idclients: this.$route.query.id,
            fullname: this.fullName,
            idnumber: this.idNumber,
            profile_picture: "",
            driving_licence_number: this.drivingLicenseNo,
            offenses: [
              {
                idoffense: this.idoffense[0],
                date_of_offense: this.date[0],
                offense_type: "overspeeding",
                comment: this.overspeeding_comments,
              },
              {
                idoffense: this.idoffense[1],
                date_of_offense: this.date[0],
                offense_type: "mismanagement",
                comment: this.mismangement_comments,
              },
              {
                idoffense: this.idoffense[2],
                date_of_offense: this.date[0],
                offense_type: "unlawfulness",
                comment: this.unlawfulness_comments,
              },
            ],
            documents: this.documents,
          },
        })
        .then(({ data }) => {
          return data.updateOffence;
        })
        .then((res) => {
          this.toast.success(`${this.fullName} updated succesfully`, {
            timeout: 2000,
          });
          location.reload();
        })
        .catch((err) => {
          this.isLoading = false;
          this.toast.error(
            err + "Oops! network error refresh page and try again."
          );
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
      date: {
        required,
      },
    };
  },
};
</script>

<style scoped>
</style>
