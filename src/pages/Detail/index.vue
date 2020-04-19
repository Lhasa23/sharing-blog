<template>
  <div id="detail">
    <section class="user-info">
      <img
        :src="user.avatar"
        :title="user.username"
        :alt="user.username"
        class="avatar"
      />
      <h3>{{ title }}</h3>
      <p>
        <router-link v-if="user.id === userId" :to="`/my`">
          {{ user.username }}
        </router-link>
        <router-link v-else :to="`/user/${user.id}`">{{
          user.username
        }}</router-link>
        发布于{{ friendlyDate(createdAt) }}
      </p>
    </section>
    <section class="article" v-html="markdown"></section>
  </div>
</template>

<script src="./index.js"></script>

<style src="./index.less" lang="less"></style>
