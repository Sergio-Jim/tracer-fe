<template>
  <div
    class="flex lg:flex-row md:flex-col sm:flex flex-col"
    :style="{
      height: '100vh',
      width: '100%',
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
        height: 90vh;
        width: 100%;
        align-items: center;
        overflow-y: scroll;
      "
    >
      <div
        class="mb-24 flex justify-center"
        style="flex-grow: 1; display: flex; flex-direction: column"
      >
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 30px;
          "
        >
          <img
            src="../assets/TRACER_LOGO.png"
            alt="tracer-logo"
            style="max-width: 60%"
          />
          <div style="margin-top: 10px; display: flex">
            <span
              class="text-center justify-center"
              style="font-size: 15px; letter-spacing: 5pt"
              >CREATING SAFE BUSINESS ENVIRONMENTS</span
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="mb-52"
      style="display: flex; flex-direction: column; width: 100%; height: 100vh"
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