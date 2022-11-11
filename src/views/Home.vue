<template>
  <div class="flex flex-col h-screen items-center dark:text-white">
    <div
      class="
        flex flex-col
        lg:flex-row
        flex-grow
        items-center
        justify-center
        px-3
      "
    >
      <svg
        class="fill-current text-black dark:text-white w-44 lg:w-56 xl:w-72"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="animate-spin-slow logo"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M493.461 36L912 264.802V716.606L493.461 964.387L88 715.552L88 264.802L493.461 36Z"
          fill="#A2E9FF"
        />
        <path
          class="animate-spin-slow logo"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M81 260L495.048 26L919.5 259.5V720L495.048 973.5L81.5 720L81 260ZM495.048 58.5L892 275.5V704L495.048 939L110.5 703L110.5 275.5L495.048 58.5Z"
        />
        <path
          d="M659.549 412.338L500.18 324.708L345.018 412.338V585.027L500.18 680.368L659.549 585.027V412.338Z"
        />
        <path
          d="M345.018 391.517L483.364 314.066L314.273 190.5L345.018 391.517Z"
        />
        <path
          d="M515.056 314.066L659.549 391.517L686.154 190.5L515.056 314.066Z"
        />
        <path
          d="M345.018 609.006L483.233 693.343L314.264 810.697L345.018 609.006Z"
        />
        <path
          d="M519.833 693.343L659.549 606.132L686.145 810.697L519.833 693.343Z"
        />
        <path d="M679.488 412.338V585.027L866.5 493.5L679.488 412.338Z" />
        <path d="M322.512 412.338V585.027L136.5 493.5L322.512 412.338Z" />
      </svg>
      <div class="flex flex-col items-center lg:ml-4 mt-4 lg:mt-0">
        <h1 class="font-medium text-2xl lg:text-5xl xl:text-6xl">
          BitCraft's leading
        </h1>
        <h1 class="font-medium text-2xl lg:text-5xl xl:text-6xl">
          finance platform.
        </h1>
        <h2 class="hidden xl:block mt-2 text-sm xl:text-xl text-center">
          Innovative. Player focused. Player driven.
        </h2>
        <h2 class="xl:hidden mt-2 text-sm lg:text-lg xl:text-lg text-center">
          Innovative. Player focused.
        </h2>
        <h2 class="xl:hidden text-sm lg:text-lg xl:text-lg text-center">
          Player driven.
        </h2>
        <div class="flex flex-col lg:flex-row mt-6">
          <router-link
            to="/register"
            class="
              flex
              justify-center
              items-center
              bg-cyan-200
              text-black
              font-medium
              xl:text-lg
              rounded-full
              w-56
              lg:w-50
              xl:w-64
              lg:mr-3
              py-1.5
              xl:py-2.5
            "
          >
            <h1>Get Started</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="fill-current h-8"
            >
              <path
                d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11H4z"
              ></path>
            </svg>
          </router-link>
          <a
            href="https://discord.gg/t6gM7v7V7T"
            target="_blank"
            rel="noopener noreferrer"
            ><span
              class="
                mt-3
                lg:mt-0
                flex
                justify-center
                items-center
                border-2 border-black
                dark:border-white
                font-medium
                xl:text-lg
                rounded-full
                w-56
                lg:w-50
                xl:w-64
                lg:ml-3
                py-1
                xl:py-2
              "
            >
              <h1>Discord</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="fill-current h-8"
              >
                <path
                  d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11H4z"
                ></path>
              </svg> </span
          ></a>
        </div>
      </div>
    </div>
    <div
      class="
        text-black
        w-full
        h-12
        lg:h-16
        xl:h-20
        flex
        justify-center
        items-center
        bg-gradient-to-r
        from-cyan-200
        to-mint-250
        shadow-md
      "
    >
      <span class="lg:text-lg">THE STELO FINANCE PLATFORM</span>
    </div>
  </div>
  <div class="bg-gradient-to-b from-cyan-200 to-mint-250 flex">
    <div
      class="
        mx-auto
        grid grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
        lg:gap-8
        px-4
        lg:px-12
        py-8
        text-center
      "
    >
      <div class="info-div">
        <h3 class="info-header">Convienent in every way</h3>
        <p class="info-text">
          One of Stelo’s core goals is to be a convienent way for managing all
          your finances. Once you’ve created your account and it has been
          confirmed, the entire platform is at your fingertips.
        </p>
      </div>
      <div class="info-div">
        <h3 class="info-header">Built to be built upon</h3>
        <p class="info-text">
          By using Stelo’s smart wallet system, you can build banks, investment
          markets, tax systems, and so much more on top of Stelo’s platform.
        </p>
      </div>
      <div class="info-div">
        <h3 class="info-header">Connecting the physical to the digial</h3>
        <p class="info-text">
          Every item in the Stelo ecosystem is backed by the real asset in game.
          Whenever you want any of your digital goods in game, just visit a
          Stelo partnered warehouse and you’ll receive your items from your
          account.
        </p>
      </div>
      <div class="info-div">
        <h3 class="info-header">A unifying currency</h3>
        <p class="info-text">
          The Stelo coin is a divisible, limited supply currency built into the
          Stelo platform. While there is a secret future use for the coin, for
          now its simply an option for players to use as currency.
        </p>
      </div>
      <div class="info-div">
        <h3 class="info-header">A free platform</h3>
        <p class="info-text">
          Stelo’s core functionality is completely free! No monthly
          subscription, no transactions fees on anything. Stelo will be
          monetized by other means if needed.
        </p>
      </div>
      <div class="info-div">
        <h3 class="info-header">A global exchange</h3>
        <p class="info-text">
          To showcase the power of the smart wallet system, Stelo will be
          creating a global exchange where users can sell goods to anyone,
          anytime, anywhere.
        </p>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-center py-3 lg:py-5 2xl:py-6">
    <svg
      class="fill-current text-black dark:text-white h-10 lg:h-14 2xl:h-16"
      viewBox="0 0 2390 948"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.5 234.5L414.548 0.5L839 234V694.5L414.548 948L1 694.5L0.5 234.5ZM414.548 33L811.5 250V678.5L414.548 913.5L30 677.5L30 250L414.548 33Z"
      />
      <path
        d="M579.049 386.838L419.68 299.208L264.518 386.838V559.527L419.68 654.868L579.049 559.527V386.838Z"
      />
      <path d="M264.518 366.017L402.864 288.566L233.773 165L264.518 366.017Z" />
      <path d="M434.556 288.566L579.049 366.017L605.654 165L434.556 288.566Z" />
      <path
        d="M264.518 583.506L402.733 667.843L233.764 785.197L264.518 583.506Z"
      />
      <path
        d="M439.333 667.843L579.049 580.632L605.645 785.197L439.333 667.843Z"
      />
      <path d="M598.988 386.838V559.527L786 468L598.988 386.838Z" />
      <path d="M242.012 386.838V559.527L56 468L242.012 386.838Z" />
      <path
        d="M1081.5 413.531L1140.5 367.531C1118.91 301.668 1095.42 279.705 1026.5 276.031C965.297 275.214 942.198 290.589 918 342.031C910.431 416.914 933.622 446.462 1021.5 478.031C1085.75 495.229 1120.85 514.945 1126.5 577.031C1114.07 672.659 941.536 667.123 923 574.031L900 579.531C950.988 736.02 1160.21 665.94 1151 577.031C1139.43 500.788 1108.9 476.972 1029 454.531C957.398 425.426 934.856 403.237 943 347.531C958.168 314.026 973.193 300.834 1026.5 300.031C1072.34 302.593 1093.4 311.7 1111.5 360.031L1067 395.031L1081.5 413.531Z"
      />
      <path
        d="M1186.5 280.531H1456V305.031H1333.5V662.531H1309V305.031H1186.5V280.531Z"
      />
      <path
        d="M1743.5 666.531H1515V280.531H1763.5L1611.5 443.531H1716V468.031H1556.5L1708 305.031H1539.5V642.031H1743.5V666.531Z"
      />
      <path
        d="M1825.5 280.531H1849.5L1850 642.031H2053.5V666.531H1825.5V280.531Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2233.5 277.031C2126.58 278.796 2101.99 330.196 2098.5 468.031C2100.34 633.936 2145.84 674.917 2236 672.531C2340.29 662.702 2360.51 612.765 2360 468.031C2358.99 323.974 2326.05 287.735 2233.5 277.031ZM2123 468.031C2124.51 346.102 2144.77 304.086 2233.5 300.531C2322.21 307.669 2336.49 353.945 2335.5 468.031C2331.83 636.99 2297.75 641.565 2236 647.031C2156.37 648.693 2127.69 622.647 2123 468.031Z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
  created() {
    document.title = "Stelo Finance";
  },
});
</script>

<style lang="postcss" scoped>
.logo {
  transform-origin: 50% 50%;
}

.info-div {
  @apply bg-gray-50 bg-opacity-20 shadow-md rounded-lg py-3 sm:py-5 px-2 sm:px-4 max-w-xs lg:max-w-sm;
}

.info-header {
  @apply font-medium text-xl lg:text-2xl;
}

.info-text {
  @apply lg:mt-2 2xl:mt-4 font-light lg:text-lg;
}
</style>
