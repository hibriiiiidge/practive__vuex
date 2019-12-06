<template>
  <div>
    <p>
      <router-link to="/counter1">
        counter with map helper
      </router-link>
    </p>
    <p>
      <router-link to="/counter2">
        counter without map helper
      </router-link>
    </p>
    <p>
      <router-link to="/vuex">
        vuex
      </router-link>
    </p>
    <router-view></router-view>
  </div>
</template>
