<template>
  <div style="padding: 20px 30px; height: 100%; overflow-y: scroll">
    <div style="display: flex; flex-direction: row; justify-content: center">
      <div style="display: flex; flex-direction: row">
        <span style="padding: 10px; font-size: xx-large">List Client</span>
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
                  width: 200px;
                  height: 200px;
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
                  style="height: 100px; width: 100px; margin: 30px"
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
                    style="display: flex; flex-direction: column; color: white"
                    v-if="showText === 1"
                    >Upload Profile Picture</span
                  >
                </div>
              </div>
              <div style="display: flex; flex-direction: column; margin: 10px">
                <div style="display: flex; flex-direction: row">
                  <input
                    type="text"
                    v-model="fullName"
                    placeholder="FULL NAME"
                  />
                </div>

                <div style="display: flex; flex-direction: row">
                  <input
                    type="text"
                    v-model="idNumber"
                    placeholder="ID NUMBER"
                  />
                </div>

                <div style="display: flex; flex-direction: row">
                  <input
                    type="text"
                    v-model="drivingLicenseNo"
                    placeholder="DRIVING LICENSE NUMBER"
                  />
                </div>
              </div>
            </div>

            <!-- offense -->
            <div style="display: flex; flex-direction: column">
              <span>Offense</span>

              <div style="display: flex; flex-direction: column">
                <div style="display: flex; flex-direction: row">
                  <input
                    type="checkbox"
                    id="is_overspeeding"
                    name="is_overspeeding"
                    value="overspeeding"
                  />
                  <label for="is_overspeeding"> OVERSPEEDING</label>
                </div>

                <input
                  type="text"
                  v-model="overspeeding_comments"
                  placeholder="Comments"
                />
              </div>

              <div style="display: flex; flex-direction: column">
                <div style="display: flex; flex-direction: row">
                  <input
                    type="checkbox"
                    id="is_mismangement"
                    name="is_mismangement"
                    value="mismangement"
                  />
                  <label for="is_mismangement"> MISMANAGEMENT OF VEHICLE</label>
                </div>

                <input
                  type="text"
                  v-model="mismangement_comments"
                  placeholder="Comments"
                />
              </div>

              <div style="display: flex; flex-direction: column">
                <div style="display: flex; flex-direction: row">
                  <input
                    type="checkbox"
                    id="is_unlawful"
                    name="is_unlawful"
                    value="unlawful"
                  />
                  <label for="is_unlawful"> UNLAWFUL USE OF VEHICLE</label>
                </div>

                <input
                  type="text"
                  v-model="unlawfulness_comments"
                  placeholder="Comments"
                />
              </div>

              <!-- approximate date of offence -->
              <div>
                <span>APPROxIMATE DATE OF OFFENSE</span>
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
            <div style="display: flex; flex-direction: column">
              <span>Documents</span>

              <div style="display: flex; flex-direction: column">
                <div style="display: flex; flex-direction: row">
                  <div style="display: flex; flex-direction: column">
                    <span>ID COPY | DRIVERS LICENSE</span>
                    <span>OTHER DOCUMENTS</span>
                  </div>
                  <div style="display: flex; flex-direction: column">
                    <div class="flex items-center justify-between">
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
                        v-on:click="uploadDocs"
                        type="button"
                      >
                        <div>UPLOAD DOCUMENTS</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import LitepieDatepicker from "litepie-datepicker";

export default {
  name: "ListClient",
  data() {
    return {
      showText: 0,
    };
  },
  components: {
    LitepieDatepicker,
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
