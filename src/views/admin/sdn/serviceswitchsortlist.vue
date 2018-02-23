
   <template>
     <div class="anclear ">
       <p class="describe">
         <strong>物理端口管理 ( account ) </strong>负责将交换机物理端口分配给用户并指定带宽
       </p>
       <div class="anclear fff ancontent" >
         <!--按钮组-->
         <!--<ButtonGroup  ref="button1" :button="serviceSwitchPortList.buttons" ></ButtonGroup>-->
         <div class="anclear fff">
           <ul class="anclear fl button-pop">
             <li class="fl">
               <el-button @click="refresh"   >
                 <i class="iconfont icon-shuaxin1"></i>
               </el-button>
             </li>
             <li class="fl">
               <el-button @click="zhipai"    >
                 <i class="iconfont icon-fenpei2"></i>
                 指派端口类型</el-button>
             </li>
             <li class="fl">
               <el-button @click="bianji"   >
                 <i class="iconfont icon-xiugai"></i>
                 编辑描述</el-button>
             </li>
             <li class="fl">
               <el-button @click="tiaozheng"    >
                 <i class="iconfont icon-guanli4"></i>
                 调整VLAN</el-button>
             </li>
             <li class="fl">
               <el-button @click="tiaozhengdaikuan"    >
                 <i class="iconfont icon-guanli4"></i>
                 调整带宽</el-button>
             </li>
             <li class="fl">
               <el-button @click="tihuan"   >
                 <i class="iconfont icon-tihuan"></i>
                 替换端口</el-button>
             </li>

           </ul>
           <div class="anclear fl tableSearch" v-show="serviceSwitchPortList.hasSearch">
             <el-input class="fl" v-model="serviceSwitchPortList.keyword" placeholder="筛选关键词" style="display: inline-block"  ></el-input>
             <el-button class="fr"  type="primary" icon="search" @click="searchFilter(serviceSwitchPortList)" >搜索</el-button>
           </div>

           <div class="anclear fl fastSearch">
             <el-radio-group v-model="radio2" @click.native="fastSearch(radio2)">
               <el-radio :label="''">全部</el-radio>
               <el-radio :label="'未指派'">未指派</el-radio>
               <el-radio :label="'用户入口'">用户入口</el-radio>
               <el-radio :label="'Internet出口'">Internet出口</el-radio>
               <el-radio :label="'专线出口'">专线出口</el-radio>
             </el-radio-group>
           </div>
         </div>

         <!--表格-->
         <TablesData class="an-table" ref="multipleTable2" :tableDatas="serviceSwitchPortList" > <!-- :tableDatas 不能改变 table组件就是用的这个接受的参数  -->

           <el-table-column  v-if=serviceSwitchPortList.inputIndex type="index" lable="列" fixed width="50"></el-table-column>
           <el-table-column v-if=serviceSwitchPortList.inputSection type="selection" fixed width="50"></el-table-column>
           <el-table-column  prop="id" label="交换机"  fixed></el-table-column>
           <el-table-column  prop="account" label="端口"></el-table-column>
           <el-table-column  prop="customerOwner" label="端口类型"></el-table-column>
           <el-table-column  prop="email" label="VLAN范围"></el-table-column>
           <el-table-column  prop="form" label="端口宽带" ></el-table-column>
           <el-table-column  prop="mobilePhone" label="端口状态"></el-table-column>
           <el-table-column  prop="componey" label="接口类型"></el-table-column>
           <el-table-column  prop="address" label="描述" width="200"></el-table-column>

         </TablesData>
         <!--分页-->
         <div class="table-pagination fr">
           <fenYe ref="asdf" :feYeData="serviceSwitchPortList"></fenYe>
         </div>
       </div>
       <Pop v-if="pop1.popTitle" :itemss="pop1" >
         <div class="popContent">
           <ul class="an-width170">
             <li >
               <div>端口：</div>
               <div>{{serviceSwitchPortList.selected[0].id}}</div>

             </li>
             <li>
               <div>类型：</div>
               <div>
                 <el-select v-model="value" placeholder="请选择">
                   <el-option
                     v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
                   </el-option>
                 </el-select>
               </div>
             </li>
           </ul>
         </div>
       </Pop>
       <Pop v-if="pop2.popTitle"  :itemss="pop2" >
         <div class="popContent">
           <ul class="an-width170">
             <li >
               <div>端口：</div>
               <div>{{serviceSwitchPortList.selected[0].id}}</div>
             </li>
             <li>
               <div>描述：</div>
               <el-input v-model="input" placeholder="请输入内容"></el-input>
             </li>
           </ul>
         </div>
       </Pop>
       <Pop v-if="pop3.popTitle"  :itemss="pop3" >
         <div class="popContent">
           <ul class="an-width170">
         <li >
           <div>端口：</div>
           <div style="margin-left: 55px;">{{serviceSwitchPortList.selected[0].id}}</div>
         </li>
         <li >
           <div>VALN段：</div>
         </li>
         <li >
           <div>起始VALN ID：</div>
           <div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
         </li>
         <li >
           <div>终止VALN ID：</div>
           <div>
             <el-input v-model="input" placeholder="请输入内容"></el-input>
             <el-button type="primary" style="margin: 10px 5px;">新增VALN分配</el-button>
           </div>
         </li>
           </ul>
         </div>
       </Pop>
       <Pop v-if="pop4.popTitle"  :itemss="pop4">
         <div class="popContent">
           <ul class="an-width170">
         <li>
           <div>请选择目标端口所在位置：</div>
           <div>
             <el-select v-model="value" placeholder="请选择">
               <el-option
                 v-for="item in options"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
               </el-option>
             </el-select>
           </div>
         </li>
         <li>
           <div>请选择目标端口：</div>
           <div style="margin-left: 49px;">
             <el-select v-model="value" placeholder="请选择">
               <el-option
                 v-for="item in options"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
               </el-option>
             </el-select>
           </div>
         </li>
           </ul>
        </div>

       </Pop>
       <Pop v-if="pop5.popTitle"  :itemss="pop5" >
         <div class="popContent">
           <ul class="an-width170">
             <li >
               <div>端口：</div>
               <div style="margin-left: 40px;">{{serviceSwitchPortList.selected[0].id}}</div>
             </li>
             <li>
               <div>带宽(Mbps)：</div>
               <el-input v-model="input" placeholder="请输入内容"></el-input>
             </li>
           </ul>
         </div>
       </Pop>
     </div>


   </template>

   <script>
     import router from '../../../router'
     import {mapGetters,mapActions} from 'vuex'
     export default {
       data() {
         return {
           input:'',

//        selected:[],
           options: [{
             value: '选项1',
             label: '用户入口'
           }, {
             value: '选项2',
             label: '专线出口'
           }, {
             value: '选项3',
             label: 'Internet出口'
           }],
           value:'',
//        selected:[],
           radio2:'',
           pop1:{
             popTitle:'',
             numTop:'',
             fun:this.pop1fun
           },
           pop2:{
             popTitle:'',
             numTop:'',
             fun:this.pop2fun
           },
           pop3:{
             popTitle:'',
             numTop:'',
             fun:this.pop3fun
           },
           pop4:{
             popTitle:'',
             numTop:'',
             fun:this.pop4fun
           },
           pop5:{
             popTitle:'',
             numTop:'',
             fun:this.pop5fun
           },

           pickerOptions2: {
             shortcuts: [{
               text: '最近一周',
               onClick(picker) {
                 const end = new Date();
                 const start = new Date();
                 start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                 picker.$emit('pick', [start, end]);
               }
             }, {
               text: '最近一个月',
               onClick(picker) {
                 const end = new Date();
                 const start = new Date();
                 start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                 picker.$emit('pick', [start, end]);
               }
             }, {
               text: '最近三个月',
               onClick(picker) {
                 const end = new Date();
                 const start = new Date();
                 start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                 picker.$emit('pick', [start, end]);
               }
             }]
           },
//        value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],//默认
           value4: ''
         }
       },
       computed:mapGetters(
         ['serviceSwitchPortList']
       ),
       components:{

       },
       methods:{
         ...mapActions(
           ['searchFilter','fenyedabao','handleEdit','handleDelete','getTableData','refresh','goToPage','pop']
         ),
         fastSearch(res){
           this.serviceSwitchPortList.keyword=res;
           this.searchFilter(this.serviceSwitchPortList);
         },

         zhipai(){
//        this.serviceSwitchPortList.selected=this.$refs.multipleTable2._self.$refs.multipleTable.store.states.selection;
//           console.log(this.serviceSwitchPortList.selected)
           if(this.serviceSwitchPortList.selected.length==1){
//          console.log(this.serviceSwitchPortList.selected[0]);//table被选中的集合
             this.pop(['指派端口类型',this.pop1])
//        this.$refs.multipleTable2._self.$refs.multipleTable.toggleRowSelection(this.serviceSwitchPortList.tableData[0],true);
             this.serviceSwitchPortList.selected[0].type='禁用'
           }else{
             alert('请仅选择一项')
           }
//        console.log(this.serviceSwitchPortList.selected);//table被选中的集合
         },
         pop1fun() {//对划价进行的一系列的操作
           console.log(this.serviceSwitchPortList.selected);
           console.log('dianjile hua jia');
         },

         bianji(){
           if(this.serviceSwitchPortList.selected.length==1){
             this.pop(['编辑描述',this.pop2])
           }else{
             alert('请仅选择一项')
           }
         },
         pop2fun(){
           console.log(this.serviceSwitchPortList.selected);
         },
         tiaozheng(){
           if(this.serviceSwitchPortList.selected.length==1){
             this.pop(['调整VALN',this.pop3])
           }else{
             alert('请仅选择一项')
           }
         },
         pop3fun(){
           console.log(this.serviceSwitchPortList.selected);
         },
         tihuan(){
           if(this.serviceSwitchPortList.selected.length==1){
             this.pop(['替换端口',this.pop4])
           }else{
             alert('请仅选择一项')
           }
         },
         pop4fun(){
           console.log(this.serviceSwitchPortList.selected);
         },
         tiaozhengdaikuan(){
           if(this.serviceSwitchPortList.selected.length==1){
             this.pop(['调整带宽',this.pop5])
           }else{
             alert('请仅选择一项')
           }
         },
         pop5fun(){
           console.log(this.serviceSwitchPortList.selected);
         },

         nextPage(res){
           this.router.beforeEach((to, from, next) => {
             next({
               path: '/customer!details',
               query: { redirect: 'sssss' }//把要跳转的地址作为参数传到下一步
             })
           });
//        router.push({path:'customer!details'});
           console.log(this.$route)
         }

       },

       created:function(){
         var allRes={};
         allRes.url='https://www.easy-mock.com/mock/59701611a1d30433d8383f65/longtel.com/customerimages2';
         allRes.datas=this.serviceSwitchPortList;
         allRes.tiems=20000;

         this.getTableData(allRes);

//      this.handleSizeChange();

       },
       mounted:function () {
         this.$nextTick(function () {
           this.searchFilter(this.serviceSwitchPortList);//页面初始化就筛选''也就是全部数据 并且打包分页 与上边一样的功能
           this.serviceSwitchPortList.selected=[];
           this.serviceSwitchPortList.keyword=''
         })
       }



     }
   </script>
   <style scoped>

     .tableSearch .el-input{
       width:240px
     }

     .tableSearch input{
       width:220px;
     }
   </style>

