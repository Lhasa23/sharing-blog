<template>
  <div id="my">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username" class="avatar" />
      <h3>{{ user.username }}</h3>
    </section>
    <section>
      <div class="item" v-for="blog in blogs" :key="blog.id">
        <div class="date">
          <span class="day">
            {{ splitDate(blog.updatedAt || blog.createdAt).date }}
          </span>
          <span class="month">
            {{ splitDate(blog.updatedAt || blog.createdAt).month }}
          </span>
          <span class="year">
            {{ splitDate(blog.updatedAt || blog.createdAt).year }}
          </span>
        </div>
        <h3>
          <router-link :to="`/detail/${blog.id}`">
            {{ blog.title }}
          </router-link>
        </h3>
        <p>
          <router-link :to="`/detail/${blog.id}`">
            {{ blog.description }}
          </router-link>
        </p>
        <div class="actions">
          <router-link to="/edit">编辑</router-link>
          <a href="#">删除</a>
        </div>
      </div>
    </section>
    <section class="pagination">
      <el-pagination
        v-show="total > 10"
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
<style lang="less" src="./index.less"></style>
