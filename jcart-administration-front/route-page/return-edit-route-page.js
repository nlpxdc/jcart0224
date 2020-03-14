const ReturnEditRoutePage = {
    template: `
<el-container>
<el-page-header @back="handleGoBack" content="编辑退货">
</el-page-header>
    <el-header>
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <el-menu-item v-for="menuItem in menuItems" :key="menuItem.id" :index="menuItem.index">
                {{menuItem.name}}
            </el-menu-item>
        </el-menu>
    </el-header>
    <el-main>
        <router-view></router-view>
    </el-main>
</el-container>
    `,
    data() {
        return {
            activeIndex: '',
            menuItems: [
                { name: '退货详情', index: 'show' },
                { name: '退货历史', index: 'history' }
            ]
        }
    },
    mounted() {
        console.log('view mounted');
        var paths = this.$route.path.split('/');
        this.activeIndex = paths[paths.length - 1];
    },
    methods: {
        handleGoBack() {
            console.log('go back click');
            this.$router.back();
        },
        handleSelect(val) {
            console.log('menu click', val);
            this.$router.replace(val);
        }
    }
}