<template>
  <div style="display: flex; flex-direction: row; height: 100%; width: 100%">
    <div
      style="
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 100%;
        background-color: #c9c9c9;
        align-items: center;
      "
    >
      <div style="flex-grow: 1; display: flex; flex-direction: column">
        <div style="display: flex; flex-direction: column; align-items: center">
          <img
            src="../assets/TRACER_LOGO.png"
            alt="tracer-logo"
            style="max-width: 60%"
          />
          <div style="margin-top: 10px">
            <span style="font-size: 20px"
              >CLIENT TRACING & REPORTING SYSTEM</span
            >
          </div>
        </div>
      </div>
    </div>
    <div
      style="display: flex; flex-direction: column; width: 100%; height: 100%"
    >
      <div
        :style="{
          height: '100%',
          width: '100%',
          display: 'flex',
          'background-image': `url(${require('@/assets/finger.png')})`,
          'background-repeat': `no-repeat`,
          'background-position': `center left`,
        }"
      >
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
          "
        >
          <div
            style="
              display: flex;
              flex-direction: column;
              align-items: center;
              border: 4px solid;
              border-radius: 20px;
            "
          >
            <registration-process />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import registrationProcess from "../components/registrationProcess.vue";

export default {
  name: "registration",
  components: {
    registrationProcess,
  },
};
</script>