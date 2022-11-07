<template>
  <div style="padding: 20px 30px; height: 100%; overflow-y: scroll">
    <!-- search button -->
    <div style="display: flex; flex-direction: column; margin: 2% 20%">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="search"
        >Search</label
      >
      <div style="display: flex; flex-direction: row">
        <input
          type="text"
          id="search"
          class="
            bg-gray-50
            border border-gray-300
            text-gray-900 text-sm
            rounded-xl
            focus:ring-blue-500 focus:border-blue-500
            block
            w-full
            pl-10
            p-2.5
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
          placeholder="Search by Name, ID Number, or Driver License Number"
          @keyup="search_offenses"
          v-model="search"
        />

        <!-- <button
          type="submit"
          class="
            p-2.5
            ml-2
            text-sm
            font-medium
            text-white
            bg-searchred
            rounded-lg
            border border-black
            hover:bg-red-800
          "
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button> -->
      </div>
    </div>
    <div style="display: flex; flex-direction: column; justify-content: center">
      <div
        style="
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 10px;
          padding: 0 5%;
        "
      >
        <img v-if="isLoading" src="@/assets/loader.gif" alt="Loading" />
        <div v-if="clientList === null">
          <p>No results found for {{ search }} query</p>
        </div>

        <div v-for="client in clientList" :key="client.id">
          <div class="client-background-btn">
            <div class="client-initial-icon">
              {{
                client.fullname
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
              }}
            </div>
            <div class="client-info">
              <div style="border: 2px solid; width: 200px; margin: 5px 0">
                <p style="font-size: 15px; margin: 5px">
                  {{ client.fullname }}
                </p>
              </div>
              <div style="border: 2px solid; width: 200px; margin: 5px 0">
                <p style="font-size: 15px; margin: 5px">
                  {{ client.idnumber }}
                </p>
              </div>
            </div>
            <div>
              <router-link
                :to="{
                  path: '/dashboard/offenderProfile',
                  props: client,
                  query: { id: client.idclients },
                }"
              >
                <p style="cursor: pointer">VIEW</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "search",
  data() {
    return {
      clientList: {},
      search: "",
      isLoading: true,
    };
  },
  created() {
    this.$apollo
      .query({
        // Query
        query: gql`
          query getOffences {
            getOffences {
              idclients
              fullname
              idnumber
            }
          }
        `,
      })
      .then(({ data }) => {
        this.isLoading = false;
        this.clientList = data.getOffences;
      })
      .catch((err) => {
        this.isLoading = false;
        this.toast.error(err.message || "Something went wrong", {
          timeout: 2000,
        });
      });
  },
  methods: {
    search_offenses() {
      this.$apollo
        .query({
          // Query
          query: gql`
            query searchOffences($searchQuery: String) {
              searchOffences(searchQuery: $searchQuery) {
                idclients
                fullname
                idnumber
              }
            }
          `,
          // Parameters
          variables: {
            searchQuery: this.search.trim(),
          },
        })
        .then(({ data }) => {
          this.isLoading = false;
          this.clientList = data.searchOffences;
        })
        .catch((err) => {
          this.isLoading = false;
          this.toast.error(err.message || "Something went wrong", {
            timeout: 2000,
          });
        });
    },
  },
};
</script>

<style scoped>
.client-background-btn {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 5px 10px;
  background-color: white;
  margin: 10px 10px;
  width: 400px;
  height: 150px;
  align-items: center;
  border-radius: 15px;
  border: 1px solid;
  border-color: #ca5757;
  color: gray;
  max-width: 470px;
}

.client-initial-icon {
  width: 90px;
  height: 90px;
  background-color: #c9c9c9;
  color: black;
  border-radius: 100%;
  border: 1px solid;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
}

.client-info {
  font-size: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
