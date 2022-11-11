<template>
  <div
    v-if="registered"
    class="
      w-screen
      h-screen
      flex flex-col
      justify-center
      items-center
      dark:text-white
    "
  >
    <h1 class="text-2xl lg:text-4xl 2xl:text-5xl font-medium">
      Confirm Account
    </h1>
    <p
      class="
        mt-4
        lg:mt-6
        2xl:mt-8
        text-center
        w-64
        lg:w-96
        2xl:w-auto 2xl:max-w-xl
        lg:text-xl
      "
    >
      Thank you for registering at Stelo! Please ask a Stelo staff member to
      confirm your account on
      <a
        href="https://discord.gg/3XkEUCmmae"
        target="_blank"
        rel="noopener noreferrer"
        class="text-cyan-400 underline"
        >Discord</a
      >. After this you can sign in!
    </p>
  </div>
  <div
    v-else
    class="
      w-screen
      h-screen
      flex flex-col
      justify-center
      items-center
      dark:text-white
    "
  >
    <h1 class="text-2xl xl:text-3xl font-medium">Register</h1>
    <div class="mt-4 w-64 xl:w-96 flex flex-col">
      <input
        type="text"
        class="input"
        :class="[
          error.username ? 'border-red-500' : 'border-black dark:border-white',
        ]"
        v-model="username"
        placeholder="Username..."
      />
      <p v-if="error.username" class="error">
        {{ error.username }}
      </p>
      <span v-else class="xl:mt-1">&nbsp;</span>
      <input
        type="password"
        class="input"
        :class="[
          error.password ? 'border-red-500' : 'border-black dark:border-white',
        ]"
        v-model="password"
        placeholder="Password..."
      />
      <p v-if="error.password" class="error">
        {{ error.password }}
      </p>
      <span v-else class="xl:mt-1">&nbsp;</span>
      <input
        type="password"
        class="input"
        :class="[
          error.confirmPassword
            ? 'border-red-500'
            : 'border-black dark:border-white',
        ]"
        v-model="confirmPassword"
        placeholder="Confirm Password..."
      />
      <p v-if="error.confirmPassword" class="error">
        {{ error.confirmPassword }}
      </p>
      <span v-else class="xl:mt-1">&nbsp;</span>
      <button
        @click="this.register()"
        class="
          dark:text-black
          w-full
          py-1.5
          xl:py-2.5
          text-lg
          xl:text-xl
          font-medium
          rounded-lg
          mt-1
        "
        :class="[
          errorUnknown ? 'bg-red-500' : 'bg-cyan-200',
          { 'animate-pulse': pending },
        ]"
      >
        Register
      </button>
    </div>
    <span class="hidden text-sm xl:text-base mt-6 xl:mt-10"
      >Already registered?
      <span class="text-cyan-400 dark:text-cyan-200 font-medium"
        >Login</span
      ></span
    >
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Register",
  components: {},
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      error: {
        username: "",
        password: "",
        confirmPassword: "",
      },
      errorUnknown: false,
      pending: false,
      registered: false,
    };
  },
  created() {
    document.title = "Register - Stelo Finance";
  },
  watch: {
    password() {
      if (this.password === this.confirmPassword || !this.confirmPassword) {
        this.error.confirmPassword = "";
      } else {
        this.error.confirmPassword = "doesn't match password";
      }
      if (this.password.length < 10 && this.password) {
        this.error.password = "minimum 10 characters";
      } else if (this.password.length > 32) {
        this.error.password = "max 32 characters";
      } else {
        this.error.password = "";
      }
    },
    confirmPassword() {
      if (this.confirmPassword === this.password || !this.confirmPassword) {
        this.error.confirmPassword = "";
      } else {
        this.error.confirmPassword = "doesn't match password";
      }
    },
  },
  methods: {
    async register() {
      let error = false;
      if (!this.username) {
        this.error.username = "required";
        error = true;
      }
      if (!this.password) {
        this.error.password = "required";
        error = true;
      }
      if (!this.confirmPassword) {
        this.error.confirmPassword = "required";
        error = true;
      }

      if (!error && !this.error.confirmPassword && !this.error.password) {
        this.pending = true;
        axios
          .post("/users", {
            username: this.username,
            password: this.password,
          })
          .then(() => {
            this.errorUnknown = false;
            this.registered = true;
          })
          .catch(() => (this.errorUnknown = true))
          .finally(() => (this.pending = false));
      }
    },
  },
});
</script>

<style lang="postcss" scoped>
.input {
  @apply mt-1 font-medium bg-transparent border-2 rounded-lg p-2 pr-0 w-full outline-none;
  @apply placeholder-gray-400 dark:placeholder-gray-500;
  @apply xl:mt-2 text-lg;
}

.error {
  @apply text-xs xl:text-sm mr-auto ml-1 mb-1.5 mt-0.5 text-red-500;
}
</style>
