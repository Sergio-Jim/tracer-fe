<template>
  <div
    :style="{
      height: '100%',
      width: '100%',
      display: 'flex',
      'flex-direction': `row`,
      'background-image': `url(${require('@/assets/ELEMENT3.png')})`,
      'background-repeat': `no-repeat`,
      'background-position': `left bottom`,
    }"
  >
    <div
      style="
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 100%;
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
        style="
          height: 100%;
          width: 100%;
          display: flex;
          background-position: center left;
        "
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
              border: 2px solid;
              border-color: #c9c9c9;
              border-radius: 20px;
            "
          >
            <login-process />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginProcess from "../components/loginProcess.vue";

export default {
  name: "Login",
  components: {
    LoginProcess,
  },
};
</script>