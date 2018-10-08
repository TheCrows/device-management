<template>
    <div class="table">
        <div class="title">烟感设备状态</div>
        <el-table :data="mainInfo">
            <el-table-column prop="time" label="时间"></el-table-column>
            <el-table-column prop="type" label="设备类型"></el-table-column>
            <el-table-column prop="policeType" label="报警类型"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default {
        props: ['mainInfo'],
        data() {
            return {}
        }
    }
</script>
<style lang="scss" scoped>
    .table {
        height: 100%;
        color: #3CBFA6;
        font-size: 14px;
        overflow: hidden;

        .title {
            margin-bottom: 10px;
        }

        .el-table, .el-table /deep/ th, .el-table /deep/ tr {
            background-color: transparent;
            font-size: 14px;
            color: #3CBFA6;
            text-align: left;
        }
        .el-table /deep/ tr:hover {
            background-color: transparent;
            > td {
                background-color: #304356;
            }
        }
        .el-table /deep/ th, .el-table /deep/ td {
            font-size: 14px;
            color: #FCEF87;
            font-weight: 400;
            text-align: left;
            border-bottom: 2px solid rgba(54, 176, 158, 0.40);

        }
        .el-table /deep/ td {
            color: #3CBFA6;
        }
        .el-table::before {
            height: 2px;
            background-color: #2D3E50;
        }

    }
</style>


