<template>
  <div id="index">
    <section class="blog-posts">
      <div class="item" v-for="blog in blogs" :key="blog.id">
        <figure class="avatar">
          <img
            :src="blog.user.avatar"
            :alt="blog.user.username"
            @click="clickAvatar(blog.user.id)"
          />
          <figcaption>
            <router-link :to="`/user/${blog.user.id}`">
              {{ blog.user.username }}
            </router-link>
          </figcaption>
        </figure>
        <h3>
          <router-link :to="`/detail/${blog.id}`">
            {{ blog.title }}
          </router-link>
          <span>{{ friendlyDate(blog.updatedAt || blog.createdAt) }}</span>
        </h3>

        <p>
          <router-link :to="`/detail/${blog.id}`">
            {{ blog.description }}
          </router-link>
        </p>
      </div>
    </section>
    <section class="pagination">
      <el-pagination
        layout="total, prev, pager, next, jumper"
        :total="total"
        :current-page="page"
        @current-change="onPageChange"
      >
      </el-pagination>
    </section>
  </div>
</template>

<script src="./index.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" src="./index.less"></style>
