<template>
  <div style="display: flex; height: 100vh">
    <div
      style="
        min-width: 25%;
        background-color: #c9c9c9;
        display: flex;
        flex-direction: column;
        padding: 40px;
        box-sizing: border-box;
      "
    >
      <div>
        <div style="text-align: center">
          <img
            src="../assets/tracer_logo_sm.png"
            style="height: 100%; width: 200px"
          />
        </div>
      </div>

      <div
        style="
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        "
      >
        <ul>
          <li style="">
            <router-link
              to="/dashboard/"
              v-bind:style="{
                fontWeight: this.$route.path === '/Home' ? 'bolder' : '',
              }"
              ><div style="display: flex; flex-direction: row">
                <span style="padding: 10px">Home</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link
              to="/dashboard/listClient"
              v-bind:style="{
                fontWeight:
                  this.$route.path === '/dashboard/listClient' ? 'bolder' : '',
              }"
              ><div style="display: flex; flex-direction: row">
                <span style="padding: 10px">List Client</span>
              </div></router-link
            >
          </li>
          <li>
            <router-link
              to="/dashboard/search"
              v-bind:style="{
                fontWeight:
                  this.$route.path === '/dashboard/search' ? 'bolder' : '',
              }"
              ><div style="display: flex; flex-direction: row">
                <span style="padding: 10px">Search</span>
              </div></router-link
            >
          </li>
          <li>
            <router-link
              to="/dashboard/reports"
              v-bind:style="{
                fontWeight:
                  this.$route.path === '/dashboard/reports' ? 'bolder' : '',
              }"
              ><div style="display: flex; flex-direction: row">
                <span style="padding: 10px">Reports</span>
              </div></router-link
            >
          </li>
        </ul>
      </div>
      <div></div>

      <div style="display: flex; margin-top: 20px; margin-bottom: 50px">
        <div
          style="
            height: 40px;
            width: 40px;
            border-radius: 100%;
            cursor: pointer;
          "
          v-on:click="this.$router.push('/login')"
        >
          <img src="@/assets/logout.svg" alt="" />
        </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 10px;
          "
        >
          <h4>username232</h4>
          <h4 style="cursor: pointer" v-on:click="this.$router.push('/login')">
            Log out
          </h4>
        </div>
      </div>
    </div>

    <div style="box-sizing: border-box; flex-grow: 1">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Launchpad",
};
</script>

<style scoped>
</style>
