<template>
  <div
    style="
      height: 100%;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px 30px;
    "
  >
    <div
      style="
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 20px 0;
      "
    >
      <span
        class="text-center justify-center"
        style="font-size: 15px; font-weight: bold; letter-spacing: 9pt"
        >WHAT DO YOU WANT TO DO TODAY?</span
      >
    </div>
    <div class="link-group">
      <div class="button">
        <router-link to="/dashboard/listOffender">
          <div class="link-item active">
            <img class="link-icon" src="@/assets/immigration.png" />
            <span class="link-text">LIST OFFENDER</span>
          </div>
        </router-link>
      </div>

      <div class="button">
        <router-link to="/dashboard/search">
          <div class="link-item active">
            <img class="link-icon" src="@/assets/search.png" />
            <span class="link-text">SEARCH OFFENDER</span>
          </div>
        </router-link>
      </div>

      <div class="button">
        <router-link to="/dashboard/reports">
          <div class="link-item active">
            <img class="link-icon" src="@/assets/verification.png" />
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
  transition: 100ms linear;
  box-shadow: 0px 0px 20px rgb(184, 2, 2);
  margin-top: -5px;
  height: 210px;
  width: 210px;
}

.link-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 10px;
  width: 100%;
  padding: 0 5%;
}

.button {
  margin-top: 30px;
  max-width: 200px;
  position: relative;
}
</style>
