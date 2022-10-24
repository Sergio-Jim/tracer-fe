<template>
  <main>
    <div style="margin: 50px">
      <div id="enter_credentials">
        <form>
          <div style="margin-top: 50px">
            <input type="text" v-model="username" placeholder="Username" />
          </div>

          <div style="margin-top: 50px">
            <input type="password" v-model="password" placeholder="Password" />
          </div>

          <div
            style="margin-top: 50px"
            class="flex items-center justify-between border-2"
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
                <button style="height: 40px" v-on:click="showDiv" type="button">
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
            margin: 50px 0;
          "
        >
          <span>Unable to login? Contact Us</span>
          <span>wow.co.na | +264 81 455 5528</span>
        </div>
      </div>

      <div id="enter_otp" style="display: none">
        <form>
          <div style="margin-top: 50px">
            <input type="text" v-model="otp" placeholder="OTP" />
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
              v-on:click="login"
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
export default {
  name: "LoginProcess",
  data() {
    return {
      active: false,
      email: "",
      password: "",
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
      this.$router.push("/dashboard");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
