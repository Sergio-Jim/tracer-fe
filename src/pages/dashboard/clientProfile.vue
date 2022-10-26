<template>
  <div style="padding: 20px 30px; height: 100%; overflow-y: scroll">
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
          <div style="font-size: 20px; margin: 20px 0">Client Profile</div>
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
                  src="@/assets/user-100.png"
                  alt="user"
                  style="height: 70px; width: 100px; margin: 30px"
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
                  <input
                    type="text"
                    v-model="fullName"
                    placeholder="FULL NAME"
                    class="
                      shadow
                      appearance-none
                      w-56
                      py-2
                      px-3
                      text-gray-700
                      mb-3
                      ml-3
                      leading-tight
                      text-xs
                    "
                  />
                </div>

                <div style="display: flex; flex-direction: row">
                  <input
                    type="text"
                    v-model="idNumber"
                    placeholder="ID NUMBER"
                    class="
                      shadow
                      appearance-none
                      w-56
                      py-2
                      px-3
                      text-gray-700
                      mb-3
                      ml-3
                      leading-tight
                      text-xs
                    "
                  />
                </div>

                <div style="display: flex; flex-direction: row">
                  <input
                    type="text"
                    v-model="drivingLicenseNo"
                    placeholder="DRIVING LICENSE NUMBER"
                    class="
                      shadow
                      appearance-none
                      w-56
                      py-2
                      px-3
                      text-gray-700
                      mb-3
                      ml-3
                      leading-tight
                      text-xs
                    "
                  />
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
                      class="mr-2 leading-tight"
                      type="checkbox"
                      id="is_overspeeding"
                      name="is_overspeeding"
                      value="overspeeding"
                    />
                    <span class="text-sm">OVERSPEEDING</span>
                  </label>
                </div>

                <input
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
                      class="mr-2 leading-tight"
                      type="checkbox"
                      id="is_mismangement"
                      name="is_mismangement"
                      value="mismangement"
                    />
                    <span class="text-sm">MISMANAGEMENT OF VEHICLE</span>
                  </label>
                </div>

                <input
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
                      class="mr-2 leading-tight"
                      type="checkbox"
                      id="is_unlawful"
                      name="is_unlawful"
                      value="unlawful"
                    />
                    <span class="text-sm">UNLAWFUL USE OF VEHICLE</span>
                  </label>
                </div>

                <input
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
                  <div class="w-3/5">
                    <litepie-datepicker
                      :formatter="formatter"
                      :auto-apply="false"
                      as-single
                      v-model="dateValue"
                    ></litepie-datepicker>
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
                <button
                  style="height: 40px"
                  v-on:click="viewModal = !viewModal"
                  type="button"
                >
                  <vue-loaders
                    v-if="this.isLoading"
                    name="line-scale"
                    color="black"
                    scale="0.5"
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
            <span style="font-size: 10px">Last Edit By: username232</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <viewDocuments v-bind:viewModal="viewModal" @hide-modal="viewModal = false" />
</template>

<script>
import { ref } from "vue";
import LitepieDatepicker from "litepie-datepicker";
import ViewDocuments from "@/components/viewDocuments.vue";

export default {
  name: "ClientProfile",
  data() {
    return {
      showText: 0,
      viewModal: false,
    };
  },
  components: {
    LitepieDatepicker,
    ViewDocuments,
  },
  setup() {
    const dateValue = ref([]);
    const formatter = ref({
      date: "DD MMMM YYYY",
      month: "MMMM",
    });

    return {
      dateValue,
      formatter,
    };
  },
};
</script>

<style scoped>
</style>
