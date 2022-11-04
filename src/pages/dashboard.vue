<template>
  <div
  
    :style="{
      height: '100vh',
      display: 'flex',
      'flex-direction': `column`,
      'background-image': `url(${require('@/assets/ELEMENT2.png')})`,
      'background-repeat': `no-repeat`,
      'background-position': `left bottom`,
    }"
  >
    <div style="display: flex; flex-direction: row; height: 100%">
      <div
        style="
          min-width: 20%;
          display: flex;
          flex-direction: column;
          padding: 20px;
          box-sizing: border-box;
          justify-content: center;
        "
      >
        <div
          class= "invisible lg:visible " 
          style="
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            border-right: 2px solid;
            border-color: red;
            margin: 80px 0;
            height: 100%;
          "
        >
          <ul>
            <li style="margin: 20px">
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
            <li style="margin: 20px">
              <router-link
                to="/dashboard/listOffender"
                v-bind:style="{
                  fontWeight:
                    this.$route.path === '/dashboard/listOffender'
                      ? 'bolder'
                      : '',
                }"
                ><div style="display: flex; flex-direction: row">
                  <span style="padding: 10px">List Offender</span>
                </div></router-link
              >
            </li>
            <li style="margin: 20px">
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
          </ul>
        </div>

        <div style="display: flex; margin: 20px 20px">
          <div
            style="
              height: 26px;
              width: 26px;
              border-radius: 100%;
              cursor: pointer;
              display: flex;
              flex-direction: column;
              align-items: center;
            "
            v-on:click="logout"
          >
            <img src="@/assets/padlock.png" alt="" />
            <h4 style="cursor: pointer; font-size: 15px" v-on:click="logout">
              LOCK
            </h4>
          </div>
          <div
            style="
              display: flex;
              flex-direction: column;
              justify-content: center;
              height: 100%;
              margin-left: 50px;
              max-width: 300px;
            "
          >
            <h4>{{ username }}</h4>
          </div>
        </div>
      </div>

      <div style="box-sizing: border-box; flex-grow: 1">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Launchpad",
  data() {
    return {
      username: localStorage.getItem("username"),
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      location.reload();
    },
  },
};
</script>

<style scoped>
</style>
