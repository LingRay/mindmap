<template lang="">
<div class="attachment-group">
  <div class="link ">
    <el-button class="tab-icons insert" @click="showOverlay"></el-button>
    <el-button class="tab-icons dropdown-toggle" type="text">链接</el-button>
  </div>
  <div class="img">
    <el-button class="tab-icons insert" @click="showOverlay"></el-button>
    <el-button class="tab-icons dropdown-toggle" type="text">图片</el-button>
  </div>
  <div class="remark">
    <el-button class="tab-icons insert" @click="showOverlay"> </el-button>
    <el-button class="tab-icons dropdown-toggle" type="text">附件</el-button>
  </div>
</div>

</template>

<script>
// import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'attachment',
  computed: {
    ...mapGetters({
      count: 'count'
    })
  },
  methods: {
    // ...mapMutations({
    //   changeCount: 'changeCount',
    // }),
    ...mapActions([
      'changeCount',
      'increment',
      'clearMemory',
      'setMemory',
    ]),
    test(key,value){
       this.clearMemory(key,value);
    },
    showOverlay() {
      this.$msgbox({
        title: '输入',
        message: '这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容',
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = '执行中...';
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3000);
          } else {
            done();
          }
        }
      }).then(action => {
        // this.$message({
        //   type: 'info',
        //   message: 'action: ' + action
        // });
      });
    },
  }
}

</script>
