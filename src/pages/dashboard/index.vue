<template>
  <div
    style="
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px 30px;
    "
  >
    <div
      style="
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 50px 0;
      "
    >
      <h3 style="font-size: 15px; font-weight: bold">
        WHAT DO YOU WANT TO DO TODAY?
      </h3>
    </div>
    <div class="link-group">
      <div class="button">
        <router-link to="/dashboard/listclient">
          <div class="link-item active">
            <span class="link-text">LIST CLIENT</span>
          </div>
        </router-link>
      </div>

      <div class="button">
        <router-link to="/dashboard/search">
          <div class="link-item active">
            <span class="link-text">SEARCH</span>
          </div>
        </router-link>
      </div>

      <div class="button">
        <router-link to="/dashboard/reports">
          <div class="link-item active">
            <span class="link-text">REPORTS</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardHome",
};
</script>

<style scoped>
.link-icon {
  width: 120px;
  height: 120px;
}

.link-item {
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 40px;
  width: 200px;
  height: 200px;
  align-items: center;
  justify-content: space-around;
  font-size: 12px;
  color: red;
  /* position: absolute; */
}

.link-text {
  color: black;
}

.link-item:hover {
  background-color: #c9c9c9;
  transition: 100ms linear;
  box-shadow: 0px 0px 20px gray;
  margin-top: -5px;
  height: 210px;
  width: 210px;
}

.link-group {
  display: flex;
  justify-content: space-evenly;
  max-height: 200px;
  min-width: 800px;
  margin-bottom: 50px;
}

.button {
  max-width: 200px;
  position: relative;
}
</style>
