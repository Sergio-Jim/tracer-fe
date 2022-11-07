<template>
  <div>
    <div
      :class="open ? 'bg-red-500 opacity-25' : 'opacity-100'"
      class="absolute top-0 left-0 h-screen w-screen"
    >
      <button @click="tog()" class="text-black text-2xl p-2 font-bold">
        &#9776;
      </button>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
    <nav
      :class="open ? 'navbar-open' : 'navbar-close'"
      class="navbar w-64 absolute overflow-x-scroll bg-gray-700 top-0 h-screen"
    >
      <div class="flex pr-2 justify-end">
        <button @click="tog()" class="p-2 text-white text-xl font-bold">
          &#9747;
        </button>
      </div>
      <h1 class="text-xl text-center font-bold pt-5">Menu</h1>
      <ul class="list-none text-white text-center">
        <li class="my-8"><a href="#"></a>Teams</li>
        <li class="my-8"><a href="#"></a>Projects</li>
        <li class="my-8"><a href="#"></a>Favourites</li>
        <li class="my-8"><a href="#"></a>Notifications</li>
        <li class="my-8"><a href="#"></a>Members</li>
      </ul>
    </nav>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  data() {
    return {
      open: false,
    };
  },
  components: {
    // HelloWorld
  },
  methods: {
    tog() {
      this.open = !this.open;
    },
  },
};
</script>

<style>
.navbar {
  transition: all 330ms ease-out;
}

.navbar-open {
  transform: translateX(0%);
}
.navbar-close {
  transform: translateX(-100%);
}
</style>

<!-- //version 2
    <div :class="open ? 'bg-red-500 opacity-25':'opacity-100'" class="absolute top-0 left-0 h-screen w-screen">
      <button @click="tog()" class="text-black text-2xl p-2 font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </button>

      //content
      <div class="p-8"><router-view></router-view></div>
    </div>
    <nav
      :class="open ? 'navbar-open' : 'navbar-close'"
      class="
        navbar
        text-black
        w-64
        space-y-6
        px-2
        py-4
        absolute
        h-screen
        top-0
        flex flex-col
        justify-between
      "
    >
      <div class="flex pr-2 justify-end">
        <button @click="tog()" class="p-2 text-black text-xl font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ul style="padding: 30% 0; border-right: 2px solid; border-color: red">
        <li>
          <router-link
            to="/dashboard/"
            v-bind:style="{
              fontWeight: this.$route.path === '/Home' ? 'bolder' : '',
            }"
          >
            <div
              class="
                group
                flex
                items-center
                space-x-2
                py-3
                px-4
                hover:bg-tracergrey
                rounded
                hover:text-red-700
                transition
                duration-200
              "
            >
              <span class="text-black group-hover:text-red-700">Home</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link
            to="/dashboard/listOffender"
            v-bind:style="{
              fontWeight:
                this.$route.path === '/dashboard/listOffender' ? 'bolder' : '',
            }"
          >
            <div
              class="
                group
                flex
                items-center
                space-x-2
                py-3
                px-4
                hover:bg-tracergrey
                rounded
                hover:text-red-700
                transition
                duration-200
              "
            >
              <span class="text-black group-hover:text-red-700"
                >List Offender</span
              >
            </div>
          </router-link>
        </li>
        <li>
          <router-link
            to="/dashboard/search"
            v-bind:style="{
              fontWeight:
                this.$route.path === '/dashboard/search' ? 'bolder' : '',
            }"
          >
            <div
              class="
                group
                flex
                items-center
                space-x-2
                py-3
                px-4
                hover:bg-tracergrey
                rounded
                hover:text-red-700
                transition
                duration-200
              "
            >
              <span class="text-black group-hover:text-red-700">Search</span>
            </div>
          </router-link>
        </li>
      </ul>

      <div class="p-4">
        <div class="flex flex-row justify-center">
          <div
            class="flex flex-col h-6 w-6 cursor-pointer items-center"
            v-on:click="logout"
          >
            <img src="@/assets/padlock.png" alt="" />
            <h4 style="cursor: pointer; font-size: 15px" v-on:click="logout">
              LOCK
            </h4>
          </div>
          <div class="flex flex-col h-full ml-12 max-w-xs">
            <h4>{{ username }}</h4>
          </div>
        </div>
      </div>
    </nav> -->