<template>
  <div id="edit">
    <h1>编辑文章</h1>
    <el-form ref="form" v-model="editBlog">
      <el-form-item label="文章标题">
        <el-input
          type="text"
          v-model="editBlog.title"
          maxlength="40"
          show-word-limit
        ></el-input>
      </el-form-item>
      <el-form-item label="内容简介">
        <el-input
          v-model="editBlog.description"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4 }"
          maxlength="140"
          show-word-limit
        ></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <el-input
          v-model="editBlog.content"
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 30 }"
        ></el-input>
      </el-form-item>
      <el-form-item label="是否展示在首页">
        <el-switch
          v-model="editBlog.atIndex"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </el-form-item>
      <el-form-item>
        <el-button @click="onEdit">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script src="./index.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" src="./index.less"></style>
